"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { useRecipes } from "@/hooks/useRecipes";
import Spinner from "@/UI/Spinner";
import ErrorComponents from "@/UI/ErrorComponents";
import RecipeCard from "../RecipesCard";

function ShowingRecipes() {
    const searchParams = useSearchParams();
    const search = searchParams.get("search") || "";
    const searchValue = search.trim().toLocaleLowerCase();
    const category = Number(searchParams.get("category")) || null;
    const minTime = Number(searchParams.get("minTime")) || 10;
    const maxTime = Number(searchParams.get("maxTime")) || 120;
    const [sortType, setSortType] = useState("AtoZ");

    const { data, isLoading, error } = useRecipes();
    if (isLoading) return <Spinner />;
    if (error) return <ErrorComponents message={error.message} />;

    const filteredRecipes = data
        .filter((recipe) => {
            const matchSearch = recipe.title
                .toLowerCase()
                .includes(searchValue);

            const matchCategory =
                category === null || recipe.category_id === category;

            const matchTime =
                minTime <= recipe.cook_time && recipe.cook_time <= maxTime;

            return matchSearch && matchCategory && matchTime;
        })
        .sort((a, b) => {
            if (sortType === "AtoZ") {
                return a.title.localeCompare(b.title);
            }

            if (sortType === "ZtoA") {
                return b.title.localeCompare(a.title);
            }

            if (sortType === "HtoL") {
                return b.price - a.price;
            }

            if (sortType === "LtoH") {
                return a.price - b.price;
            }

            return 0;
        });

    function handelSelectBox(e) {
        setSortType(e.target.value);
    }

    return (
        <div className="flex-1">
            {/* Filter */}
            <div className="mb-6 flex items-center justify-between">
                <div className="flex flex-row items-center gap-x-3">
                    <span className="capitalize">sort by : </span>
                    <select
                        className="w-40 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm transition hover:border-orange-500 focus:border-orange-500"
                        onChange={handelSelectBox}
                    >
                        <option value="AtoZ">Name : A - Z</option>
                        <option value="ZtoA">Name : Z - A</option>
                        <option value="HtoL">Price : High To Low</option>
                        <option value="LtoH">Price : Low TO High</option>
                    </select>
                </div>
                <div className="flex flex-row items-center gap-x-1.5">
                    <span className="text-zinc-400">Showing</span>
                    <span className="font-semibold text-orange-500">
                        {filteredRecipes.length}
                    </span>
                    Recipes
                </div>
            </div>
            {/* Foods */}
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredRecipes.map((item) => (
                    <li key={item.id}>
                        <RecipeCard item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShowingRecipes;

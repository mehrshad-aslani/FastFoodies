"use client";

import Link from "next/link";
import TitleSections from "../TitleSections";
import RecipeCard from "@/Components/Recipes/RecipesCard";
import { useRecipes } from "@/hooks/useRecipes";
import Spinner from "@/UI/Spinner";
import ErrorComponents from "@/UI/ErrorComponents";

export default function PopularSection() {
    const { data, isLoading, error } = useRecipes();

    if (isLoading) return <Spinner />;
    if (error) return <ErrorComponents message={error.message} />;

    const topRatedRecipes = [...data]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <div className="mx-auto my-16 w-[90%] rounded-2xl bg-gray-900/40 p-6 sm:p-8 lg:p-10">
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <TitleSections>⭐ Top Rated Recipes</TitleSections>

                <Link
                    href="/Recipes"
                    className="text-base font-semibold text-orange-500 transition-all duration-300 hover:translate-x-3 hover:scale-90 hover:text-orange-600 lg:text-lg"
                >
                    View all recipes →
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {topRatedRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} item={recipe} />
                ))}
            </div>
        </div>
    );
}

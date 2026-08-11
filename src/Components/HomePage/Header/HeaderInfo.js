"use client";

import {
    HiOutlineBookOpen,
    HiStar,
    HiClock,
    HiOutlineSquares2X2,
} from "react-icons/hi2";
import { useRecipes } from "@/hooks/useRecipes";
import Spinner from "@/UI/Spinner";
import ErrorComponents from "@/UI/ErrorComponents";

function HeaderInfo() {
    const { data: recipes, isLoading, error } = useRecipes();

    if (isLoading) return <Spinner />;
    if (error) return <ErrorComponents message={error.message} />;

    const totalRecipes = recipes.length;

    const averageRating =
        recipes.reduce((total, recipe) => total + recipe.rating, 0) /
        recipes.length;

    const averageCookTime =
        recipes.reduce((total, recipe) => total + recipe.cook_time, 0) /
        recipes.length;

    const categories = new Set(recipes.map((recipe) => recipe.category_id))
        .size;

    const stats = [
        {
            icon: <HiOutlineBookOpen className="text-3xl text-orange-500" />,
            value: totalRecipes,
            label: "Total Recipes",
        },
        {
            icon: <HiStar className="text-3xl text-orange-500" />,
            value: averageRating.toFixed(1),
            label: "Average Rating",
        },
        {
            icon: <HiClock className="text-3xl text-orange-500" />,
            value: `${Math.round(averageCookTime)} min`,
            label: "Average Cook Time",
        },
        {
            icon: <HiOutlineSquares2X2 className="text-3xl text-orange-500" />,
            value: categories,
            label: "Categories",
        },
    ];

    return (
        <div className="absolute -bottom-2 left-1/2 w-[95%] -translate-x-1/2 rounded-2xl px-4 py-5 backdrop-blur-lg sm:w-[90%] sm:px-6 sm:py-6 lg:-bottom-8 lg:-translate-y-1/2 lg:px-8">
            <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-row lg:items-center lg:justify-around">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="flex flex-row items-center justify-center gap-x-3 lg:gap-x-5"
                    >
                        {stat.icon}

                        <div className="flex flex-col gap-y-1 lg:gap-y-2">
                            <h4 className="text-lg font-bold lg:text-2xl">
                                {stat.value}
                            </h4>

                            <p className="text-xs capitalize lg:text-base">
                                {stat.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeaderInfo;

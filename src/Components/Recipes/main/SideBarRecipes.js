"use client";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { HiClock } from "react-icons/hi";

import TimeRanges from "@/Components/Recipes/main/TimeRange";

import Spinner from "@/UI/Spinner";
import ErrorComponents from "@/UI/ErrorComponents";
import { useCategories } from "@/hooks/useCategories";
import { useRecipes } from "@/hooks/useRecipes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SideBarRecipes() {
    const {
        data: Categories,
        isLoading: CategoriesLoading,
        error: CategoriesError,
    } = useCategories();
    const {
        data: Recipes,
        isLoading: RecipesLoading,
        error: RecipesError,
    } = useRecipes();

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handelCategories(id) {
        const params = new URLSearchParams(searchParams);
        params.set("category", id);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }
    const categoryActive = searchParams.get("category");

    if (CategoriesLoading) return <Spinner />;
    if (CategoriesError)
        return <ErrorComponents message={CategoriesError.message} />;

    if (RecipesLoading) return <Spinner />;
    if (RecipesError) return <ErrorComponents message={RecipesError.message} />;

    return (
        <aside className="w-70 shrink-0">
            <div className="rounded-2xl border border-gray-400 bg-gray-500/15">
                <div className="flex items-center gap-2 p-3">
                    <HiOutlineSquares2X2 className="text-2xl text-orange-500" />
                    <h4 className="text-2xl font-bold">Categories</h4>
                </div>
                <ul>
                    {Categories.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => handelCategories(item.id)}
                            className={`flex h-15 w-full cursor-pointer flex-row items-center justify-between rounded-3xl p-5 transition-all duration-500 hover:translate-x-1 hover:bg-linear-to-r hover:from-orange-500 hover:via-orange-800 hover:to-black/30 hover:text-white ${Number(categoryActive) === item.id && "bg-linear-to-r from-orange-500 via-orange-800 to-black/30 text-white"}`}
                        >
                            <span>
                                {item?.image} {item.name}
                            </span>
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-700 text-gray-200">
                                <span>
                                    {
                                        Recipes?.filter(
                                            (Recipe) =>
                                                Recipe.category_id === item.id,
                                        ).length
                                    }
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* validation Box */}
            <div className="my-2 rounded-2xl border border-zinc-700 bg-gray-500/15 p-5">
                <div className="flex items-center gap-2">
                    <HiClock className="text-2xl text-orange-500" />
                    <h4 className="text-xl font-bold capitalize">
                        Cooking Time
                    </h4>
                </div>
                <TimeRanges />
            </div>
        </aside>
    );
}

export default SideBarRecipes;

import { HiOutlineSquares2X2 } from "react-icons/hi2";
import RecipeCard from "./RecipesCard";
import { HiClock } from "react-icons/hi";

function Header() {
    return (
        <div>
            {/* header */}
            <div
                style={{
                    backgroundImage: "url('/RecipesHeader.jpg')",
                }}
                className="h-[350px] w-full bg-cover bg-center"
            >
                <div className="mx-auto flex h-full w-full max-w-[1450px] flex-col justify-center bg-linear-to-r from-black/30 via-black/70 to-black px-2">
                    <h1 className="text-5xl font-bold text-white">
                        Our
                        <span className="relative text-orange-500">
                            Recipes
                            <span className="absolute top-1 right-0 h-1.25 w-4 rotate-90 rounded-2xl bg-orange-500"></span>
                            <span className="absolute top-2 -right-4 h-1.25 w-4 rotate-120 rounded-2xl bg-orange-500"></span>
                            <span className="absolute top-5 -right-7 h-1.25 w-4 rotate-170 rounded-2xl bg-orange-500"></span>
                        </span>
                    </h1>
                    <p className="mt-4 max-w-sm text-gray-300 capitalize">
                        descover evry and delicious recipes for evry occasion
                    </p>
                </div>
            </div>
            {/* main */}
            <div className="mx-auto flex max-w-[1450px] gap-6 py-8">
                {/* sideBar */}
                <aside className="w-70 shrink-0">
                    <div className="rounded-2xl border border-gray-400 bg-gray-500/15">
                        <div className="flex items-center gap-2 p-3">
                            <HiOutlineSquares2X2 className="text-2xl text-orange-500" />
                            <h4 className="text-2xl font-bold">Categories</h4>
                        </div>
                        <ul>
                            <li className="flex h-15 w-full cursor-pointer flex-row items-center justify-between rounded-3xl p-5 transition-all duration-500 hover:translate-x-1 hover:bg-linear-to-r hover:from-orange-500 hover:via-orange-800 hover:to-black/30 hover:text-white">
                                <span>All Foods</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-700 text-gray-200">
                                    <span>2</span>
                                </span>
                            </li>
                            <li className="flex h-15 w-full cursor-pointer flex-row items-center justify-between rounded-3xl p-5 transition-all duration-500 hover:translate-x-1 hover:bg-linear-to-r hover:from-orange-500 hover:via-orange-800 hover:to-black/30 hover:text-white">
                                <span>🍕 Pizza</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-700 text-gray-200">
                                    <span>2</span>
                                </span>
                            </li>
                            <li className="flex h-15 w-full cursor-pointer flex-row items-center justify-between rounded-3xl p-5 transition-all duration-500 hover:translate-x-1 hover:bg-linear-to-r hover:from-orange-500 hover:via-orange-800 hover:to-black/30 hover:text-white">
                                <span>🍔 Burger</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-700 text-gray-200">
                                    <span>2</span>
                                </span>
                            </li>
                            <li className="flex h-15 w-full cursor-pointer flex-row items-center justify-between rounded-3xl p-5 transition-all duration-500 hover:translate-x-1 hover:bg-linear-to-r hover:from-orange-500 hover:via-orange-800 hover:to-black/30 hover:text-white">
                                <span>🥗 Salad</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-700 text-gray-200">
                                    <span>2</span>
                                </span>
                            </li>
                            <li className="flex h-15 w-full cursor-pointer flex-row items-center justify-between rounded-3xl p-5 transition-all duration-500 hover:translate-x-1 hover:bg-linear-to-r hover:from-orange-500 hover:via-orange-800 hover:to-black/30 hover:text-white">
                                <span>🍰 Dessert</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-700 text-gray-200">
                                    <span>2</span>
                                </span>
                            </li>
                            <li className="flex h-15 w-full cursor-pointer flex-row items-center justify-between rounded-3xl p-5 transition-all duration-500 hover:translate-x-1 hover:bg-linear-to-r hover:from-orange-500 hover:via-orange-800 hover:to-black/30 hover:text-white">
                                <span>🥩 Steak</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-700 text-gray-200">
                                    <span>2</span>
                                </span>
                            </li>
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
                        <input type="range" className="my-3 w-full" />
                        <div className="flex flex-row items-center justify-between">
                            <span>10 min</span>
                            <span>120 + min</span>
                        </div>
                    </div>
                </aside>
                <div className="flex-1">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex flex-row items-center gap-x-3">
                            <span className="capitalize">sort by : </span>
                            <select className="w-40 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm transition hover:border-orange-500 focus:border-orange-500">
                                {" "}
                                <option>Ht</option>
                                <option>Ht</option>
                                <option>Ht</option>
                                <option>Ht</option>
                            </select>
                        </div>
                        <div className="flex flex-row items-center gap-x-1.5">
                            <span className="text-zinc-400">Showing</span>
                            <span className="font-semibold text-orange-500">
                                56
                            </span>
                            Recipes
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

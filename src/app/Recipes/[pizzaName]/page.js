import Image from "next/image";
import { FaClock, FaStar, FaUsers, FaShoppingCart } from "react-icons/fa";
import { getRecipeBySlug } from "@/services/apiRecipes";

async function RecipePage({ params }) {
    const { pizzaName } = await params;

    const recipe = await getRecipeBySlug(pizzaName);
    const ingredients = recipe.ingredients
        .split(",")
        .map((item) => item.trim());

    return (
        <main className="mt-20 min-h-screen bg-zinc-950 px-5 py-10 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-3xl">
                        <Image
                            src={recipe.image}
                            alt={recipe.title}
                            width={700}
                            height={700}
                            className="animate-zoom h-full max-h-[600px] w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl font-black md:text-5xl">
                            {recipe.title}
                        </h1>

                        {/* Rating */}
                        <div className="mt-5 flex items-center gap-2">
                            <FaStar className="text-orange-500" />

                            <span className="font-semibold">
                                {recipe.rating}
                            </span>
                        </div>

                        <p className="mt-6 max-w-xl leading-7 text-zinc-400">
                            {recipe.description}
                        </p>

                        <div className="mt-8 grid grid-cols-3 gap-3">
                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                                <FaClock className="text-xl text-orange-500" />

                                <p className="mt-2 text-sm text-zinc-500">
                                    Cook time
                                </p>

                                <p className="mt-1 font-semibold">
                                    {recipe.cook_time} min
                                </p>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                                <FaUsers className="text-xl text-orange-500" />

                                <p className="mt-2 text-sm text-zinc-500">
                                    Servings
                                </p>

                                <p className="mt-1 font-semibold">
                                    {recipe?.servings} people
                                </p>
                            </div>

                            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                                <FaStar className="text-xl text-orange-500" />

                                <p className="mt-2 text-sm text-zinc-500">
                                    Rating
                                </p>

                                <p className="mt-1 font-semibold">
                                    {recipe.rating}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                            <div>
                                <p className="text-sm text-zinc-500">Price</p>

                                <p className="mt-1 text-3xl font-black text-orange-500">
                                    ${recipe.price}
                                </p>
                            </div>

                            <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-orange-600">
                                <FaShoppingCart />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <section className="mt-16">
                    <h2 className="text-2xl font-bold">Ingredients</h2>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {ingredients?.map((ingredient) => (
                            <li
                                key={ingredient}
                                className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-zinc-300"
                            >
                                <span className="mr-2 text-orange-500">•</span>

                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default RecipePage;

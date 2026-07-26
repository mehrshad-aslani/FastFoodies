import { CiHeart } from "react-icons/ci";
import { HiClock, HiStar } from "react-icons/hi";

function RecipeCard() {
    return (
        <div className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/20">
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src="/Food/pizza-1.jpg"
                    alt="Recipe"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Difficulty */}
                <span className="absolute top-4 left-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                    Easy
                </span>

                {/* Favorite */}
                <button className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:text-red-500">
                    <CiHeart className="text-2xl" />
                </button>

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">
                <div>
                    <h3 className="text-2xl font-bold text-white">
                        Pepperoni Pizza
                    </h3>
                    <h5 className="mt-2 text-orange-500 capitalize">Lunch</h5>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-sm">
                        <HiStar className="text-yellow-400" />
                        <span>4.8</span>
                    </div>

                    <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-sm">
                        <HiClock className="text-orange-500" />
                        <span>25 min</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;

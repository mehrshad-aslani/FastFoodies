import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { HiClock, HiStar } from "react-icons/hi";

function RecipeCard(props) {
    const {
        id,
        title,
        description,
        image,
        category_id,
        cook_time,
        ingredients,
        rating,
        slug,
        steps,
    } = props.item;

    return (
        <Link href={`/Recipes/${slug}`}>
            <div className="overflow-hidden rounded-2xl bg-zinc-900 transition duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-64">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                    />

                    {/* Difficulty */}
                    <span className="absolute top-4 left-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                        Easy
                    </span>

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="space-y-4 p-5">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            {title}
                        </h3>

                        <h5 className="mt-2 text-orange-500 capitalize">
                            Lunch
                        </h5>
                    </div>

                    {/* Info */}
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-sm">
                            <HiStar className="text-yellow-400" />

                            <span>{rating}</span>
                        </div>

                        <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-sm">
                            <HiClock className="text-orange-500" />

                            <span>{cook_time} min</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RecipeCard;

import { CiHeart } from "react-icons/ci";
import { HiStar, HiClock } from "react-icons/hi";

export default function PopularBox() {
    return (
        <div className="group grid max-h-[450px] w-[350px] grid-rows-[70%_30%] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src="/Food/Hamberger-2.jpg"
                    alt="Popular Dessert"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                {/* Heart */}
                <div className="absolute top-3 right-3 flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 hover:text-red-500">
                    <CiHeart className="cursor-pointer text-3xl" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-5">
                <div>
                    <h3 className="text-2xl font-bold text-zinc-900">
                        Delicious Dessert
                    </h3>

                    <div className="mt-3 flex items-center gap-5 text-sm text-zinc-500">
                        <div className="flex items-center gap-1">
                            <HiStar className="text-yellow-500" />
                            <span>4.9</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <HiClock className="text-orange-500" />
                            <span>25 min</span>
                        </div>
                    </div>
                </div>

                <button className="mt-2 flex cursor-pointer items-center gap-2 font-semibold text-orange-500 transition-all duration-300 hover:translate-x-3 hover:gap-3 hover:text-orange-600">
                    Read More
                    <span>→</span>
                </button>
            </div>
        </div>
    );
}

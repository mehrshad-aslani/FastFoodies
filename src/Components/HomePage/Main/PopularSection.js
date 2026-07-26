import Link from "next/link";
import PopularBox from "./PopularBox";
import TitleSections from "../TitleSections";

export default function PopularSection() {
    return (
        <div className="mx-auto my-16 w-[90%] rounded-2xl bg-gray-900/40 p-6 sm:p-8 lg:p-10">
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <TitleSections>🔥 Popular of this week</TitleSections>

                <Link
                    href="/Recipes"
                    className="text-base font-semibold text-orange-500 transition-all duration-300 hover:translate-x-3 hover:scale-90 hover:text-orange-600 lg:text-lg"
                >
                    View all recipes →
                </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                <PopularBox />
                <PopularBox />
                <PopularBox />
            </div>
        </div>
    );
}

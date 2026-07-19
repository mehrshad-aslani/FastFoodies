import Link from "next/link";
import PopularBox from "./PopularBox";
import TitleSections from "../TitleSections";

export default function PopularSection() {
    return (
        <div className="mx-auto my-16 w-[90%] rounded-2xl bg-gray-900/40 p-10">
            <div className="mb-12 flex flex-row items-center justify-between">
                <TitleSections>🔥 Popular of this week</TitleSections>
                <Link
                    href="/Recipes"
                    className="text-lg font-semibold text-orange-500 transition-all duration-300 hover:translate-x-3 hover:scale-90 hover:text-orange-600"
                >
                    View all recipes →
                </Link>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                <PopularBox />
                <PopularBox />
                <PopularBox />
            </div>
        </div>
    );
}

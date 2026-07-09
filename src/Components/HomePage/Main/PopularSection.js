import Link from "next/link";
import PopularBox from "./PopularBox";
import TitleSections from "../TitleSections";

function PopularSection() {
	return (
		<div className="my-13 mx-auto p-5 bg-stone-50 rounded-2xl w-fit h-fit ">
			<div className="flex flex-row justify-between items-center">
				<TitleSections>🔥 popular of this week</TitleSections>
				<Link
					href="/Recipes"
					className="inline-block text-lg font-semibold text-orange-500 transition-all duration-300 hover:text-orange-600 hover:translate-x-2"
				>
					View all recipes →
				</Link>
			</div>
			<div className="flex flex-row gap-10 flex-wrap ">
				<PopularBox />
				<PopularBox />
				<PopularBox />
			</div>
		</div>
	);
}

export default PopularSection;

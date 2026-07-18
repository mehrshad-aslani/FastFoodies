import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";
import HeaderNavItems from "./HeaderNavItems";

function HeaderNav() {
	return (
		<div className="absolute top-3 w-full py-5 px-20 flex items-center justify-between ">
			<Link href="/" className="text-3xl w-fit">
				🍔 FastFoodies
			</Link>
			<HeaderNavItems type="vertical" />
			<div className="flex flex-row gap-x-8 items-center">
				<input
					type="text"
					placeholder="Search Meals"
					className="hidden border w-48 border-gray-700 bg-white/10 justify-self-center outline-none rounded-xl pl-3 py-2 placeholder:text-gray-500 transition-all duration-300 ease-in focus:scale-110 focus:shadow-2xl focus:border-orange-500 lg:flex "
				/>
				<div
					role="button"
					className="relative rounded-2xl bg-gray-600/20 flex justify-center items-center p-2 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl"
				>
					<span>😙</span>
					<div className="absolute -top-4 -right-4 px-3 py-1 bg-amber-500 text-white flex items-center justify-center rounded-2xl">
						2
					</div>
				</div>
			</div>
			{/* منوی همبرگری */}
			<HamburgerMenu />
		</div>
	);
}

export default HeaderNav;

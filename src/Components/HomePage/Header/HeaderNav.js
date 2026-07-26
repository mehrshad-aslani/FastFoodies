import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";
import HeaderNavItems from "./HeaderNavItems";

function HeaderNav() {
    return (
        <div className="absolute top-3 z-50 flex w-full items-center justify-between px-5 py-5 sm:px-8 lg:px-20">
            <Link href="/" className="w-fit text-2xl lg:text-3xl">
                🍔 FastFoodies
            </Link>

            <HeaderNavItems type="vertical" />

            <div className="flex flex-row items-center gap-x-4 lg:gap-x-8">
                <input
                    type="text"
                    placeholder="Search Meals"
                    className="hidden w-48 justify-self-center rounded-xl border border-gray-700 bg-white/10 py-2 pl-3 transition-all duration-300 ease-in outline-none placeholder:text-gray-500 focus:scale-110 focus:border-orange-500 focus:shadow-2xl lg:flex"
                />

                <div
                    role="button"
                    className="relative flex cursor-pointer items-center justify-center rounded-2xl bg-gray-600/20 p-2 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                >
                    <span>😙</span>

                    <div className="absolute -top-4 -right-4 flex items-center justify-center rounded-2xl bg-amber-500 px-3 py-1 text-white">
                        2
                    </div>
                </div>
            </div>

            {/* منوی همبرگری */}
            <div className="lg:hidden">
                <HamburgerMenu />
            </div>
        </div>
    );
}

export default HeaderNav;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Recipes",
        link: "/Recipes",
    },
    {
        id: 3,
        title: "About",
        link: "/About",
    },
    {
        id: 4,
        title: "Contact",
        link: "/Contact",
    },
];

function HeaderNavItems({ type, onNavigate }) {
    const pathname = usePathname();

    let ulStyle = "";

    if (type === "vertical") {
        ulStyle =
            "hidden items-center justify-between gap-6 lg:flex lg:flex-row lg:gap-10";
    }

    if (type === "horizontal") {
        ulStyle = "mt-5 flex flex-col gap-y-5";
    }

    return (
        <ul className={ulStyle}>
            {NavItems.map((item) => (
                <li key={item.id}>
                    <Link
                        href={item.link}
                        onClick={onNavigate}
                        className={`group relative block cursor-pointer px-3 py-2 text-base font-semibold capitalize transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-400 lg:text-lg ${
                            pathname === item.link
                                ? "text-orange-400"
                                : "text-white"
                        }`}
                    >
                        {item.title}

                        <span
                            className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${
                                pathname === item.link
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }`}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default HeaderNavItems;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Recipes", link: "/Recipes" },
    { id: 3, title: "About", link: "/About" },
    { id: 4, title: "contact", link: "/Contact" },
];

function HeaderNavItems(props) {
    const pathName = usePathname();
    let UlStyle;

    if (props.type === "vertical") {
        UlStyle =
            "hidden items-center justify-between gap-6 lg:flex lg:flex-row lg:gap-10";
    } else if (props.type === "horizontal") {
        UlStyle = "mt-5 flex flex-col gap-y-5";
    } else {
        let error = new Error("there is not such type");
        console.error(error);
    }

    return (
        <ul className={UlStyle}>
            {NavItems.map((e) => (
                <li key={e.id}>
                    <Link
                        href={e.link}
                        className={`group text-shadow-2xl relative cursor-pointer px-3 py-2 text-base font-semibold capitalize transition-all duration-500 hover:-translate-y-0.5 hover:text-orange-400 lg:text-lg ${pathName === e.link && "text-orange-400"}`}
                    >
                        {e.title}
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full ${pathName === e.link && "w-full"}`}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default HeaderNavItems;

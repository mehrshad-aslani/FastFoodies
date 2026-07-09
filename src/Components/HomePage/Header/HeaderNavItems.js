"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function HeaderNavItems(props) {
	// const params = useSearchParams();
	// console.log(params);

	const NavItems = [
		{ id: 1, title: "Home", link: "/" },
		{ id: 2, title: "Recipes", link: "/Recipes" },
		{ id: 3, title: "About", link: "/About" },
		{ id: 4, title: "contact", link: "/Contact" },
	];
	let UlStyle;

	if (props.type === "vertical") {
		UlStyle =
			"hidden justify-between items-center w-[40%] lg:flex lg:flex-row";
	} else if (props.type === "horizontal") {
		UlStyle = "flex flex-col gap-y-5 mt-5";
	} else {
		let error = new Error("there is not such type");
		console.error(error);
	}
	return (
		<ul className={`${UlStyle} `}>
			{NavItems.map((e) => (
				<Link
					href={e.link}
					className=" cursor-pointer text-xl capitalize font-semibold transition-all duration-500 hover:scale-110 hover:text-yellow-600 text-shadow-2xl px-4 py-4 "
					key={e.id}
				>
					{e.title}
				</Link>
			))}
		</ul>
	);
}

export default HeaderNavItems;

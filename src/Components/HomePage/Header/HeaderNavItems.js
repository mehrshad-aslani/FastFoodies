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
			"hidden justify-between items-center gap-10 lg:flex lg:flex-row";
	} else if (props.type === "horizontal") {
		UlStyle = "flex flex-col gap-y-5 mt-5";
	} else {
		let error = new Error("there is not such type");
		console.error(error);
	}
	return (
		<ul className={`${UlStyle} `}>
			{NavItems.map((e) => (
				<li key={e.id} className="">
					<Link
						href={e.link}
						className=" cursor-pointer text-lg capitalize font-semibold transition-all duration-500 hover:-translate-y-0.5 hover:text-orange-400 text-shadow-2xl px-3 py-2 relative group "
					>
						{e.title}
						<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
					</Link>
				</li>
			))}
		</ul>
	);
}

export default HeaderNavItems;

import Link from "next/link";

function Footer() {
	return (
		<footer className="flex flex-row mx-auto p-12 items-center bg-stone-950 text-gray-300">
			<div className="flex flex-row gap-x-3">
				<p>Icon</p>
				<div className="flex flex-col">
					<h3>Nextlevel Food</h3>
					<p>des</p>
				</div>
			</div>
			<div className="flex flex-col gap-y-1 text-xl">
				<h3>Quick Links</h3>
				<ul>
					<li className="transition-all duration-500 hover:scale-110 hover:text-orange-600 text-lg font-extralight">
						<Link href="/">Home</Link>
					</li>
					<li className="transition-all duration-500 hover:scale-110 hover:text-orange-600 text-lg font-extralight">
						<Link href="/About">About</Link>
					</li>
					<li className="transition-all duration-500 hover:scale-110 hover:text-orange-600 text-lg font-extralight">
						<Link href="/Recipes">Recipes</Link>
					</li>
					<li className="transition-all duration-500 hover:scale-110 hover:text-orange-600 text-lg font-extralight">
						<Link href="/Contact">Contact</Link>
					</li>
				</ul>
			</div>
			<div>
				<h4>Follow Us</h4>
				<ul className="flex flex-row gap-x-2">
					<li>Icon</li>
					<li>Icon</li>
					<li>Icon</li>
					<li>Icon</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;

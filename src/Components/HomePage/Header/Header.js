import Button from "@/UI/Button";
import HeaderNav from "./HeaderNav";

function Header() {
	return (
		<div className="relative">
			<img
				src="/Header.jpg"
				className=" w-full h-screen object-cover lg:max-h-screen"
			/>
			{/* رنگ سایه روی عکس */}
			<div className="absolute inset-0 bg-black/60"></div>
			{/*متن های روی عکس */}
			<div className="absolute inset-0 flex flex-col justify-center items-center px-10 text-white">
				<h2 className="capitalize text-3xl font-black text-center lg:text-8xl/25 text-shadow-gray-900">
					nextLevel Food for nextLevel{" "}
					<span className="bg-linear-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent text-shadow-yellow-500 g">
						Foodies
					</span>
				</h2>
				<p className="capitalize text-base text-center w-sm mt-4 lg:w-3xl lg-mt-8 lg:text-lg/7 mb-5">
					discover and share recipes , celn we second way dinomn
					lsdjbhjre role ande replay aeveloped recipirs
				</p>
				<Button>Explore Recipes</Button>
			</div>
			<HeaderNav />
		</div>
	);
}

export default Header;

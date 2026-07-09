function PopularBox() {
	return (
		<div className=" rounded-2xl shadow-md hover:shadow-xl hover:shadow-orange-200 bg-white border border-stone-200 w-[380px]  max-h-[400px] grid grid-rows-[70%_30%] transition-all duration-500 hover:scale-110 cursor-pointer group">
			<div className="relative">
				<img
					src="/Food/dessert-1.jpg"
					alt="Hamburger"
					className="w-full h-full rounded-2xl object-cover"
				/>
				<div className="hidden absolute inset-0 transition-all duration-500 rounded-2xl group-hover:bg-black/50 group-hover:block p-5 text-right">
					Heart
				</div>
			</div>

			<div className="p-3">
				<h3 className="text-2xl font-bold">Pizza Title</h3>

				<button className="mt-5 font-semibold text-orange-500 hover:text-orange-600 transition-colors cursor-pointer">
					Read More →
				</button>
			</div>
		</div>
	);
}

export default PopularBox;

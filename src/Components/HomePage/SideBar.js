import HeaderNavItems from "./Header/HeaderNavItems";

function SideBar() {
	return (
		<div className="w-52 h-screen z-50 bg-stone-900 absolute left-0 py-10 px-5">
			<h3 className="text-center text-xl mt-5 capitalize cursor-pointer">
				Logo
			</h3>

			<HeaderNavItems type="horizontal" />
		</div>
	);
}

export default SideBar;

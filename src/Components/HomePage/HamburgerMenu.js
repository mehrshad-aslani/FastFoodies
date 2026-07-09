"use client";
import { useState } from "react";

function HamburgerMenu() {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div
			className="w-10 h-7 relative cursor-pointer lg:hidden"
			onClick={() => setIsClicked((prev) => !prev)}
		>
			<span
				className={`absolute left-0 w-full h-1 bg-orange-500 rounded transition-all duration-500
      							${isClicked ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
			/>

			<span
				className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-orange-500 rounded transition-all duration-500
						      ${isClicked ? "opacity-0" : "opacity-100"}`}
			/>

			<span
				className={`absolute left-0 w-full h-1 bg-orange-500 rounded transition-all duration-500
						      ${isClicked ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
			/>
		</div>
	);
}

export default HamburgerMenu;

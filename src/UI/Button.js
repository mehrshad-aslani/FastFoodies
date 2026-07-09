function Button({ children, className }) {
	return (
		<div
			role="button"
			className={`relative overflow-hidden bg-orange-500 px-6 py-4 text-white rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 group max-w-fit ${className} `}
		>
			<span className="capitalize text-xl z-20 relative">{children}</span>
			<span className="absolute inset-0 bg-orange-600 rounded-2xl transition-transform duration-500 -z-10 -translate-x-full group-hover:translate-x-0 "></span>
		</div>
	);
}

export default Button;

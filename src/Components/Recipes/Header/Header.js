function Header() {
    return (
        <section
            style={{
                backgroundImage: "url('/RecipesHeader.jpg')",
            }}
            className="h-[350px] w-full bg-cover bg-center"
        >
            <div className="mx-auto flex h-full w-full max-w-[1450px] flex-col justify-center bg-linear-to-r from-black/30 via-black/70 to-black px-2">
                <h1 className="text-5xl font-bold text-white">
                    Our
                    <span className="relative text-orange-500">
                        Recipes
                        <span className="absolute top-1 right-0 h-1.25 w-4 rotate-90 rounded-2xl bg-orange-500"></span>
                        <span className="absolute top-2 -right-4 h-1.25 w-4 rotate-120 rounded-2xl bg-orange-500"></span>
                        <span className="absolute top-5 -right-7 h-1.25 w-4 rotate-170 rounded-2xl bg-orange-500"></span>
                    </span>
                </h1>
                <p className="mt-4 max-w-sm text-gray-300 capitalize">
                    descover evry and delicious recipes for evry occasion
                </p>
            </div>
        </section>
    );
}

export default Header;

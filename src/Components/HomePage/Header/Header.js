import Button from "@/UI/Button";
import HeaderInfo from "./HeaderInfo";

function Header() {
    return (
        <section className="relative pb-52 sm:pb-40 lg:pb-20">
            {/* Background Image */}
            <img
                src="/Header.jpg"
                alt="Header"
                className="h-[650px] w-full object-cover sm:h-[700px] lg:h-screen"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 pt-16 text-white sm:px-8 lg:px-6">
                <h2 className="max-w-5xl text-center text-4xl leading-tight font-black sm:text-5xl lg:text-7xl">
                    Discover Amazing Recipes Every Day{" "}
                    <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                        Foodies
                    </span>
                </h2>

                <p className="mt-5 max-w-xl text-center text-sm leading-7 text-gray-200 sm:text-base lg:mt-8 lg:max-w-3xl lg:text-lg">
                    Discover, cook and share your favorite recipes.
                </p>

                <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center lg:mt-10 lg:gap-4">
                    <Button
                        link="/Recipes"
                        className="w-full bg-orange-500 text-white shadow-lg transition hover:bg-orange-600 hover:shadow-orange-500/30 sm:w-auto"
                    >
                        Explore Recipes
                    </Button>

                    <Button
                        link="/Recipes"
                        className="w-full border border-orange-500 bg-transparent text-orange-500 transition hover:bg-orange-500 hover:text-white sm:w-auto"
                    >
                        View Recipes
                    </Button>
                </div>
            </div>

            <HeaderInfo />
        </section>
    );
}

export default Header;

import Button from "@/UI/Button";
import HeaderNav from "./HeaderNav";
import HeaderInfo from "./HeaderInfo";

function Header() {
    return (
        <div className="relative pb-36 lg:pb-20">
            <img
                src="/Header.jpg"
                alt="Header"
                className="h-[90vh] min-h-[650px] w-full object-cover lg:h-screen"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-white">
                <h2 className="max-w-5xl text-center text-4xl leading-tight font-black sm:text-5xl lg:text-7xl">
                    Discover Amazing Recipes Every Day{" "}
                    <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                        Foodies
                    </span>
                </h2>

                <p className="mt-6 max-w-xl text-center text-sm text-gray-200 sm:text-base lg:mt-8 lg:max-w-3xl lg:text-lg">
                    Discover, cook and share your favorite recipes.
                </p>

                <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button className="w-full bg-orange-500 text-white shadow-lg transition hover:bg-orange-600 hover:shadow-orange-500/30 sm:w-auto">
                        Explore Recipes
                    </Button>

                    <Button className="w-full border border-orange-500 bg-transparent text-orange-500 transition hover:bg-orange-500 hover:text-white sm:w-auto">
                        View Recipes
                    </Button>
                </div>
            </div>

            <HeaderInfo />
        </div>
    );
}

export default Header;

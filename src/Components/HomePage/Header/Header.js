import Button from "@/UI/Button";
import HeaderNav from "./HeaderNav";

function Header() {
    return (
        <div className="relative">
            <img
                src="/Header.jpg"
                className="h-screen w-full object-cover lg:max-h-screen"
            />
            {/* رنگ سایه روی عکس */}
            <div className="absolute inset-0 bg-black/75"></div>
            {/*متن های روی عکس */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-white">
                <h2 className="text-center text-3xl font-black capitalize text-shadow-gray-900 lg:w-3xl lg:text-7xl/20">
                    Discover Amazing Recipes Every Day{" "}
                    <span className="g bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent text-shadow-yellow-500">
                        Foodies
                    </span>
                </h2>
                <p className="lg-mt-8 mt-4 mb-5 w-sm text-center text-base capitalize lg:w-3xl lg:text-lg/7">
                    Discover, cook and share your favorite recipes.
                </p>
                <div className="flex flex-row gap-8">
                    <Button className="shadow-lg hover:bg-orange-500 hover:text-white hover:shadow-orange-500/30">
                        Explore Recipes
                    </Button>
                    <Button className="border border-orange-500 bg-transparent text-orange-500 shadow-none hover:bg-orange-500 hover:text-white">
                        view Recipes
                    </Button>
                </div>
            </div>
            <HeaderNav />
        </div>
    );
}

export default Header;

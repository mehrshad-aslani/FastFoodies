import Header from "@/Components/Recipes/Header/Header";
import ShowingRecipes from "@/Components/Recipes/main/ShowingRecipes";
import SideBarRecipes from "@/Components/Recipes/main/SideBarRecipes";

function page() {
    return (
        <div>
            <Header />
            <div className="mx-auto flex max-w-[1450px] gap-6 py-8">
                <SideBarRecipes />
                <ShowingRecipes />
            </div>
        </div>
    );
}

export default page;

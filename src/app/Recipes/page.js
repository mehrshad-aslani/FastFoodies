import Header from "@/Components/Recipes/Header/Header";
import ShowingRecipes from "@/Components/Recipes/main/ShowingRecipes";
import SideBarRecipes from "@/Components/Recipes/main/SideBarRecipes";
import Spinner from "@/UI/Spinner";
import { Suspense } from "react";

function page() {
    return (
        <div>
            <Header />
            <div className="mx-auto flex max-w-[1450px] flex-row-reverse gap-6 py-8">
                <Suspense fallback={<Spinner />}>
                    <ShowingRecipes />
                    <SideBarRecipes />
                </Suspense>
            </div>
        </div>
    );
}

export default page;

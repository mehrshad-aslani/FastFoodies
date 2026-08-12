import Header from "@/Components/Recipes/Header/Header";
import ShowingRecipes from "@/Components/Recipes/main/ShowingRecipes";
import SideBarRecipes from "@/Components/Recipes/main/SideBarRecipes";
import Spinner from "@/UI/Spinner";
import { Suspense } from "react";

function Page() {
    return (
        <div>
            <Header />

            <div className="mx-auto flex max-w-[1450px] flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
                <Suspense fallback={<Spinner />}>
                    <SideBarRecipes />
                    <ShowingRecipes />
                </Suspense>
            </div>
        </div>
    );
}

export default Page;

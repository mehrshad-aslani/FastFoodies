import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "@/services/apiRecipes";

export function useRecipes() {
    return useQuery({
        queryKey: ["Recipes"],
        queryFn: getRecipes,
    });
}

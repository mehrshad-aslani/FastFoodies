import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/apiCategories";

export function useCategories() {
    return useQuery({
        queryKey: ["Categories"],
        queryFn: getCategories,
    });
}

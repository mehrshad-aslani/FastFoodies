import { supabase } from "@/lib/supabase";

export async function getRecipes() {
    const { data, error } = await supabase.from("Recipes").select("*");

    if (error) throw new Error(error.message);

    return data;
}

export async function getRecipeBySlug(slug) {
    const { data, error } = await supabase
        .from("Recipes")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) throw new Error(error.message);

    return data;
}

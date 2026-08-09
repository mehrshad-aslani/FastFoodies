import { supabase } from "@/lib/supabase";

export async function getCategories() {
    const { data, error } = await supabase.from("Categories").select("*");

    if (error) throw new Error(error.message);

    return data;
}

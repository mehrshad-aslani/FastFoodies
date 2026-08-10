"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="hover:bg mb-8 flex cursor-pointer items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"
        >
            <FaArrowLeft />
            Back to Recipes
        </button>
    );
}

export default BackButton;

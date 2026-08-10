"use client";

import { useState } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { useCart } from "@/context/CartContext";

function AddToCartButton({ recipe }) {
    const { addToCart, cartItems } = useCart();

    const [status, setStatus] = useState("idle");

    const existingItem = cartItems.find((item) => item.id === recipe.id);

    function handleAddToCart() {
        setStatus("loading");

        addToCart(recipe);

        setStatus("success");
    }

    return (
        <button
            onClick={handleAddToCart}
            disabled={status === "loading"}
            className="flex cursor-pointer items-center gap-2 justify-self-end rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-orange-600 disabled:cursor-default disabled:opacity-80"
        >
            {status === "loading" && (
                <>
                    <HiOutlineRefresh className="animate-spin text-lg" />
                    Adding...
                </>
            )}

            {status === "success" && (
                <>
                    <FaCheck />
                    Added ×{existingItem?.quantity}
                </>
            )}

            {status === "idle" && (
                <>
                    <FaShoppingCart />
                    Add to Cart
                </>
            )}
        </button>
    );
}

export default AddToCartButton;

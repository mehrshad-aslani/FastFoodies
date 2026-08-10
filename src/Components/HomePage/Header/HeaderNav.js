"use client";

import { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";
import HeaderNavItems from "./HeaderNavItems";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "@/context/CartContext";

function HeaderNav() {
    const [search, setSearch] = useState("");
    const { cartItems } = useCart();

    return (
        <div className="absolute top-3 z-50 flex w-full items-center justify-between px-5 py-5 sm:px-8 lg:px-20">
            <Link href="/" className="w-fit text-2xl lg:text-3xl">
                🍔 FastFoodies
            </Link>

            <HeaderNavItems type="vertical" />

            <div className="flex flex-row items-center gap-x-4 lg:gap-x-8">
                <form action="/Recipes">
                    <input
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Meals"
                        className="hidden w-48 rounded-xl border border-gray-700 bg-white/10 py-2 pl-3 transition-all duration-300 outline-none placeholder:text-gray-500 focus:scale-110 focus:border-orange-500 lg:flex"
                    />
                </form>

                <Link
                    href="/Cart"
                    className="relative flex cursor-pointer items-center justify-center rounded-2xl bg-gray-600/20 p-3"
                >
                    <HiShoppingCart className="text-2xl text-orange-500" />
                    <div className="absolute -top-4 -right-4 rounded-2xl bg-amber-500 px-3 py-1 text-white">
                        {cartItems.length}
                    </div>
                </Link>
            </div>

            <div className="lg:hidden">
                <HamburgerMenu />
            </div>
        </div>
    );
}

export default HeaderNav;

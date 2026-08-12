"use client";

import { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";
import HeaderNavItems from "./HeaderNavItems";
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "@/context/CartContext";

function HeaderNav() {
    const [search, setSearch] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const { cartItems } = useCart();

    return (
        <div className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-5 py-5 sm:px-8 lg:px-20">
            {/* Logo */}
            <Link
                href="/"
                className="text-xl font-medium sm:text-2xl lg:text-3xl"
            >
                🍔 FastFoodies
            </Link>

            {/* Desktop Navigation */}
            <HeaderNavItems type="vertical" />

            {/* Right side */}
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
                {/* Search */}
                <form action="/Recipes">
                    <input
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Meals"
                        className="hidden w-48 rounded-xl border border-gray-700 bg-white/10 py-2 pl-3 outline-none placeholder:text-gray-500 focus:border-orange-500 lg:flex"
                    />
                </form>

                {/* Cart */}
                <Link
                    href="/Cart"
                    className="relative flex items-center justify-center rounded-xl bg-gray-600/20 p-2.5 sm:p-3"
                >
                    <HiShoppingCart className="text-xl text-orange-500 sm:text-2xl" />

                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1.5 text-xs font-semibold text-white sm:h-6 sm:min-w-6">
                            {cartItems.length}
                        </span>
                    )}
                </Link>

                {/* Hamburger */}
                <div className="lg:hidden">
                    <HamburgerMenu
                        isClicked={isSidebarOpen}
                        onClick={() => setIsSidebarOpen((prev) => !prev)}
                    />
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-zinc-900 p-8 shadow-2xl transition-transform duration-500 lg:hidden ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="mb-10 flex items-center justify-between">
                    <span className="text-xl font-bold">🍔 FastFoodies</span>

                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="cursor-pointer text-2xl text-gray-400 hover:text-orange-500"
                    >
                        ×
                    </button>
                </div>

                <HeaderNavItems type="horizontal" />
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 -z-10 bg-black/50 backdrop-blur-sm lg:hidden"
                />
            )}
        </div>
    );
}

export default HeaderNav;

"use client";

import HeaderNavItems from "./Header/HeaderNavItems";

function SideBar({ isOpen, onClose }) {
    return (
        <>
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
                    isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 right-0 z-50 h-screen w-72 bg-zinc-900 px-6 py-8 shadow-2xl transition-transform duration-300 lg:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Logo */}
                <div className="mb-10 flex items-center justify-between">
                    <h3 className="text-xl font-bold">🍔 FastFoodies</h3>

                    <button
                        type="button"
                        onClick={onClose}
                        className="text-3xl text-zinc-400 transition hover:text-orange-500"
                    >
                        ×
                    </button>
                </div>

                <HeaderNavItems type="horizontal" onNavigate={onClose} />
            </aside>
        </>
    );
}

export default SideBar;

"use client";

function HamburgerMenu({ isOpen, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Toggle menu"
            className="relative h-7 w-10 cursor-pointer lg:hidden"
        >
            <span
                className={`absolute left-0 h-1 w-full rounded bg-orange-500 transition-all duration-500 ${
                    isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
            />

            <span
                className={`absolute top-1/2 left-0 h-1 w-full -translate-y-1/2 rounded bg-orange-500 transition-all duration-500 ${
                    isOpen ? "opacity-0" : "opacity-100"
                }`}
            />

            <span
                className={`absolute left-0 h-1 w-full rounded bg-orange-500 transition-all duration-500 ${
                    isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
            />
        </button>
    );
}

export default HamburgerMenu;

import Link from "next/link";

function Button({ children, className = "", link }) {
    const style =
        "group relative max-w-fit cursor-pointer overflow-hidden rounded-2xl px-4 py-3 transition-all duration-300 hover:scale-105 sm:px-6 sm:py-4";

    const content = (
        <>
            <span className="relative z-20 text-base capitalize sm:text-xl">
                {children}
            </span>

            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-orange-600 transition-transform duration-300 group-hover:scale-x-100"></span>
        </>
    );

    if (link) {
        return (
            <Link href={link} className={`${style} ${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <div role="button" className={`${style} ${className}`}>
            {content}
        </div>
    );
}

export default Button;

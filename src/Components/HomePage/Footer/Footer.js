import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const footerSections = [
    {
        id: 1,
        title: "Explore",
        links: [
            {
                id: 1,
                title: "Recipes",
                href: "/Recipes",
            },
            {
                id: 2,
                title: "Popular",
                href: "/Recipes",
            },
            {
                id: 3,
                title: "Categories",
                href: "/Categories",
            },
        ],
    },

    {
        id: 2,
        title: "Company",
        links: [
            {
                id: 1,
                title: "Home",
                href: "/",
            },
            {
                id: 2,
                title: "About Us",
                href: "/About",
            },
            {
                id: 3,
                title: "Contact",
                href: "/Contact",
            },
        ],
    },
];

const socials = [
    {
        id: 1,
        icon: FaGithub,
        href: "https://github.com/mehrshad-aslani",
    },
    {
        id: 2,
        icon: FaInstagram,
        href: "https://instagram.com/",
    },
    {
        id: 3,
        icon: FaLinkedin,
        href: "www.linkedin.com/in/mehrshadaslani",
    },
    {
        id: 4,
        icon: FaTelegram,
        href: "https://t.me/",
    },
];

function Footer() {
    return (
        <footer className="mt-24 border-t border-zinc-800 bg-zinc-950">
            <div className="mx-auto grid w-[90%] grid-cols-1 gap-10 py-16 sm:w-[85%] md:grid-cols-2 lg:w-[80%] lg:grid-cols-3 lg:gap-20">
                {/* Logo */}
                <div>
                    <h2 className="text-3xl font-black">
                        Fast
                        <span className="text-orange-500">Foodies</span>
                    </h2>

                    <p className="mt-5 leading-7 text-zinc-400">
                        Discover delicious recipes, cook with confidence and
                        share unforgettable meals with everyone.
                    </p>
                </div>

                {/* Links */}
                {footerSections.map((section) => (
                    <div key={section.id}>
                        <h3 className="mb-5 text-xl font-bold">
                            {section.title}
                        </h3>

                        <ul className="space-y-3">
                            {section.links.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-orange-500"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/* Bottom */}
            <div className="border-t border-zinc-800">
                <div className="mx-auto flex w-[90%] flex-col items-center justify-between gap-6 py-8 sm:w-[85%] md:flex-row lg:w-[80%]">
                    <p className="text-center text-sm text-zinc-500 md:text-left">
                        © 2025 FastFoodies. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {socials.map((social) => {
                            const Icon = social.icon;

                            return (
                                <Link
                                    key={social.id}
                                    href={social.href}
                                    target="_blank"
                                    className="rounded-full border border-zinc-700 p-3 text-lg text-zinc-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                >
                                    <Icon />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

function Header() {
    return (
        <section
            style={{
                backgroundImage: "url('/ContactUs.jpg')",
            }}
            className="relative h-screen bg-cover bg-[65%_center] sm:bg-center lg:bg-center"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />

            <div className="relative mx-auto flex h-full max-w-[1450px] items-center px-6">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-extrabold sm:text-6xl lg:text-7xl">
                        Contact
                        <span className="text-orange-500"> Us</span>
                    </h1>

                    <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg lg:text-xl">
                        Have questions about recipes, collaborations or just
                        want to say hello?
                    </p>

                    <a
                        href="#contact"
                        className="mt-10 inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Header;

import {
    HiOutlineLocationMarker,
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineClock,
} from "react-icons/hi";

function Header() {
    return (
        <>
            {/* Hero */}
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

            {/* Contact */}
            <section
                id="contact"
                className="mx-auto max-w-[1450px] px-5 py-16 lg:py-24"
            >
                {/* Title */}

                <div className="text-center">
                    <span className="tracking-[6px] text-orange-500 uppercase">
                        Contact
                    </span>

                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                        Get Closer To
                        <span className="text-orange-500"> Us</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm text-gray-400 sm:text-base">
                        We'd love to hear from you. Whether you have a question,
                        feedback or partnership opportunity, our team is always
                        ready to help.
                    </p>
                </div>

                {/* Grid */}

                <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* Left */}

                    <div className="space-y-6">
                        <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
                            <div className="flex items-start gap-4">
                                <HiOutlineLocationMarker className="text-3xl text-orange-500 sm:text-4xl" />

                                <div>
                                    <h4 className="text-xl font-semibold">
                                        Address
                                    </h4>

                                    <p className="mt-2 text-gray-400">
                                        2972 Westheimer Rd.
                                        <br />
                                        Santa Ana, Illinois
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
                            <div className="flex items-start gap-4">
                                <HiOutlinePhone className="text-3xl text-orange-500 sm:text-4xl" />

                                <div>
                                    <h4 className="text-xl font-semibold">
                                        Phone
                                    </h4>

                                    <p className="mt-2 text-gray-400">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
                            <div className="flex items-start gap-4">
                                <HiOutlineMail className="text-3xl text-orange-500 sm:text-4xl" />

                                <div>
                                    <h4 className="text-xl font-semibold">
                                        Email
                                    </h4>

                                    <p className="mt-2 text-gray-400">
                                        hello@nextlevelfood.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
                            <div className="flex items-start gap-4">
                                <HiOutlineClock className="text-3xl text-orange-500 sm:text-4xl" />

                                <div>
                                    <h4 className="text-xl font-semibold">
                                        Working Hours
                                    </h4>

                                    <p className="mt-2 text-gray-400">
                                        Monday - Sunday
                                        <br />
                                        09:00 AM - 11:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}

                    <form className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 backdrop-blur-md sm:p-8">
                        <h3 className="mb-8 text-2xl font-bold sm:text-3xl">
                            Send Message
                        </h3>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="rounded-xl border border-zinc-700 bg-zinc-800 p-4 transition-all duration-500 outline-none focus:border-orange-500"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="rounded-xl border border-zinc-700 bg-zinc-800 p-4 transition-all duration-500 outline-none focus:border-orange-500"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="mt-5 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4 transition-all duration-500 outline-none focus:border-orange-500"
                        />

                        <textarea
                            rows={7}
                            placeholder="Your Message..."
                            className="mt-5 w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 p-4 transition-all duration-500 outline-none focus:border-orange-500"
                        />

                        <button
                            type="submit"
                            className="duration-500-all mt-6 w-full cursor-pointer rounded-xl bg-orange-500 py-4 font-semibold transition-all duration-300 hover:bg-orange-600 sm:w-auto sm:px-8"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Map */}

                <div className="mt-16 overflow-hidden rounded-3xl border border-zinc-700 lg:mt-24">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps?q=New%20York&output=embed"
                        loading="lazy"
                        className="h-[280px] w-full sm:h-[350px] lg:h-[450px]"
                    ></iframe>
                </div>
            </section>
        </>
    );
}

export default Header;

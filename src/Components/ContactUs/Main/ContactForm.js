function ContactForm() {
    return (
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
    );
}

export default ContactForm;

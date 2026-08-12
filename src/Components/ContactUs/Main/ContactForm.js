"use client";

import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState("idle");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            return;
        }

        setStatus("loading");

        setTimeout(() => {
            setStatus("success");
        }, 1000);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 backdrop-blur-md sm:p-8"
        >
            <h3 className="mb-8 text-2xl font-bold sm:text-3xl">
                Send Message
            </h3>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="rounded-xl border border-zinc-700 bg-zinc-800 p-4 transition-all duration-300 outline-none focus:border-orange-500"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl border border-zinc-700 bg-zinc-800 p-4 transition-all duration-300 outline-none focus:border-orange-500"
                />
            </div>

            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="mt-5 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4 transition-all duration-300 outline-none focus:border-orange-500"
            />

            <textarea
                rows={7}
                placeholder="Your Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-5 w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 p-4 transition-all duration-300 outline-none focus:border-orange-500"
            />

            <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 w-full cursor-pointer rounded-xl bg-orange-500 py-4 font-semibold transition-all duration-300 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
            >
                {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
                <p className="mt-4 text-sm font-medium text-green-500">
                    Message sent successfully! ✓
                </p>
            )}
        </form>
    );
}

export default ContactForm;

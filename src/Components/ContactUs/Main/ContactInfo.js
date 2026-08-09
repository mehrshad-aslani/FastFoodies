import {
    HiOutlineLocationMarker,
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineClock,
} from "react-icons/hi";

function ContactInfo() {
    return (
        <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
                <div className="flex items-start gap-4">
                    <HiOutlineLocationMarker className="text-3xl text-orange-500 sm:text-4xl" />

                    <div>
                        <h4 className="text-xl font-semibold">Address</h4>

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
                        <h4 className="text-xl font-semibold">Phone</h4>

                        <p className="mt-2 text-gray-400">+1 (555) 123-4567</p>
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-zinc-700 bg-zinc-900/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
                <div className="flex items-start gap-4">
                    <HiOutlineMail className="text-3xl text-orange-500 sm:text-4xl" />

                    <div>
                        <h4 className="text-xl font-semibold">Email</h4>

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
                        <h4 className="text-xl font-semibold">Working Hours</h4>

                        <p className="mt-2 text-gray-400">
                            Monday - Sunday
                            <br />
                            09:00 AM - 11:00 PM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;

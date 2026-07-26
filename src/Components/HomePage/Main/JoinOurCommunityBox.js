import Button from "@/UI/Button";
import { HiUserGroup } from "react-icons/hi";

function JoinOurCommunityBox() {
    return (
        <div className="relative mx-auto w-[90%] sm:w-[85%] lg:w-[80%]">
            {/* Orange Glow */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-orange-500/8 blur-3xl"></div>

            <div className="flex flex-col items-center gap-8 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-zinc-900 via-[#1b1512] to-zinc-900 px-6 py-8 shadow-[0_0_25px_rgba(249,115,22,.10)] transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,.18)] lg:flex-row lg:justify-between lg:px-10 lg:py-4">
                {/* Left */}
                <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:gap-8 lg:text-left">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
                        <HiUserGroup className="text-4xl text-orange-400" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white lg:text-3xl">
                            Join Our Community
                        </h2>

                        <p className="mt-2 text-zinc-400">
                            Discover exclusive recipes, weekly cooking tips and
                            become part of our foodie family.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <Button className="bg-orange-500 px-8 text-white shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30">
                    Join Now →
                </Button>
            </div>
        </div>
    );
}

export default JoinOurCommunityBox;

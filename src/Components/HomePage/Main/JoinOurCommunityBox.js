import Button from "@/UI/Button";
import { HiUserGroup } from "react-icons/hi";

function JoinOurCommunityBox() {
    return (
        <div className="relative mx-auto w-[80%]">
            {/* Orange Glow */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-orange-500/8 blur-3xl"></div>

            <div className="flex items-center justify-between rounded-3xl border border-orange-500/20 bg-gradient-to-r from-zinc-900 via-[#1b1512] to-zinc-900 px-10 py-4 shadow-[0_0_25px_rgba(249,115,22,.10)] transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,.18)]">
                {/* Left */}
                <div className="flex items-center gap-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
                        <HiUserGroup className="text-4xl text-orange-400" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-white">
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

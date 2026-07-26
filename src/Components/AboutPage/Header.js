import Button from "@/UI/Button";
import AboutTitleDesign from "./AboutTitleDesign";
import Timeline from "./Timeline";

function Header() {
    return (
        <>
            {/* Hero */}
            <section
                style={{
                    backgroundImage: "url('/AboutPageHeader.jpg')",
                }}
                className="h-[85vh] w-full bg-cover bg-center"
            >
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-r from-black/80 via-black/50 to-black/70 px-4 pt-20">
                    <AboutTitleDesign>our story</AboutTitleDesign>

                    <h2 className="my-3 text-center text-4xl font-bold tracking-wide text-white sm:text-5xl lg:text-6xl">
                        About us
                    </h2>
                </div>
            </section>

            {/* Who We Are */}
            <section className="mx-auto w-[90%] py-20 sm:w-[85%] lg:w-[80%] lg:py-28">
                <AboutTitleDesign>Who we are</AboutTitleDesign>

                <div className="mt-12 flex flex-col-reverse items-center gap-10 lg:mt-20 lg:flex-row-reverse lg:gap-20">
                    <img
                        src="/AboutOurStory.jpg"
                        alt="About FastFoodies"
                        className="w-full rounded-3xl border border-orange-500/20 object-cover shadow-[0_0_60px_rgba(249,115,22,.12)] lg:h-[680px] lg:w-[48%] lg:max-w-[580px]"
                    />

                    <div className="flex max-w-2xl flex-col space-y-6">
                        <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                            Made with
                            <span className="pl-5 text-orange-500">
                                Passion
                            </span>
                        </h2>

                        <p className="text-base leading-8 text-zinc-300 lg:text-lg">
                            FastFoodies started with a simple idea: great food
                            should be easy to discover, enjoyable to cook, and
                            worth sharing. We created this platform to bring
                            together recipes that are practical, delicious, and
                            accessible to everyone.
                        </p>

                        <p className="text-base leading-8 text-zinc-400 lg:text-lg">
                            From quick weekday meals to special dishes for
                            memorable moments, every recipe is selected with
                            care. Our goal is not only to help people cook
                            better food, but also to make cooking feel less
                            complicated and more inspiring.
                        </p>

                        <p className="text-base leading-8 text-zinc-400 lg:text-lg">
                            Today, FastFoodies is growing into a community of
                            food lovers who believe that every recipe has a
                            story, and every meal is an opportunity to create a
                            new one.
                        </p>

                        <Button className="w-fit border border-orange-500 px-8 text-white shadow-lg hover:bg-orange-600 hover:shadow-orange-500/30">
                            Explore Recipes
                        </Button>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="pb-28">
                <AboutTitleDesign>our journey</AboutTitleDesign>

                <div className="mt-20">
                    <Timeline />
                </div>
            </section>
        </>
    );
}

export default Header;

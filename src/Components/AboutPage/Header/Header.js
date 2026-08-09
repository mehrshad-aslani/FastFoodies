import AboutTitleDesign from "../../../UI/AboutTitleDesign";
import Timeline from "../Main/Timeline";

function Header() {
    return (
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
    );
}

export default Header;

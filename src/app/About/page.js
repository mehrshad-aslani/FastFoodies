import Header from "@/Components/AboutPage/Header/Header";
import JustBeginningCard from "@/Components/AboutPage/Main/JustBeginningCard";
import Timeline from "@/Components/AboutPage/Main/Timeline";
import WhoWeAre from "@/Components/AboutPage/Main/WhoWeAre";
import AboutTitleDesign from "@/UI/AboutTitleDesign";

function page() {
    return (
        <div>
            <Header />
            <WhoWeAre />
            <section>
                <AboutTitleDesign>our journey</AboutTitleDesign>
                <Timeline />
            </section>
            <JustBeginningCard />
        </div>
    );
}

export default page;

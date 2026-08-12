import Header from "@/Components/HomePage/Header/Header";
import MostRatedSection from "@/Components/HomePage/Main/MostRatedSection";
import ChooseSection from "@/Components/HomePage/Main/ChooseSection";
import JoinOurCommunityBox from "@/Components/HomePage/Main/JoinOurCommunityBox";

export default function Home() {
    return (
        <div className="min-h-screen w-full overflow-hidden bg-zinc-950 text-white">
            <Header />
            <MostRatedSection />
            <JoinOurCommunityBox />
            <ChooseSection />
        </div>
    );
}

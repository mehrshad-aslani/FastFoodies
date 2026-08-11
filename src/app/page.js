import Header from "@/Components/HomePage/Header/Header";
import SideBar from "@/Components/HomePage/SideBar";
import MostRatedSection from "@/Components/HomePage/Main/MostRatedSection";
import ChooseSection from "@/Components/HomePage/Main/ChooseSection";
import JoinOurCommunityBox from "@/Components/HomePage/Main/JoinOurCommunityBox";
import Footer from "@/Components/HomePage/Footer/Footer";

export default function Home() {
    return (
        <div className="min-h-screen w-full overflow-hidden bg-zinc-950 text-white">
            {/* یک دیو جدید با پوزیشن ابسلوت بهش اضافه شد تا بتوان این دو المان زیر را با هم هماهنگ کرد */}
            <Header />
            {/* <SideBar /> */}
            <MostRatedSection />
            <JoinOurCommunityBox />
            <ChooseSection />
        </div>
    );
}

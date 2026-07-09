import Header from "@/Components/HomePage/Header/Header";
import SideBar from "@/Components/HomePage/SideBar";
import PopularSection from "@/Components/HomePage/Main/PopularSection";
import ChooseSection from "@/Components/HomePage/Main/ChooseSection";
import HeaderInfo from "@/Components/HomePage/Header/HeaderInfo";
import JoinOurCommunityBox from "@/Components/HomePage/Main/JoinOurCommunityBox";
import Footer from "@/Components/HomePage/Footer/Footer";

export default function Home() {
	return (
		<div className="min-h-screen w-full bg-zinc-950 text-white overflow-hidden ">
			{/* یک دیو جدید با پوزیشن ابسلوت بهش اضافه شد تا بتوان این دو المان زیر را با هم هماهنگ کرد */}
			<Header />
			{/* <SideBar /> */}
			<HeaderInfo />
			<PopularSection />
			<JoinOurCommunityBox />
			<ChooseSection />
			<Footer />
		</div>
	);
}

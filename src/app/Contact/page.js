import Header from "@/Components/ContactUs/Header/Header";
import ContactForm from "@/Components/ContactUs/Main/ContactForm";
import ContactInfo from "@/Components/ContactUs/Main/ContactInfo";
import MainTitle from "@/Components/ContactUs/Main/MainTitle";
import Map from "@/Components/ContactUs/Main/Map";

function page() {
    return (
        <div>
            <Header />
            <MainTitle />
            <div className="mx-16 mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                <ContactInfo />
                <ContactForm />
            </div>
            <Map />
        </div>
    );
}

export default page;

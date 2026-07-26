import Footer from "@/Components/HomePage/Footer/Footer";
import "../styles/globals.css";
import HeaderNav from "@/Components/HomePage/Header/HeaderNav";

export const metadata = {
    title: "NextLevel Food",
    description: "Share and discover amazing recipes",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-zinc-950 font-sans text-white">
                <div className="flex min-h-screen flex-col">
                    <HeaderNav />

                    <main className="flex-1">{children}</main>

                    <Footer />
                </div>
            </body>
        </html>
    );
}

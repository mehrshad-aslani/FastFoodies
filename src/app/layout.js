import "../styles/globals.css";

export const metadata = {
	title: "NextLevel Food",
	description: "Share and discover amazing recipes",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="fa" dir="ltr">
			<body className="bg-zinc-950 text-white font-sans">{children}</body>
		</html>
	);
}

import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "./partials/Landing";
import MainContent from "./partials/MainContent";
import Head from "next/head";
import Footer from "./partials/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Alicargo Clone from figma</title>
			</Head>
			<main className="">
				<Landing />
				<MainContent />
				<Footer />
			</main>
		</>
	);
}

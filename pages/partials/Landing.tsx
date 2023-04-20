import LandingCard from "@/components/Content/LandingCard";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

export default function Landing() {
	return (
		<div className="h-screen bg-cover bg-no-repeat bg-[url('/images/pexels-the-lazy-artist-gallery-1089656.jpg')]">
			<Navbar />
			<section className="">
				<LandingCard />
			</section>
		</div>
	);
}

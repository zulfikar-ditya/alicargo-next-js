import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<nav className="container mx-auto flex justify-between items-center text-white py-5">
			<div className="flex flex-col text-center">
				<span className="text-2xl font-extrabold uppercase">alipress</span>
				<span className="text-base uppercase tracking-widest">cargo</span>
			</div>
			<div className="">
				<Link href="/" className="btn__main btn__main__left">
					Login
				</Link>
				<Link href="/" className="btn__main btn__main__right">
					Join us
				</Link>
			</div>
		</nav>
	);
}

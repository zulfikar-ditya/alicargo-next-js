import Link from "next/link";
import React from "react";

export default function LandingCard() {
	return (
		<div className="container absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
			<div className="grid grid-cols-1 lg:grid-cols-2 align-middle">
				<div className="flex items-center">
					<h1 className="text-white">
						Ship your package anywhere. Simple, easy and fast.
					</h1>
				</div>
				<div className="flex flex-col bg-white rounded-md p-10">
					<div className="mb-5">
						<h4>Where do you want to send</h4>
					</div>
					<div className="mb-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div className="relative">
							<input
								type="text"
								id="floating_filled"
								className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
								placeholder=" "
							/>
							<label
								htmlFor="floating_filled"
								className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
							>
								Pick up address
							</label>
						</div>
						<div className="relative">
							<input
								type="text"
								id="floating_filled"
								className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
								placeholder=" "
							/>
							<label
								htmlFor="floating_filled"
								className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
							>
								Delivery address
							</label>
						</div>
					</div>
					<div className="mb-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div className="relative">
							<input
								type="text"
								id="floating_filled"
								className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
								placeholder=" "
							/>
							<label
								htmlFor="floating_filled"
								className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
							>
								Parcel details
							</label>
						</div>
						<div className="relative">
							<input
								type="date"
								id="floating_filled"
								className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
								placeholder=" "
							/>
							<label
								htmlFor="floating_filled"
								className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
							>
								Ship date
							</label>
						</div>
					</div>

					<div className="flex justify-end">
						<Link
							href=""
							className="flex items-center btn__main bg-indigo-500 text-white border border-indigo-200 hover:scale-105 shadow-md hover:shadow-lg transition-all"
						>
							<svg
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-5 h-5 mr-2 stroke-2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								></path>
							</svg>
							<span>Search</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

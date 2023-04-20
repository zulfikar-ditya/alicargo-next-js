import React from "react";

export default function MainContent() {
	return (
		<section className="container mx-auto py-20">
			<div className="flex justify-center">
				<div className="w-full lg:w-[70%] text-center">
					<h1>
						<span className="text-8xl">How to send a </span>
						<span className="text-8xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
							package with
						</span>
						<span className="text-8xl"> Alicargo</span>
					</h1>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] content-evenly	  mt-20">
				<div className="flex justify-center">
					<div className="w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 flex items-center justify-center">
						<img
							src="images/pexels-karolina-grabowska-4498136.jpg"
							className="w-72 h-72 object-cover rounded-full absolute"
							alt="image-content-1"
						/>
					</div>
				</div>
				<div className="flex items-center flex-col text-left">
					<div className="">
						<span className="bg-yellow-100 text-xs inline-flex items-center px-2.5 py-0.5 rounded mr-2 border border-yellow-500 text-yellow-500 font-bold">
							<svg
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-10 h-10 stroke-yellow-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
								></path>
							</svg>
							1 Quote
						</span>

						<h2 className="my-10">
							Enter your origin, destination & package details
						</h2>

						<ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span>
									Review the rates & services and pick your preferred carrier
								</span>
							</li>
						</ul>

						<ul>
							<li></li>
						</ul>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] content-evenly	  mt-20">
				<div className="flex items-center flex-col text-left">
					<div className="">
						<span className="bg-rose-100 text-xs inline-flex items-center px-2.5 py-0.5 rounded mr-2 border border-rose-500 text-rose-500 font-bold">
							<svg
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-10 h-10 stroke-rose-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
								></path>
							</svg>
							Book
						</span>

						<h2 className="my-10">Add sender & recipient Information</h2>

						<ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span>
									Enter once & done, we will keep you posted about the status of
									your package
								</span>
							</li>
						</ul>

						<ul>
							<li></li>
						</ul>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-indigo-500 p-2 flex items-center justify-center">
						<img
							src="images/pexels-mister-mister-3434533.jpg"
							className="w-72 h-72 object-cover rounded-full absolute"
							alt="image-content-1"
						/>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] content-evenly	  mt-20">
				<div className="flex justify-center">
					<div className="w-80 h-80 rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-green-500 p-2 flex items-center justify-center">
						<img
							src="images/pexels-karolina-grabowska-4498136.jpg"
							className="w-72 h-72 object-cover rounded-full absolute"
							alt="image-content-1"
						/>
					</div>
				</div>
				<div className="flex items-center flex-col text-left">
					<div className="">
						<span className="bg-teal-100 text-xs inline-flex items-center px-2.5 py-0.5 rounded mr-2 border border-teal-500 text-teal-500 font-bold">
							<svg
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="w-10 h-10 stroke-teal-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
								></path>
							</svg>
							Send
						</span>

						<h2 className="my-10">Complete payment and print your label</h2>

						<ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
								<span>
									Attach the label to the package and we will pick up at your
									address
								</span>
							</li>
						</ul>

						<ul>
							<li></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

"use client";
import Nav from "../../components/home/Nav"
import Button from "../../components/home/Button"
import Steps from "../../components/home/Steps"
import Stacks from "../../components/home/Stacks"
import UseCases from "../../components/home/UseCases";
import Footer from "../../components/home/Footer";
import Menu from "../../components/home/Menu";

/**
 * 
 *  - Objectives
 * 		- What is Ignition ?
 * 		- Why Ignition ?
 *  	- Where can you use Ignition ?
 *  	- How to get started ?
 * 		- Conclusion message
 * 
 * 	- Ignition pricing plans
 * 		- Hobby      100k
 * 		- Pro        1mil
 * 		- Priority   4mil
 * 		- Priority+  10mil
 * 		- Enterprize Infinite
 * 
 */

export default function Home() {
	// const { data: session, status } = useSession()
	// const user  = session?.user?.name;
	// const email = session?.user?.email
	return (
		<div className="text-white">
			<Nav />
			<Menu />
			<main className="flex flex-col items-start justify-center absolute py-28 h-fit w-full
			top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#1000f20b,rgba(255,255,255,0))]">
				<div className="min-[1024px]:w-3/4 min-[1024px]:m-auto min-[1024px]:pt-12 h-full flex flex-col
				 items-center justify-center">
					<div className="flex my-8 w-full flex-row items-center justify-center">
						<button className="animate-border inline-block rounded-3xl bg-white bg-gradient-to-r from-blue-50 via-blue-200 to-blue-400 bg-[length:400%_400%] p-[1px]">
							<span className="block rounded-3xl px-4 py-1 bg-black backdrop-blur text-xs"> 
								Robust, Performant & litrally real time powered by Rust.
							</span>
						</button>
					</div>
					<h1 className="text-[2.5rem] leading-[1] px-6 md:text-6xl min-[1024px]:text-7xl tracking-tight 
					font-medium text-center ">
						The Ultimate Real Time Platform.
					</h1>
					<span className="text-base sm:text-lg w-[70%] sm:w-2/3 md:w-2/3 text-center font-medium 
					tracking-wide text-neutral-500 mt-8">
						We handle all the complexity of the real time infrastructure, so that you get real time for real cheap & real quick!
					</span>
					<br />
					<div className="flex items-center gap-0 mt-4">
						<Button text="Start free" varient="filled" />
						<Button text="Contact Us" varient="outline" />
					</div>
				</div>
				<Stacks/>
			</main>
		</div>
	)
}
"use client";
import Nav from "../../components/Nav"
import Button from "../../components/Button"
import Steps from "../../components/Steps"
import Stacks from "../../components/Stacks"
import UseCases from "../../components/UseCases";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

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
		<div className="bg-[#000000] text-white">
			<Nav />
			<Menu/>
			<main className=" flex 
			flex-col items-start justify-center min-h-screen relative">
				<div className="-mt-24 min-[1024px]:w-3/4 min-[1024px]:m-auto min-[1024px]:pt-12 h-full flex flex-col items-center justify-center">
					<p className="text-mybg my-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl
					flex items-center py-2 px-4 text-xs sm:text-sm text-center">
						Robust, Performant & litrally real time powered by Rust.
					</p>
					{/* bg-clip-text text-transparent bg-gradient-to-tr from-gray-400 to-white */}
					<h1 className="text-[2.5rem] leading-[1] px-6 md:text-6xl min-[1024px]:text-7xl tracking-tight 
					font-medium text-center">
						The Ultimate platform
						for your real time 
						applications.
					</h1>
					<span className="text-base sm:text-lg w-[70%] sm:w-2/3 md:w-1/2 text-center font-medium 
					tracking-wide text-neutral-500 mt-8">
							We handle all the complexity of the real time infrastructure, so that you get real time for real cheap & real quick!
					</span>
					<br />
					<div className="flex items-center gap-0 mt-4">
						<Button text="Start free" varient="filled" />
						<Button text="Contact Us" varient="outline" />
					</div>
				</div>
			</main>
			<UseCases/>
			<Stacks/>
			<Steps/>
			<Footer/>
	  	</div>
	)
}
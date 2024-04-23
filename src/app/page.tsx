"use client";
import Nav from "../../components/home/Nav"
import { Button } from "../../components/ui/Button"
import { useSession, signIn, signOut } from "next-auth/react"
import Savage from "../../components/home/Savage";
import Footer from "../../components/home/Footer";
import Products from "../../components/home/Products";
import Features from "../../components/home/Features";

export default function Home() {
	const { data: session, status } = useSession()
	return (
		<div className="text-white bg-gradient-to-b from-gray-950 to-black relative">
			<Nav status={status} signIn={signIn} signOut={signOut} />
			<main className="flex flex-col items-start justify-center py-28 h-full w-full
					bg-fancy rounded-b-[2.9rem] md:rounded-b-[3.5rem] lg:rounded-b-[5rem]">
				<div className="min-[1024px]:w-3/4 min-[1024px]:m-auto pt-24 h-full flex flex-col
							items-center justify-center inset-0 w-full bg-transparent gap-2">
					<div className="bg-white/10 py-1 text-sm text-neutral-300 backdrop-blur-sm rounded-3xl px-3 z-0">
						Litrally real time, powered by Rust
					</div>
					<h1 className="heroIn mt-4 text-[3rem] leading-[1] px-6 md:text-6xl min-[1024px]:text-8xl tracking-tight 
							text-center text-white capitalize">
						Real time made simple for developers
					</h1>
					<span className="heroIn inter-tight text-base sm:text-lg w-[70%] sm:w-2/3 md:w-2/3 text-center font-normal 
							tracking-wide text-neutral-50 mt-8">
						We handle all the complexity of the real time infrastructure, so that you get real time for real cheap & real quick!
					</span>
					<br />
					<Button className="z-10">Try for free</Button>
				</div>
			</main>
			<Products />
			<Features />
			<img className="h-96 -mt-12 -mb-32 m-auto w-2/3"
				src="/sparkle.jpg" // src="https://cdn.leonardo.ai/users/5ebbac92-79d5-4e98-b3d7-f0754f6153a0/generations/3796deb0-d91b-43c8-93ab-d23911601608/Default_an_abstract_inverted_gradient_circle_in_complete_darkn_2.jpg" 
			/>
			<div className="text-center w-full h-fit py-12">
				<h1 className="text-8xl tracking-tight">Use cases</h1>
				<p className="text-gray-500 w-10/12 md:w-1/2 m-auto my-3 text-lg">Whatever your usecase be Ignition can help you improve your user expirence and customer satisfaction with easy integrations and flexible pricing.</p>
				<Savage />
			</div>
			<div className="w-[96%] m-auto rounded-b-[2.9rem] md:rounded-b-[3.5rem] lg:rounded-b-[5rem] h-screen bg-fancy flex flex-col items-center justify-center">
				<h1 className="text-[3rem] leading-[1] md:text-6xl text-7xl w-11/12 sm:w-2/3 text-center tracking-tight">
					Your data stays fresh & dynamic with ignition.
				</h1>
				<Button className="mt-12">Try for free</Button>
			</div>
			<Footer />
		</div>
	)
}
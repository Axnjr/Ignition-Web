"use client";
import Nav from "../../components/home/Nav"
import Button from "../../components/home/Button"
import Stacks from "../../components/home/Stacks"
import Menu from "../../components/home/Menu";
import Compnies from "../../components/home/Compnies";
import Savage from "../../components/home/Savage";
import Integrations from "../../components/home/Integrations";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
	// const { data: session, status } = useSession()
	// const user  = session?.user?.name;
	// const email = session?.user?.email
	return (
		<>
			<div className="text-white bg-gradient-to-b from-gray-950 to-black relative">
				<Nav />
				<Menu />
				<main className="flex flex-col items-start justify-center py-28 h-fit w-full
				bg-[radial-gradient(circle_500px_at_50%_200px,#100ef14c,transparent)]">
					<div className="min-[1024px]:w-3/4 min-[1024px]:m-auto pt-12 h-full flex flex-col
							items-center justify-center inset-0 w-full bg-transparent gap-2">
						<div className="bg-white/10 py-1 text-sm text-neutral-300 backdrop-blur-sm rounded-3xl px-3 z-0">
							Litrally real time, powered by Rust
						</div>
						<h1 className="heroIn mt-4 text-[2.5rem] leading-[1] px-6 md:text-6xl min-[1024px]:text-7xl tracking-tight 
							font-medium text-center text-white">
							Real time made simple for developers
						</h1>
						<span className="heroIn inter-tight text-base sm:text-lg w-[70%] sm:w-2/3 md:w-2/3 text-center font-normal 
							tracking-wide text-neutral-50 mt-8">
							We handle all the complexity of the real time infrastructure, so that you get real time for real cheap & real quick!
						</span>
						<br />
						<Button varient="filled" className="z-10" text="Start Free" />
					</div>
				</main>
				<Compnies />
				<Stacks />
				<Savage />
				<Integrations />
				{/* <Pricing /> */}
				<div className="min-h-screen w-full grid place-content-center place-items-center gap-8
				bg-[radial-gradient(circle_500px_at_50%_200px,#100ef14c,transparent)]">
					<h1 className="text-5xl px-5 sm:text-6xl lg:text-7xl font-medium text-center md:whitespace-nowrap tracking-tight">Keep the data<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-mybg to-sky-500 whitespace-nowrap">fresh & dynamic</span>
					</h1>
					<div className="flex items-center mt-4">
						<Button varient="filled" className="rounded-full" text="Start Free" />
						<Button varient="outline" className="rounded-full" text="Contact Us" />
					</div>
				</div>
				<footer className=" relative w-[98%] m-auto h-fit py-24 border-t border-neutral-700 sm:px-12">
					<div className='absolute top-0 right-0 left-0 flex w-full justify-center'>
						<div className='left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(87,87,87,0)] via-mybg to-[rgba(17,17,17,0)] transition-all w-[300px]' />
					</div>
					<div className="flex flex-col items-center justify-center gap-5">
						<div className="flex items-center text-4xl font-semibold tracking-tight">
							<img className="w-9 mr-1 rotate-45" src="/ignition.png"/> Ignition &nbsp; 
						</div>
						<Link href="/status"><h4 className="text-mybg hover:bg-mybg/20 p-2 rounded-xl">● All Systems Operational</h4></Link>
						<div className="flex items-center gap-2">
							<Link className="mx-2 underline text-mybg2 font-medium hover:text-white" href="/contact">Contact Us <ExternalLinkIcon className="inline-block"/></Link>
							<Link className="mx-2 underline text-mybg2 font-medium hover:text-white" href="/docs">Docs <ExternalLinkIcon className="inline-block"/></Link>
							<Link className="mx-2 underline text-mybg2 font-medium hover:text-white" href="/contact?joinus">Join Us <ExternalLinkIcon className="inline-block"/></Link>
						</div>
						<span className="text-base text-neutral-500">©2024</span>
					</div>
				</footer>
			</div>
		</>
	)
}


/**
 * 
 * <main className="min-[1024px]:w-3/4 min-[1024px]:m-auto min-h-screen flex flex-col
					items-center justify-center inset-0 w-full bg-transparent gap-2">
					<section className="grid grid-cols-12 gap-0 grid-flow-row">
						{[...Array(12).keys()].map((_,i) => <div className="p-10 border-myborder border text-center"></div>)}
						<div className="col-span-1 p-10 text-center border border-myborder"></div>
						<div className="col-span-10 text-center my-10">
							<h1 className="heroIn text-[2.5rem] leading-[1] px-6 md:text-6xl min-[1024px]:text-7xl tracking-tight 
								font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] to-mybg">
								Real time made simple for developers
							</h1>
						</div>
						<div className="col-span-1 text-center border p-10 border-myborder"></div>
						{[...Array(12).keys()].map((_,i) => <div className="p-10 border-myborder border text-center"></div>)}
					</section>
					
				</main>
 * 
 * 
 */
/**
 * 
 * 
 * 
 * 
<motion.div initial={{ y: -150 }} whileInView={{ y: 50 }} transition={{ delay: 0, duration: 0.8, ease: "easeInOut" }}
					className="w-11/12 h-screen rounded-xl backdrop-blur-md m-auto">
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
						className="flex items-center justify-center gap-5 w-full h-12 px-6">
							{
								sdks.map((sdk, id) => <button key={id} className=" capitalize border border-myborder rounded-lg
								px-3 py-1 m-1 bg-black" onClick={() => changeSdk(sdks[id])}>
									{sdk}
								</button>)
							}
						</motion.div>
						<div className="border border-myborder m-auto w-full h-96 rounded-2xl mt-8
						bg-gradient-to-b from-neutral-800/50 to-neutral-950/5">
							<SDK sdk={sdkState}/>
						</div>
					</motion.div>











 *<p className="my-10 text-xl text-gray-600 font-medium inline-block w-2/3">
						A simple, elegant interface so you can start publishing & reciving messages in minutes.
						
					</p>

					<div className="w-full overflow-x-scroll sm:overflow-hidden items-center gap-0 
					sm:gap-5 p-4 rounded-2xl grid place-content-center place-items-center grid-cols-3 gap-5">
						{
							sdks.map((sdk, id) => <Button key={id} text={sdk} varient={sdkState == sdks[id] ? "filled" : "outline"}
								onClick={() => changeSdk(sdks[id])}
								className="cursor-pointer px-6 rounded-xl capitalize text-lg " />)
						}
					</div>
 */
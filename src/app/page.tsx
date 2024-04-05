"use client";
import Nav from "../../components/home/Nav"
import Button from "../../components/home/Button"
import Stacks from "../../components/home/Stacks"
import Menu from "../../components/home/Menu";
import Compnies from "../../components/home/Compnies";
import Galaxy from "../../components/home/Galaxy";
import Savage from "../../components/home/Savage";
import Integrations from "../../components/home/Integrations";

export default function Home() {
	// const { data: session, status } = useSession()
	// const user  = session?.user?.name;
	// const email = session?.user?.email
	return (
		<div className="text-white bg-black relative">
			<Nav />
			<Menu />
			<main className="flex flex-col items-start justify-center py-28 h-fit w-full
			top-0 -z-50 bottom-0 left-0 right-0 bg-gradient-to-b from-neutral-950 to-black">
				<div className="min-[1024px]:w-3/4 min-[1024px]:m-auto min-[1024px]:pt-12 h-full flex flex-col
				 items-center justify-center inset-0 w-full bg-transparent gap-2">
					<h1 className="heroIn mt-12 text-[2.5rem] leading-[1] px-6 md:text-6xl min-[1024px]:text-7xl tracking-tight 
					font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-[#c7d2fe] to-[#2f2f31]">
						The ultimate platform for your real time applications.
					</h1>
					<span className="heroIn text-base sm:text-lg w-[70%] sm:w-2/3 md:w-2/3 text-center font-normal 
					tracking-wide text-neutral-50 mt-8">
						We handle all the complexity of the real time infrastructure, so that you get real time for real cheap & real quick!
					</span>
					<br />
					<Button varient="filled" text="Start Free" />
				</div>
			</main>
			<Compnies/>
			<Stacks />
			<Galaxy/>
			<Savage/>
			<Integrations/>
		</div>
	)
}

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
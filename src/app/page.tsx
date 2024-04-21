"use client";
import Nav from "../../components/home/Nav"
import { Button } from "../../components/ui/Button"
import { Highlight, themes } from "prism-react-renderer"
import type { PrismTheme, StyleObj } from "prism-react-renderer"
// import Stacks from "../../components/home/Stacks"
import Menu from "../../components/home/Menu";
// import Compnies from "../../components/home/Compnies";
// import Galaxy from "../../components/home/Galaxy";
// import Savage from "../../components/home/Savage";
// import Integrations from "../../components/home/Integrations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs";
// import { ExternalLinkIcon } from "@radix-ui/react-icons";
// import Pricing from "../../components/home/Pricing";
// import Link from "next/link";
import Counter from "../../components/ui/Counter";
import Savage from "../../components/home/Savage";
import { EvervaultCard } from "../../components/ui/evervault-card";
import Link from "next/link";
import Pricing from "../../components/home/Pricing";

const codeBlock = `import { useSync } from "@ignition/react";

export default function MyComp() {
    // data to be synced
    const [state, setState, onExternalChange] = useSync({  
        group: "site_viewers",
        maxClients: 500,
        data: "You can sync anytype of data !"
    });

    return ( 
		<>  {/* Your Component */}  </> 
	)
}`

const theme: PrismTheme = {
	plain: {
		color: "#fff",
		backgroundColor: "#1111124c",
	},
	styles: [
		{
			types: ["prolog"],
			style: {
				color: "#ec5189",
			},
		},
		{
			types: ["comment"],
			style: {
				color: "rgb(50,50,50)",
			},
		},
		{
			types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
			style: {
				color: "#2a6af3",
			},
		},
		{
			types: ["number", "inserted"],
			style: {
				color: "#32cba3",
			},
		},
		{
			types: ["constant"],
			style: {
				color: "#100ff2",
			},
		},
		{
			types: ["attr-name", "variable"],
			style: {
				color: "",
			},
		},
		{
			types: ["deleted", "string", "attr-value", "template-punctuation"],
			style: {
				color: "#E2AAFC",
			},
		},
		{
			types: ["selector"],
			style: {
				color: "",
			},
		},
		{
			// Fix tag color
			types: ["tag"],
			style: {
				color: "rgb(78, 201, 176)",
			},
		},
		{
			// Fix tag color for HTML
			types: ["tag"],
			languages: ["markup"],
			style: {
				color: "rgb(86, 156, 214)",
			},
		},
		{
			types: ["punctuation", "operator"],
			style: {
				color: "rgb(212, 212, 212)",
			},
		},
		{
			// Fix punctuation color for HTML
			types: ["punctuation"],
			languages: ["markup"],
			style: {
				color: "#808080",
			},
		},
		{
			types: ["function"],
			style: {
				color: "#ec5189",
			},
		},
		{
			types: ["class-name"],
			style: {
				color: "rgb(78, 201, 176)",
			},
		},
		{
			types: ["char"],
			style: {
				color: "#100fed",
			},
		},
	],
}

export default function Home() {
	// const { data: session, status } = useSession()
	// const user  = session?.user?.name;
	// const email = session?.user?.email
	return (
		<>
			<div className="text-white bg-gradient-to-b from-gray-950 to-black relative">
				<Nav />
				<Menu />
				<main className="flex flex-col items-start justify-center py-28 h-full w-full
				bg-fancy  rounded-b-[5rem]">
					<div className="min-[1024px]:w-3/4 min-[1024px]:m-auto pt-24 h-full flex flex-col
							items-center justify-center inset-0 w-full bg-transparent gap-2">
						<div className="bg-white/10 py-1 text-sm text-neutral-300 backdrop-blur-sm rounded-3xl px-3 z-0">
							Litrally real time, powered by Rust
						</div>
						<h1 className="heroIn mt-4 text-[2.5rem] leading-[1] px-6 md:text-6xl min-[1024px]:text-8xl tracking-tight 
							font- text-center text-white capitalize">
							Real time made simple for developers
						</h1>
						<span className="heroIn inter-tight text-base sm:text-lg w-[70%] sm:w-2/3 md:w-2/3 text-center font-normal 
							tracking-wide text-neutral-50 mt-8">
							We handle all the complexity of the real time infrastructure, so that you get real time for real cheap & real quick!
						</span>
						<br />
						{/* <Button varient="filled" className="z-10" text="Start Free" /> */}
					</div>
				</main>

				<div className="h-fit w-full text-center py-24">
					<h1 className="text-4xl mt-20 mb-10 tracking-tight">Easy solutions to complex engineering problems</h1>
					<Tabs defaultValue="sync">
						<TabsList className="flex justify-center gap-2 rounded-full w-fit m-auto
						bg-white text-black">
							<TabsTrigger className="text-xl font-medium" value="sync">
								Sync
							</TabsTrigger>
							<TabsTrigger className="text-xl font-medium" value="stream">
								Stream
							</TabsTrigger>
							<TabsTrigger className="text-xl font-medium" value="notify">
								Notify
							</TabsTrigger>
						</TabsList>
						<TabsContent value="sync" className="flex items-center justify-center mt-24 w-11/12 mx-auto h-fit
						rounded-t-[5rem] px-10 py-28 bg-fancyflip flex-col">
							<div className="flex flex-col items-center justify-center h-[55vh] w-2/3 ">
								<h1 className="text-6xl font-">
									Sync peice of data across millions of devices
								</h1>
								<br />
								<p className="text-lg">
									Synconized music, screens, analytics, cursors, collbarating tools
								</p>
								<br />
								<div className="flex items-center gap-2">
									<Button>Read Docs</Button>
									<Button variant="outline">Check examples</Button>
								</div>
							</div>
							<div className="w-8/12 h-[55vh] mt-12">
								<Highlight theme={{ ...theme }} code={codeBlock} language="tsx" >
									{({ className, style, tokens, getLineProps, getTokenProps }) => (
										<pre className="py-6 px-8 rounded-xl text-left" style={style}>
											{tokens.map((line, i) => (
												<div key={i} {...getLineProps({ line })}>
													<span className="text-neutral-600 ml-1 mr-4">{i + 1}</span>
													{line.map((token, key) => (
														<span key={key} {...getTokenProps({ token })} />
													))}
												</div>
											))}
										</pre>
									)}
								</Highlight>
							</div>

						</TabsContent>

					</Tabs>
				</div>

				<div className="flex flex-col items-center justify-end h-fit mt-12 pb-32">
					<div className="col-span-3 text-center">
						<div className="section-header-badge relative w-max rounded-full m-auto">
							<div className="py-1 px-4 font-medium">
								Why Ignition ?
							</div>
						</div>
						<h1 className="text-6xl mt-6 mb-5 w-[55%] m-auto 
						font-normal">
							Reliable and rediculously fast infrastructure, powered by Rust.
						</h1>
					</div>
					<section className=" grid w-11/12 m-auto mt-14 h-fit grid-cols-3 px-8 py-4 gap-1">
						<div className="p-8 border border-myborder rounded-2xl
						 h-full group/box-body relative lg:col-span-2 text-center lg:text-left ">
							<h1 className="text-xl font-medium">Mean latency</h1>
							<h1 className="text-mybg2 font-medium mt-3 leading-[1.4]">
								Milliseconds Matter, Get the Speed You Need. Don't let slow updates and lagging 
								notifications hold your users back. 
							</h1>
							<div className="flex items-center gap-2">
								<div>
									<div className="flex items-center w-full h-20 gap-2 my-2 border border-myborder rounded-lg p-2">
										{
											[...Array(20).keys()].map((_,id) => <div key={id}
												className="w-2 h-full rounded-2xl bg-white/10 flex flex-col justify-end">
													<div style={{height: Math.floor(Math.random() * 10)+10+"%"}} className="w-full rounded-2xl bg-mybg"></div>
											</div>)
										}
									</div>
									<label className="text-xl">Dedicated Plan 5ms</label>
								</div>
								<div>
									<div className="flex items-center w-full h-20 gap-2 my-2 border border-myborder rounded-lg p-2">
										{
											[...Array(20).keys()].map((_,id) => <div key={id}
												className="w-2 h-full rounded-2xl bg-white/10 flex flex-col justify-end">
													<div style={{height: (Math.floor(Math.random() * 120)+100)/2.6+"%"}} className="w-full rounded-2xl bg-mybg"></div>
											</div>)
										}
									</div>
									<label className="text-xl">Shared Plan 145ms</label>
								</div>
							</div>
							
						</div>
						<div className="col-span-1 p-8 border border-myborder rounded-2xl
						 h-full group/box-body relative lg:col-span-1 text-left">
							<h1 className="text-xl font-medium">Uptime</h1>
							<h1 className="text-xl text-neutral-500">robust reliable infrastructure</h1>
							<h1 className="text-9xl bg-gradient-to-tr from-mybg via-indigo-400 from-50% to-blue-500 bg-clip-text text-transparent text-center">{">"}<Counter value={99} /><span className="text-3xl">%</span></h1>
						</div>
						<EvervaultCard className="col-span-1 border border-myborder rounded-2xl text-left h-[90%]">
							<h1 className="text-xl font-medium flex items-center">
								<svg className="w-6 h-6 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
								</svg>
								Secure
							</h1>
							<p className="text-mybg2 font-medium mt-3 leading-[1.4]">
								End-to-end encryption keeps your data safe we dont touch your data at all.
							</p>
						</EvervaultCard>
						<Link href="/pricing" className="col-span-2 border border-myborder rounded-2xl text-left h-[90%] p-8">
							<h1 className="text-xl font-medium">Scalable Pricing</h1>
							<h1 className="text-lg text-neutral-500 mt-2">
								Start free, then only pay for what you use with duration based metered shared pricing plan, or 
								take complete control and use without any limitations with our dedicated & enterprize plans.
							</h1>
							<div className="flex items-center justify-around mt-10">
								<div className="rounded-lg border border-myborder p-4 w-44">
									<span className="text-base text-mybg2">Clients</span>
									<h1 className="text-3xl text-mybg">100</h1>
								</div>
								<div className="rounded-lg border border-myborder p-4 w-44">
									<span className="text-base text-mybg2">Duration</span>
									<h1 className="text-3xl text-mybg">1hour</h1>
								</div>
								<div className="rounded-lg border border-myborder p-4 w-44">
									<span className="text-base text-mybg2">Cost</span>
									<h1 className="text-3xl text-green-500">0.05$</h1>
								</div>
							</div>
						</Link>
					</section>
				</div>
				<img className="-mt-32 w-full m-auto h-96" src="https://cdn.leonardo.ai/users/5ebbac92-79d5-4e98-b3d7-f0754f6153a0/generations/3796deb0-d91b-43c8-93ab-d23911601608/Default_an_abstract_inverted_gradient_circle_in_complete_darkn_2.jpg" />
				<div className="text-center w-full h-fit py-12">
					<h1 className="text-8xl tracking-tight">Use cases</h1>
					<p className="text-gray-500 w-1/2 m-auto my-3 text-lg">Whatever your usecase be Ignition can help you improve your user expirence and customer satisfaction with easy integrations and flexible pricing.</p>
					<Savage />
				</div>
				<img className="rotate-180 w-full m-auto h-96" src="https://cdn.leonardo.ai/users/5ebbac92-79d5-4e98-b3d7-f0754f6153a0/generations/3796deb0-d91b-43c8-93ab-d23911601608/Default_an_abstract_inverted_gradient_circle_in_complete_darkn_2.jpg" />
				<Pricing/>
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

					<div className="hover:bg-fancy
						col-span-1 p-8 h-full border-r border-mybg group/box-body relative lg:col-span-1 text-center lg:text-left ">
							<h1 className="text-9xl font-bold bg-gradient-to-tr from-sky-50 to-mybg bg-clip-text text-transparent"><Counter value={5} /><span className="text-3xl">MS</span></h1>
							<h1 className="text-xl font-medium">Mean latency</h1>
							<h1 className="text-xl text-neutral-500">for users with dedicated plans</h1>
						</div>
						<div className="hover:bg-fancy
						col-span-1 p-8 h-full border-r border-mybg group/box-body relative lg:col-span-1 text-center">
							<h1 className="text-9xl font-bold bg-gradient-to-tr from-sky-50 to-mybg bg-clip-text text-transparent"><Counter value={140} /><span className="text-3xl">MS</span></h1>
							<h1 className="text-xl font-medium">Mean latency</h1>
							<h1 className="text-xl text-neutral-500">for users with shared plans</h1>
						</div>
						<div className="hover:bg-fancy
						col-span-1 p-8 h-full group/box-body relative lg:col-span-1 text-right">
							<h1 className="text-9xl font-bold bg-gradient-to-tr from-sky-50 to-mybg bg-clip-text text-transparent"><Counter value={99} /><span className="text-3xl">%</span></h1>
							<h1 className="text-xl font-medium">Uptime</h1>
							<h1 className="text-xl text-neutral-500">robust reliable infrastructure</h1>
						</div>


<Stacks />
				<Compnies />
				<Savage />
				<Integrations />
				<Pricing />
				<div className="min-h-screen w-full grid place-content-center place-items-center gap-8
				bg-[radial-gradient(circle_500px_at_50%_200px,#100ef14c,transparent)]">
					<h1 className="text-5xl px-5 sm:text-6xl lg:text-7xl font-medium text-center md:whitespace-nowrap tracking-tight">Keep the data<br />
						{/* <span className="font-semibold text-mybg">fresh,</span>
						<span className="font-semibold text-fuchia-500"> dynamic,</span>
						<span className="font-semibold text-gren-500"> real time</span> 
						{/*   
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
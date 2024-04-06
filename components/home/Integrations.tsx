import { LampContainer } from "../ui/Lamp";
import { motion } from "framer-motion";
import clsx from "clsx";

const sdksObj = [
    {
        lang: "JavaScript",
        herf: "",
        col: "bg-green-500",
        desc: "A socket.io wrapper for connecting with Ignition servers."
    },
    {
        lang: "React",
        herf: "",
        col: "bg-green-500",
        desc: "useIgnition() hook to handle event emits and subscriptions with ease."
    },
    {
        lang: "GoLang",
        herf: "",
        col: "bg-yellow-400",
        desc: "A go-socket.io wrapper for connecting with Ignition servers (in development)"
    },
    {
        lang: "Rust",
        herf: "",
        col: "bg-yellow-400",
        desc: "A socketiooxide wrapper for connecting with Ignition servers (in development)"
    },
    {
        lang: "Kotlin",
        herf: "",
        col: "bg-yellow-400",
        desc: "A websockets client warpper for connecting with Ignition servers (in development)"
    },
    {
        lang: "No SDK",
        herf: "",
        col: "bg-green-500",
        desc: "If SDK of your language is not listed you check no-sdk examples here."
    },
]

export default function Integrations() {
    return (
        <LampContainer className="mt-20 text-center">
            <motion.div initial={{ opacity: 0.5, y: 400 }} whileInView={{ opacity: 1, y: 350 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }} className=" w-full inline-block">
                <h1 className="mt-28 text-white text-4xl font-medium tracking-tight md:text-7xl w-[60%] text-center inline-block">
                    Seemlessly Integrate with your project
                </h1>
                <div className="relative mt-10 mb-40 grid gap-4 text-left md:mt-20 md:grid-cols-3 md:gap-6">
                    {
                        sdksObj.map((sdk, id) => <a key={id} target="_blank" className="relative group/source-box flex flex-col rounded-2xl p-6 md:p-8 
							border border-gray-800 bg-gradient-to-b from-neutral-950 to-black backdrop-blur transition 
							hover:scale-[1.02] hover:bg-white/10" href={sdk.herf}>
                            <div className='absolute top-0 right-0 left-0 flex w-full justify-center'>
                                <div className='left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-mybg to-[rgba(17,17,17,0)] transition-all w-[300px]' />
                            </div>
                            <div className="inline-flex items-center gap-2 self-start rounded-full px-2 py-1 
								text-xl font-bold my-2 whitespace-nowrap">
                                <span className={clsx("inline-flex h-3 w-3 rounded-full", sdk.col)}></span>
                                {sdk.lang}
                                <span className="inline-flex translate-y-1/4 items-center opacity-0 transition group-hover/source-box:translate-y-0 group-hover/source-box:opacity-100 text-blue-400">
                                    {
                                        sdk.col == "bg-yellow-400" 
                                            ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity h-4 w-4 text-muted-foreground"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                                            :
                                        <svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="1em" height="1em" className="inline-flex shrink-0 text-2xl" role="icon">
                                            <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    }
                                </span>
                            </div>
                            <p className="mt-1 grow opacity-40 tracking-normal font-medium">
                                {sdk.desc}
                            </p>
                        </a>)
                    }
                    <h5 className="text-center col-span-3 mt-24 underline text-white">⁕ More SDK Comming Soon ⁕</h5>
                </div>
            </motion.div>
        </LampContainer>
    )
}

































{/* <div className="text-center">
                <h1 className="text-4xl font-medium tracking-tight text-neutral-500">Average Latency</h1>
                <h1 className="text-9xl font-medium text-mybg m-6">140<span className="text-2xl">ms</span></h1>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-medium tracking-tight text-neutral-500">Powered by</h1>
                <h1 className="text-9xl font-medium text-mybg m-6">Rust</h1>
            </div>
            <div className="text-center">
                <h1 className="text-4xl font-medium tracking-tight text-neutral-500">Pro plan starts at</h1>
                <h1 className="text-9xl font-medium text-mybg m-6">12$</h1>
            </div> */}

{/* <div className="relative z-0 h-[320px]">
                    <div className="absolute left-1/2 top-1/2 z-0 flex h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                        <svg className="absolute left-0 top-0 z-0" width={490} height={490} viewBox="0 0 490 490" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.1" cx={245} cy={245} r="47.5" stroke="white" /><circle opacity="0.08" cx={245} cy={245} r="96.5" stroke="white" /><circle opacity="0.06" cx={245} cy={245} r="146.5" stroke="white" /><circle opacity="0.04" cx={245} cy={245} r="195.5" stroke="white" /><circle opacity="0.02" cx={245} cy={245} r="244.5" stroke="white" /></svg>
                            <svg height={38} viewBox="0 0 354 472" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M353.974 59.421C275.869 -18.6835 149.236 -18.6835 71.1315 59.421C-6.97352 137.526 -6.97352 264.159 71.1315 342.264L106.486 306.909C47.9085 248.33 47.9085 153.355 106.486 94.777C165.065 36.198 260.04 36.198 318.618 94.777L353.974 59.421Z" className="fill-emerald-300" /><path d="M283.264 130.132C244.212 91.08 180.894 91.08 141.842 130.132C102.789 169.185 102.789 232.501 141.842 271.553L177.197 236.198C157.671 216.672 157.671 185.014 177.197 165.487C196.723 145.961 228.381 145.961 247.908 165.487L283.264 130.132Z" className="fill-emerald-300" /><path d="M0.421875 412.975C78.5269 491.079 205.16 491.079 283.265 412.975C361.369 334.87 361.369 208.237 283.265 130.132L247.909 165.487C306.488 224.066 306.488 319.041 247.909 377.619C189.331 436.198 94.3559 436.198 35.7769 377.619L0.421875 412.975Z" className="fill-emerald-400" /><path d="M71.1328 342.264C110.185 381.316 173.501 381.316 212.554 342.264C251.606 303.212 251.606 239.895 212.554 200.843L177.199 236.198C196.725 255.724 196.725 287.382 177.199 306.909C157.672 326.435 126.014 326.435 106.488 306.909L71.1328 342.264Z" className="fill-emerald-400" /></svg>
                            <span className="absolute bottom-1/2 left-1/2 z-10 flex w-0 origin-bottom justify-center h-[118px] rotate-[120deg]">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white rotate-[-120deg]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={35} viewBox="0 0 35 15" fill="none"><path fill="#F6821F" d="m23.567 14.788.17-.587c.202-.698.127-1.343-.213-1.817-.312-.437-.832-.694-1.465-.724l-11.97-.151a.238.238 0 0 1-.189-.1.244.244 0 0 1-.027-.216.318.318 0 0 1 .278-.212l12.082-.153c1.433-.066 2.984-1.228 3.528-2.645l.689-1.8a.436.436 0 0 0 .018-.237A7.867 7.867 0 0 0 18.791 0a7.87 7.87 0 0 0-7.451 5.333A3.543 3.543 0 0 0 5.787 9.04a5.032 5.032 0 0 0-4.832 5.755.234.234 0 0 0 .23.201l22.1.003h.007a.292.292 0 0 0 .275-.212Z" /><path fill="#FBAD41" d="M27.554 6.514c-.11 0-.221.003-.331.008a.185.185 0 0 0-.052.012.19.19 0 0 0-.12.127l-.471 1.624c-.203.698-.128 1.343.212 1.817.312.437.832.694 1.464.724l2.552.153a.232.232 0 0 1 .182.099.24.24 0 0 1 .027.217.318.318 0 0 1-.277.212l-2.652.153c-1.44.066-2.99 1.228-3.534 2.645l-.191.5a.141.141 0 0 0 .126.192h9.131a.242.242 0 0 0 .235-.176 6.541 6.541 0 0 0-6.301-8.307Z" /></svg>
                                </span>
                            </span>
                    </div>
                </div> */}
const useCases = [
    "Location Streaming",
    "Realtime Chat",
    "Live Results",
    "Collbarative Tools",
    "Gaming",
    "Realtime analytics",
    "Presence indication"
]

const plans = [
    ["Hobby", 0],
    ["Pro", 19],
    ["Priority", 49],
    ["Dedicated", 129],
    ["Enterprise", 399]
]

export default function UseCases() {
    return (
        <>
            <div className="text-center mt-40 w-[60%] m-auto">
                <h1 className="text-3xl mb-12 md:text-6xl tracking-tight font-medium">
                    The platform tailored for the <span className="text-mybg">realtime</span> revolution
                </h1>
                <p className="text-neutral-500 text-lg md:text-2xl mt-4 md:my-6">
                    Make the next WhatsApp, discord, uber, github, facebook, everything somewhere relies on real time features.
                </p>
                {/* <img className="w-screen opacity-40" src="https://upstash.com/globe.png" /> */}
            </div>
            <section className='min-h-screen p-8 mt-6 grid gap-4 text-left md:grid-cols-5 md:gap-6'>
                <div className="group/box-body relative z-0 grid gap-6 p-6 md:gap-8 md:p-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl md:col-span-2 md:h-[60%]">
                    <header>
                        <h4 className="flex items-center gap-2 font-display text-xl font-semibold md:text-2xl">
                            Mean latency
                            <span className="inline-flex translate-y-1/4 text-emerald-400 opacity-0 transition group-hover/box-body:translate-y-0 group-hover/box-body:opacity-100">
                                <a target="_blank" className="group/link-new inline-flex cursor-pointer items-center transition gap-0.5 hover:text-emerald-400 hover:underline" href="https://latency.upstash.io">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-mybg h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                                </a>
                            </span>
                        </h4>
                        <h1 className="text-9xl font-medium text-mybg my-6">
                            140
                            <span className="text-2xl">ms</span>
                        </h1>
                        {/* <p className="mt-2 opacity-40 md:mt-3">
                        Pro users get events in litrally real time 75ms.
                    </p> */}
                    </header>
                </div>

                <div className="group/box-body relative z-0 grid gap-6 p-6 md:gap-8 md:p-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl md:col-span-3">
                    <header>
                        <h4 className="flex items-center gap-2 font-display text-xl font-semibold md:text-2xl">
                            Powered by
                            <span className="inline-flex translate-y-1/4 text-emerald-400 opacity-0 transition group-hover/box-body:translate-y-0 group-hover/box-body:opacity-100">
                                <a target="_blank" className="group/link-new inline-flex cursor-pointer items-center transition gap-0.5 hover:text-emerald-400 hover:underline" href="https://latency.upstash.io">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 stroke-mybg fill-mybg h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
                                </a>
                            </span>
                        </h4>
                        <h1 className="text-6xl whitespace-nowrap font-semibold text-mybg my-8">
                            Rust, <br />
                            Kafka <br />
                            WebSockets
                        </h1>
                        <p className="mt-2 opacity-40 md:mt-3">
                            Benefit from performance optimizations and best practices implemented in Rust, ensuring efficient resource utilization and optimal responsiveness under heavy load.
                        </p>
                    </header>
                </div>

                <div className="group/box-body  md:-mt-[32%] relative z-0 grid gap-6 p-6 md:gap-8 md:p-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl overflow-hidden md:col-span-2">
                    <header className="relative z-20">
                        <h4 className="flex items-center gap-2 font-display text-xl font-semibold md:text-2xl">
                            Where can you use Ignition
                            <span className="inline-flex translate-y-1/4 text-emerald-400 opacity-0 transition group-hover/box-body:translate-y-0 group-hover/box-body:opacity-100">
                                <a target="_blank" className="group/link-new inline-flex cursor-pointer items-center transition gap-0.5 hover:text-emerald-400 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-8 stroke-mybg h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
                                </a>
                            </span>
                        </h4>
                        <div className="mt-6 md:mt-8">
                            {
                                useCases.map((useCase, index) => <div className="bg-mybg text-black cursor-pointer flex items-center justify-between
                            rounded-xl w-11/12 p-2 text-right m-2 text-xl shadow-[inset_0_0_0_0_#D80286]" key={index}>
                                    <svg className="w-6 h-6 stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    {useCase}
                                </div>
                                )}
                        </div>
                    </header>


                </div>

                <div className="group/box-body relative z-0 grid gap-6 p-6 md:gap-8 md:p-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl overflow-hidden md:col-span-3">
                    <header>
                        <h4 className="flex items-center gap-2 font-display text-xl font-semibold md:text-2xl">
                            Flexible Pricing
                            <span className="inline-flex translate-y-1/4 text-emerald-400 opacity-0 transition group-hover/box-body:translate-y-0 group-hover/box-body:opacity-100">
                                <a target="_blank" className="group/link-new inline-flex cursor-pointer items-center transition gap-0.5 hover:text-emerald-400 hover:underline" href="https://latency.upstash.io">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-mybg h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                                </a>
                            </span>
                        </h4>
                        <p className="mt-6 opacity-40 md:mt-8 text-xl">
                            We got plans to suit all your needs, use Ignition for free with our Free Forever plan,
                            upgrade according to your requirements, downgrade or cancel anytime.
                        </p>
                        <section className="flex flex-wrap items-center justify-center gap-4 mt-8">
                            {
                                plans.map((plan, id) => <button key={id} className="group/but1 flex flex-col items-start gap-2 rounded-xl
                            py-4 px-6 text-left bg-black">
                                    <span className="text-md font-medium">{plan[0]}</span>
                                    {/* <br/> */}
                                    <span className="text-2xl font-medium text-mybg">{plan[1]}$</span>
                                </button>)
                            }
                        </section>
                    </header>
                </div>
            </section>
        </>
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
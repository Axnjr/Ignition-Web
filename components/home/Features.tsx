import Link from 'next/link'
import React from 'react'
import { EvervaultCard } from '../ui/evervault-card'
import Counter from '../ui/Counter'

export default function Features() {
    return (
        <div className="flex flex-col items-center justify-end h-fit mt-12 pb-32">
            <div className="col-span-3 text-center">
                <div className="section-header-badge relative w-max rounded-full m-auto">
                    <div className="py-1 px-4 font-medium">
                        Why Ignition ?
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl mt-6 mb-5 md:w-[55%] m-auto 
						font-normal px-10 md:px-0">
                    Reliable and rediculously fast infrastructure, powered by Rust.
                </h1>
            </div>
            <section className="grid w-full lg:w-11/12 m-auto mt-14 h-fit grid-cols-3 px-8 py-4 gap-2">
                <div className="p-8 border border-myborder rounded-2xl h-full group/box-body relative col-span-3 lg:col-span-2 text-left ">
                    <h1 className="text-xl font-medium">Mean latency</h1>
                    <h1 className="text-mybg2 font-medium mt-3 leading-[1.4]">
                        Milliseconds Matter, Get the Speed You Need. Don't let slow updates and lagging
                        notifications hold your users back.
                    </h1>
                    <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="col-span-2 sm:col-span-1">
                            <div className="flex items-center w-full h-20 gap-2 my-2 border border-myborder rounded-lg p-2 flex-wrap overflow-x-hidden">
                                {
                                    [...Array(30).keys()].map((_, id) => <div key={id}
                                        className="w-2 h-full rounded-2xl bg-white/10 flex flex-col justify-end">
                                        <div style={{ height: Math.floor(Math.random() * 10) + 10 + "%" }} className="w-full rounded-2xl bg-mybg"></div>
                                    </div>)
                                }
                            </div>
                            <label className="text-xl">Dedicated Plan 5ms</label>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <div className="flex items-center w-full h-20 gap-2 my-2 border border-myborder rounded-lg p-2 flex-wrap overflow-hidden">
                                {
                                    [...Array(30).keys()].map((_, id) => <div key={id}
                                        className="w-2 h-full rounded-2xl bg-white/10 flex flex-col justify-end">
                                        <div style={{ height: (Math.floor(Math.random() * 120) + 100) / 2.6 + "%" }} className="w-full rounded-2xl bg-mybg"></div>
                                    </div>)
                                }
                            </div>
                            <label className="text-xl">Shared Plan 145ms</label>
                        </div>
                    </div>

                </div>
                <div className="col-span-3 md:col-span-2 lg:col-span-1 p-8 border border-myborder rounded-2xl
						 h-full group/box-body relative text-left">
                    <h1 className="text-xl font-medium">Uptime</h1>
                    <h1 className="text-xl text-neutral-500">robust reliable infrastructure</h1>
                    <h1 className="text-9xl bg-gradient-to-tr from-mybg via-indigo-400 from-50% to-blue-500 bg-clip-text text-transparent text-right md:text-right lg:text-center">
                        {">"}<Counter value={99} /><span className="text-3xl">%</span>
                    </h1>
                </div>
                <EvervaultCard className="col-span-3 md:col-span-1 lg:col-span-1 border border-myborder rounded-2xl text-left h-64 md:h-full lg:h-[90%]">
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
                <Link href="/pricing" className="col-span-3 lg:col-span-2 border border-myborder rounded-2xl text-left h-full lg:h-[90%] p-8">
                    <h1 className="text-xl font-medium">Scalable Pricing</h1>
                    <h1 className="text-lg text-neutral-500 mt-2">
                        Start free, then only pay for what you use with duration based metered shared pricing plan, or
                        take complete control and use without any limitations with our dedicated & enterprize plans.
                    </h1>
                    <div className="flex items-center justify-around mt-10">
                        <div className="rounded-lg border border-myborder p-4 w-44">
                            <span className="text-base text-zinc-200">Clients</span>
                            <h1 className="text-4xl text-mybg">100</h1>
                        </div>
                        <div className="rounded-lg border border-myborder p-4 w-44">
                            <span className="text-base text-zinc-200">Duration</span>
                            <h1 className="text-4xl text-mybg">1hour</h1>
                        </div>
                        <div className="rounded-lg border border-myborder p-4 w-44">
                            <span className="text-base text-zinc-200">Cost</span>
                            <h1 className="text-4xl text-green-500">0.05$</h1>
                        </div>
                    </div>
                </Link>
            </section>
        </div>
    )
}

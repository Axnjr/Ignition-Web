import { Tabs, TabsTrigger, TabsContent, TabsList } from "../ui/Tabs";
import Button from "./Button";
import SDK from "./SDK"
import { useState } from 'react';
import { GitHubLogoIcon, PersonIcon } from "@radix-ui/react-icons";

const sdks = [
    "javascript",
    "python",
    "go",
    "java",
    "bash",
    "rust",
]

export default function Stacks() {

    // const [sdkState, setSDK] = useState(sdks[0])

    // function changeSdk(newSdk: string) {
    //     setSDK(newSdk);
    // }

    return (
        <div className="min-h-screen mt-40 w-11/12 my-16 rounded-lg m-auto relative h-full
        gap-14 text-center backdrop-blur-2xl bg-black  border border-neutral-800">
            <div className="h-14 w-full border-b border-neutral-800 flex items-center justify-between pr-2">
                <h1 className="text-left mx-16 text-xl font-semibold">Live Playground</h1>
                <input className=" bg-transparent h-10 rounded-lg pl-4 outline-none border border-myborder" type="text" placeholder="Enter your Name .."/>
            </div>
            <Tabs className="ml-14 w-[95%] h-screen " defaultValue="preview">
                <TabsList className=" absolute -top-14 right-4 bg-neutral-900 mt-1 rounded-lg" defaultValue="preview">
                    <TabsTrigger className="text-base" value="preview">Preview</TabsTrigger>
                    <TabsTrigger className="text-base" value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="w-full h-full p-6">

                    <section className="flex items-center justify-between gap-5 h-[30%] ">
                        <div className="w-1/3 h-fit py-2 rounded-xl border border-myborder p-4 text-left">
                            <div aria-label="live_users" className="flex items-center justify-between px-2 py-3">
                                <div>
                                    <h1 className="text-base text-neutral-50 tracking-tight font-medium text-left">
                                        <span className="text-green-500">●</span> &nbsp; Live Users
                                    </h1>
                                    <p className="text-xs mt-1 text-neutral-500 text-left">Total users currently viweing ignition site.</p>
                                </div>
                                <h1 className="text-7xl font-black tracking-tight">893</h1>
                            </div>
                        </div>
                        <div className="w-1/3 h-fit py-2 rounded-xl border border-myborder p-4 text-left">
                            <div aria-label="live_users" className="flex items-center justify-between px-2 py-3">
                                <div>
                                    <h1 className="text-base text-neutral-50 tracking-tight font-medium text-left">
                                        <span className="text-red-500">●</span> &nbsp; Room Size
                                    </h1>
                                    <p className="text-xs mt-1 text-neutral-500 text-left">Total users currently in the chat.</p>
                                </div>
                                <h1 className="text-7xl font-black tracking-tight">67</h1>
                            </div>
                        </div>
                        <div className="w-1/3 h-fit py-2 rounded-xl border border-myborder p-4 text-left">
                            <div aria-label="live_users" className="flex items-center justify-between px-2 py-3">
                                <div>
                                    <h1 className="text-base text-neutral-50 tracking-tight font-medium text-left">
                                        <span className="text-blue-500">●</span> &nbsp; Reactions
                                    </h1>
                                    <p className="text-xs mt-1 text-neutral-500 text-left">Total users currently in the chat.</p>
                                </div>
                                <h1 className="text-7xl font-black tracking-tight">5k</h1>
                            </div>
                        </div>
                    </section>

                    <section className="flex items-start py-4 justify-between gap-5 h-[70%] w-full">
                        <div className="w-1/2 h-full border bg-white/5 border-myborder rounded-lg">
                            
                        </div>
                        <div className="w-1/2 h-full border border-myborder rounded-lg">

                        </div>
                    </section>

                </TabsContent>
            </Tabs>
            <div className="absolute top-0 left-0 w-12 h-full border-r border-myborder flex flex-col items-center 
            justify-between pt-4">
                <svg className="w-7 h-7 rounded-md border border-neutral-800 p-1 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                <div className="flex flex-col items-center gap-3">
                    <button className="p-1 rounded-lg border border-myborder hover:animate-bounce">🤘</button>
                    <button className="p-1 rounded-lg border border-myborder hover:animate-bounce">🚀</button>
                    <button className="p-1 rounded-lg border border-myborder hover:animate-bounce">🤗</button>
                    <button className="p-1 rounded-lg border border-myborder hover:animate-bounce">👀</button>
                    <button className="p-1 rounded-lg border border-myborder hover:animate-bounce">✌️</button>
                    <button className="p-1 rounded-lg border border-myborder hover:animate-bounce">⭐</button>
                </div>
                <div className="flex flex-col items-center gap-3 pb-4">
                    <svg className="w-7 h-7 rounded-lg p-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <svg className="w-7 h-7 rounded-lg p-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    <GitHubLogoIcon className="w-7 h-7 rounded-lg p-1" />
                </div>
            </div>
        </div>
    )
}


/**
 * <div className="min-h-screen mt-32 w-full m-auto flex flex-col items-center gap-14 p-8 text-center pb-32">
            <div className="flex flex-col items-center justify-center w-full md:w-2/3">
                <h1 className="text-[2.5rem] md:text-6xl leading-[1] tracking-tight font-medium">
                    Seemlessly <span className="text-mybg">Integrate</span> with your project in each stack
                </h1>
                <p className="my-8 text-xs sm:text-lg text-neutral-500">
                    A simple, elegant interface so you can start publishing & reciving messages in minutes.
                    It fits right into your code with SDKs for your favorite programming languages.
                </p>
                <div className="w-full flex overflow-x-scroll sm:overflow-hidden items-center gap-0 sm:gap-5 p-4 rounded-2xl">
                    {
                        sdks.map((sdk, id) => <Button key={id} text={sdk} varient={sdkState == sdks[id] ? "filled" : "outline"} 
                            onClick={() => changeSdk(sdks[id])} 
                        className="cursor-pointer px-6 rounded-xl capitalize text-lg " />)
                    }
                </div>
            </div>
            <SDK sdk={sdkState} />
        </div>
 */
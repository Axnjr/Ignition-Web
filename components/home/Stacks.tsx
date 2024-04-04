"use client";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "../ui/Tabs";
import SDK from "./SDK"
import { useState } from 'react';
import { GitHubLogoIcon, RocketIcon } from "@radix-ui/react-icons";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/Select"
import { Button } from "../ui/Button";



const groups = [
    "Emails",
    "Work Updates",
    "Family Group",
    "Gaming Clan",
    "Social",
    "Work",
    "Personal",
    "Financial",
    "Education",
    "Sports",
    "Entertainment",
    "Lifestyle",
    "Billing Alert",
    "Action Required",
    "News",
    "Weather",
    "Server Events",
    "System Errors"
]

interface Play {
    group: string,
    message: string
}

const play: Play[] = [
    {
        group: "Emails Feed",
        message: "Sick bro !!"
    },
    {
        group: "Work Updates",
        message: "All tasks completed ahead of schedule."
    },
    {
        group: "Family Group",
        message: "Don't forget grandma's birthday this Sunday!"
    },
    {
        group: "Gaming Clan",
        message: "Raid night moved to 8 PM. Be there or be square."
    },
    {
        group: "Neighborhood Watch",
        message: "Suspicious activity reported near the park. Stay alert."
    },
    {
        group: "Fantasy Football",
        message: "Reminder: Draft day is this Saturday at noon. Don't be late."
    },
]

export default function Stacks() {

    

    const [playState, setPlayState] = useState<Play[]>(play)
    const [groupState, setGroup] = useState("News");
    const [message, setMessage] = useState("Hello");

    return (
        <div className="h-fit py-32 bg-black">
            <Tabs className="w-full h-fit relative text-center" defaultValue="preview">
                <TabsList className="mt-1 rounded-lg inline-block bg-neutral-900 relative" defaultValue="preview">
                    <div className='absolute top-0 flex w-full justify-center'>
                        <div className='left-0 h-[2px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all w-[150px]' />
                    </div>
                    <TabsTrigger className="text-base capitalize" value="preview">Ignition in action</TabsTrigger>
                    <TabsTrigger className="text-base capitalize" value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="w-full h-full p-6 bg-black relative">
                    <section className="w-10/12 m-auto">
                        <div className="flex items-center w-full bg-gradient-to-b from-neutral-800 to-neutral-950 gap-2 border border-myborder rounded-xl justify-center px-2 py-3">
                            <Select onValueChange={(item) => {
                                setGroup(prev => item);
                            }}>
                                <SelectTrigger className="w-[15%] border border-myborder bg-black">
                                    <SelectValue placeholder="Groups" />
                                </SelectTrigger>
                                <SelectContent className="text-white border border-myborder z-50">
                                    {
                                        groups.map((item, index) => <SelectItem key={index} value={item}>{item}</SelectItem>)
                                    }
                                </SelectContent>
                            </Select>
                            <input onChange={(e) => setMessage(e.target.value)} className="w-[75%] h-10 px-4 rounded-lg outline-none border border-myborder bg-black" placeholder="Type your message .." type="text" />
                            <span onClick={() => {
                                setPlayState(prev => [{ group: groupState, message: message }, ...prev.slice(0, prev.length)])
                            }}
                                className='inline-flex h-full animate-background-shine cursor-pointer items-center 
                            justify-center rounded-xl border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] 
                            bg-[length:250%_100%] px-4 py-2 text-sm font-medium text-gray-300'>
                                <RocketIcon className="mr-2" /> Send
                            </span>
                        </div>
                        <div className="flex flex-col justify-start items-center pt-2 border border-myborder rounded-xl
                         overflow-y-hidden h-[60vh] mt-2 bg-gradient-to-b from-neutral-900 to-neutral-950 w-full relative shadow-2xl shadow-mybg">
                            {
                                playState.map((item, index) => <div className="text-base my-2 text-left font-medium text-neutral-600 
                                    w-full px-4 p-1 border-b border-myborder flex items-center justify-between" key={index}>
                                    <div className="w-[30%] lg:w-[20%]">
                                        <span className="p-1 bg-green-500/10 text-sm text-green-500 rounded-lg">
                                            Group
                                        </span>&nbsp; {item.group.length > 12 ? item.group.slice(0, 12) + ".." : item.group}
                                    </div>
                                    <div className="w-[70%] lg:w-[60%] text-left flex items-center justify-start">
                                        <span className="p-1 bg-blue-500/10 text-sm text-blue-500 rounded-lg">
                                            Message
                                        </span>
                                        &nbsp; {item.message.length > 60 ? item.message.slice(0, 60) + ".." : item.message}
                                    </div>
                                    <div className="hidden lg:flex w-[20%] text-left items-center justify-start">
                                        <span className="p-1 bg-fuchsia-500/10 text-sm text-fuchsia-500 rounded-lg">
                                            Event
                                        </span>
                                        &nbsp; Public Room
                                    </div>
                                </div>)
                            }
                            <div className="w-full absolute bottom-0 h-10 bg-gradient-to-b from-neutral-950 via-black to-black blur"></div>
                        </div>
                    </section>
                </TabsContent>
                <TabsContent value="code" className="w-full h-full p-6 bg-gray-200">

                </TabsContent>
            </Tabs>
        </div>
    )
}













































/**
 * 
 * <section className="flex items-center justify-between gap-5 h-[30%] ">
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
                                            <p className="text-xs mt-1 text-neutral-500 text-left">Total public reactions past one day.</p>
                                        </div>
                                        <h1 className="text-7xl font-black tracking-tight">5k</h1>
                                    </div>
                                </div>
                            </section>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * <section className="flex items-start py-4 justify-between gap-5 h-[70%] w-full">
                                <div className="w-1/2 h-full border border-myborder rounded-lg px-4 py-6 text-left relative">
                                    <label>Your Name</label>
                                    <input className="h-10 rounded-lg pl-4 outline-none border border-myborder
                                w-full m-1 my-3 bg-transparent" type="text" placeholder="Radhika"
                                        onClick={(e) => { setName(e.currentTarget.value) }} />
                                    <label className="my-2">Status</label>
                                    <Select>
                                        <SelectTrigger className="w-full border border-myborder mt-3 ml-1 h-10">
                                            <SelectValue placeholder="Busy" />
                                        </SelectTrigger>
                                        <SelectContent className="text-white border border-myborder z-50">
                                            <SelectItem value="light">Busy</SelectItem>
                                            <SelectItem value="dark">~ Sleeping</SelectItem>
                                            <SelectItem value="system">Coding</SelectItem>
                                            <SelectItem value="spiritual">Spiritual</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <br />
                                    <label className="mt-12">Content</label>
                                    <input className="w-full h-10 my-2 mx-1 outline-none bg-transparent border border-myborder rounded-lg
                                px-4 py-3" placeholder="Type your message here .." />
                                    <button className="bg-white text-black p-2 rounded-lg absolute right-2 mt-3">Send message</button>
                                </div>
                                <div className="w-1/2 h-full border-myborder rounded-lg text-center py-2 overflow-y-hidden relative">
                                    {
                                        play.map((item, index) => <div key={index} className="w-11/12 h-10 rounded-xl inline-block border 
                                    border-myborder m-1 p-2 bg-black">
                                            <div className="flex w-full items-center justify-between">
                                                <span className=" capitalize">{item.name} - {item.status}</span>
                                                {/* <span>{item.status}</span> 
                                                <p className="text-left">{item.message.slice(0, 50)}</p>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </section>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * <div className="absolute top-0 left-0 w-12 h-full border-r border-myborder flex flex-col items-center 
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
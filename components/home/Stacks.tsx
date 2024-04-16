"use client";
import { useEffect, useState } from 'react';
import { RocketIcon } from "@radix-ui/react-icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/Select"
import { play, groups } from "../constants";
import { Ignition } from 'ignition-js-sdk';

export default function Stacks() {

    const wsClient = new Ignition("abc123", "ws://localhost:4000");

    useEffect(() => {
        wsClient.on("connect", () => {
            console.log("connected")
            wsClient.subscribe("ignition-site-room")
        })

        wsClient.on("new public message", async (data) => {
            try {
                setPlayState(prev => [...[JSON.parse(data)], ...prev.slice(0, prev.length)])
            } catch (error) {
                console.log(error)
            }
            console.log("New public message: ",JSON.parse(data))
        })

        return () => {
            wsClient.off("connect")
            wsClient.off("new public message")
        }
    }, [])

    const [playState, setPlayState] = useState(play)
    const [groupState, setGroup] = useState("News");
    const [message, setMessage] = useState("Hello");

    return (
        <div className="h-fit py-32">
            <div className="w-full h-fit relative text-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium mt-20 w-fit md:px-10 py-6 rounded-3xl 
                m-auto text-white tracking-tight ">
                    Real quick, easy, fast
                </h1>
                <p className="text-lg md:text-xl text-mybg2 w-11/12 md:w-2/3 m-auto">
                    Below is public ignition room you can play with, duplicate the tab to see it in action.
                </p>
                <div className="w-full h-full p-6 bg-black relative">
                    <section className="w-full m-auto relative pt-12">
                        <div className='absolute top-4 right-0 left-0 flex w-full justify-center'>
                            <div className='left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-mybg to-[rgba(17,17,17,0)] transition-all w-[300px]' />
                        </div>
                        <div className="flex items-center w-full md:w-10/12 m-auto gap-2 rounded-xl justify-center px-2 py-3">
                            <Select onValueChange={(item) => {
                                setGroup(prev => item);
                            }}>
                                <SelectTrigger className="hidden sm:flex w-[15%] border border-myborder bg-black h-12">
                                    <SelectValue placeholder="Groups" />
                                </SelectTrigger>
                                <SelectContent className="text-white border border-myborder z-50">
                                    {
                                        groups.map((item, index) => <SelectItem key={index} value={item}>{item}</SelectItem>)
                                    }
                                </SelectContent>
                            </Select>
                            <input onChange={(e) => setMessage(e.target.value)} className="w-full sm:w-[75%] h-12 px-4 rounded-lg outline-none border border-myborder bg-black" placeholder="Type your message .." type="text" />
                            <span onClick={() => {
                                // setPlayState(prev => [{ group: groupState, message: message }, ...prev.slice(0, prev.length)])
                                wsClient.emit("new public message", "ignition-site-room", JSON.stringify({
                                    group: groupState,
                                    message: message
                                }))
                            }}
                                className='inline-flex h-12 animate-background-shine cursor-pointer items-center 
                            justify-center rounded-xl border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] 
                            bg-[length:250%_100%] px-4 py-2 text-sm font-medium text-gray-300'>
                                <RocketIcon className="mr-2" /> Send
                            </span>
                        </div>
                        <div className="flex flex-col justify-start items-center pt-2 border border-myborder rounded-xl w-full md:w-10/12
                         overflow-y-hidden h-[55vh] sm:h-[60vh] mt-2 bg-gradient-to-b from-gray-950 to-black m-auto relative shadow-2xl shadow-mybg">
                            {
                                playState.map((item, index) => <div className="text-base my-2 text-left font-medium text-neutral-600 
                                    w-full px-4 p-1 border-b border-myborder flex items-center justify-between" key={index}>
                                    <div className="w-[30%] lg:w-[20%] hidden sm:block ">
                                        <span className="p-1 bg-green-500/10 text-sm text-green-500 rounded-lg">
                                            Group
                                        </span>&nbsp; {item.group.length > 12 ? item.group.slice(0, 12) + ".." : item.group}
                                    </div>
                                    <div className="w-full sm:w-[70%] lg:w-[60%] text-left flex items-center justify-start sm:justify-end 
                                    md:justify-start whitespace-nowrap overflow-x-scroll">
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
                            <div className="w-full absolute -bottom-2 h-10 bg-gradient-to-b from-neutral-950 to-black blur-lg"></div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
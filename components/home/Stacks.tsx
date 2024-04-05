"use client";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "../ui/Tabs";
import { useState } from 'react';
import { RocketIcon } from "@radix-ui/react-icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/Select"
import { play, groups } from "../constants";

export default function Stacks() {

    const [playState, setPlayState] = useState(play)
    const [groupState, setGroup] = useState("News");
    const [message, setMessage] = useState("Hello");

    return (
        <div className="h-fit py-32 bg-black">
            <Tabs className="w-full h-fit relative text-center" defaultValue="preview">
                {/* <h1 className="text-9xl font-bold my-20 bg-neutral-500/10 text-neutral-500 w-fit p-6 rounded-3xl 
                m-auto flex items-center">
                    <span className="text-green-500 text-7xl mr-3"> ● </span> 873
                </h1> */}
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
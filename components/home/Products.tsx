import React from 'react'
import { theme, syncCodeBlock } from "../constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { Highlight } from "prism-react-renderer"
import { Button } from '../ui/Button';

export default function Products() {
    return (
        <div className="h-fit w-full text-center py-24">
            <h1 className="text-2xl sm:text-4xl mt-20 mb-10 tracking-tight px-14">Easy solutions to complex engineering problems</h1>
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
                <section className="mt-24 w-[96%] mx-auto h-fit
                rounded-t-[2.9rem] md:rounded-t-[3.5rem] lg:rounded-t-[5rem] py-28 bg-fancyflip">
                    <TabsContent value="sync" className="flex items-center justify-center  flex-col">
                        <div className="flex flex-col items-start sm:items-center justify-center h-[40vh] md:h-[55vh] md:w-2/3 px-10">
                            <h1 className="text-5xl lg:text-6xl tracking-tight text-left sm:text-center">
                                Sync peice of data across millions of devices
                            </h1>
                            <br />
                            <p className="text-left sm:text-center text-lg">
                                Synconized music, screens, analytics, cursors, collbarating tools
                            </p>
                            <br />
                            <div className="flex items-center gap-2">
                                <Button>Read Docs</Button>
                                <Button variant="outline">Check examples</Button>
                            </div>
                        </div>
                        <div className="w-full sm:w-11/12 lg:w-8/12 h-[55vh] mt-24 sm:mt-12 px-6">
                            <Highlight theme={{ ...theme }} code={syncCodeBlock} language="tsx" >
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <pre className="py-4 px-2 rounded-xl text-left overflow-x-scroll" style={style}>
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
                    <TabsContent value="stream" className="flex items-center justify-center  flex-col">
                        <div className="flex flex-col items-center justify-center h-[55vh] w-2/3 ">
                            <h1 className="text-6xl tracking-tight">
                                Stream large data in real time
                            </h1>
                            <br />
                            <p className="text-lg">
                                Chat apps, file sharing, AI output streaming, dashboard analytics, etc.
                            </p>
                            <br />
                            <div className="flex items-center gap-2">
                                <Button>Read Docs</Button>
                                <Button variant="outline">Check examples</Button>
                            </div>
                        </div>
                        <div className="w-8/12 h-[55vh] mt-12">
                            <Highlight theme={{ ...theme }} code={syncCodeBlock} language="tsx" >
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
                    <TabsContent value="notify" className="flex items-center justify-center  flex-col">
                        <div className="flex flex-col items-center justify-center h-[55vh] w-2/3 ">
                            <h1 className="text-6xl tracking-tight">
                                Deliver notifications to devices on specific events
                            </h1>
                            <br />
                            <p className="text-lg">
                                In app updates,
                            </p>
                            <br />
                            <div className="flex items-center gap-2">
                                <Button>Read Docs</Button>
                                <Button variant="outline">Check examples</Button>
                            </div>
                        </div>
                        <div className="w-8/12 h-[55vh] mt-12">
                            <Highlight theme={{ ...theme }} code={syncCodeBlock} language="tsx" >
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
                </section>
            </Tabs>
        </div>
    )
}
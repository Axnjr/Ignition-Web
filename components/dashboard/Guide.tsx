"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs'
import { pubSdkCodes, subSdkCodes } from '../home/codes'
import { Highlight } from "prism-react-renderer"
import { useState } from 'react'
import { Button } from '../ui/Button';
import { theme } from '../constants';

const sdks = [
    "javascript",
    "python",
    "go",
    "java",
    "bash",
    "rust",
]

export default function Guide() {

    const [sdk, setSdk] = useState("pub")

    return (
        <section className='flex items-start justify-between'>
            <Tabs defaultValue="javascript" className="w-full ">
                <TabsList className="bg-neutral-50 w-full mb-4 dark:bg-neutral-950 text-black dark:text-white">
                    <div>
                        <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                        <TabsTrigger value="react">React</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="rust">Rust</TabsTrigger>
                        <TabsTrigger value="go">Golang</TabsTrigger>
                        <TabsTrigger value="java">Java</TabsTrigger>
                        <TabsTrigger value="bash">No SDK</TabsTrigger>
                    </div>
                    <div>
                        <Button className='rounded-lg mx-1' variant={sdk == "pub" ? "default2" : "ghost"} onClick={() => setSdk("pub")}>Publish</Button>
                        <Button className='rounded-lg mx-1' variant={sdk == "sub" ? "default2" : "ghost"} onClick={() => setSdk("sub")}>Subscribe</Button>
                    </div>
                </TabsList>
                {
                    sdks.map((lang, id) => {
                        return <>
                            <TabsContent key={id} value={lang}>
                                <Highlight theme={{
                                    plain: {
                                        color: "#fff",
                                        backgroundColor: "#000",
                                    }, ...theme
                                }} code={sdk == "pub" ? pubSdkCodes?.get(lang) as string : subSdkCodes.get(lang) as string} language={lang} >
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
                            </TabsContent>
                        </>
                    })
                }
            </Tabs>



        </section>
    )
}


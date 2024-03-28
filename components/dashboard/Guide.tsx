"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs'
import { pubSdkCodes, subSdkCodes } from '../home/codes'
import { useState } from 'react'
import Button from '../home/Button';

function getTokenStyle(token: string) {
    switch (token) {
        case "import":
        case "from":
        case "as":
        case "use":
        case "import ":
        case "main":
            return "text-sky-500"
        ;

        case "(":
        case ")":
        case "=":   
        case "{":
        case "}":
        case ';':
            return "text-[#ff6b6b]"
                ;

        case "new":
        case " const ":
        case 'Ignition("':
        case "ignition_sdk::Ignition;":
        case '"ignition_sdk"; ':
        case "package":
            return "text-[#ffe45f]"
                ;

        case "Ignition":
            return "text-[#1af1a]"
                ;



        default:
            return "text-neutral-400";
    }
}

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
                        <Button onClick={() => setSdk("pub")} varient={sdk == "pub" ? "filled" : "normal"} text='Publish'/>
                        <Button onClick={() => setSdk("sub")} varient={sdk == "sub" ? "filled" : "normal"} text='Subscribe' />
                    </div>
                </TabsList>

                {
                    sdks.map((lang,id) => { 
                        return <TabsContent key={id} className='font-mono font-thin' value={lang}>
                            <pre className='bg-neutral-950 px-6 py-4 rounded-xl text-white'>
                                <code>{
                                sdk == "pub" ? pubSdkCodes.get(lang)!.split(" ").map((word, i) => {
                                    return <span key={i} >{word} </span>
                                })
                                    :
                                subSdkCodes.get(lang)!.split(" ").map((word, i) => {
                                    return <span key={i} >{word} </span>
                                })
                                }</code>
                            </pre>
                        </TabsContent> 
                    })
                }
            </Tabs>

           

        </section>
    )
}


"use client"
import { CopyBlock, anOldHope } from 'react-code-blocks';

const sdkCodes = new Map([
    ["javascript", `import Ignition from "ignition-sdk";

const publisher = new Ignition(apiKey: "2qw3e4r5t6y78u"); 
publisher.spark(
    group_id: "wsed5r6ftg7y8h",
    event_name: "message",
    message: JSON.Stringify({ 
        Mes: 'THIS IS A MESSAGE',
        TimeStamp: "28/4/24"
    })
);    
    `]
])

export default function SDK({ sdk } : { sdk : string }) {

    

    return (
        <div className="w-11/12 h-screen rounded-2xl border border-myborder flex items-center">

            <div className="w-1/2 h-full border-r border-myborder text-left">
                <CopyBlock
                    text={sdkCodes.get(sdk)!}
                    theme={anOldHope}
                    language={sdk}
                    showLineNumbers={true}
                    wrapLongLines
                />
            </div>

        </div>
    )
}

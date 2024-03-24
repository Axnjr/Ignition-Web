import { CopyBlock } from 'react-code-blocks';
import { isMobile } from 'react-device-detect';

const codeTheme = {
    backgroundColor: `#000`,
    textColor: `#fff`,
    substringColor: `#0d0d0d`,
    keywordColor: `#6599FF`,
    codeColor: `#f0f0f0`,
    stringColor: `#FA91FC`,
    commentColor: `#383c41`,
    functionColor: `#a1feff`,
    numberColor: `#ffffff`,
}

const pubSdkCodes = new Map([

    ["javascript",
        `import Ignition from "ignition-sdk";

const publisher = new Ignition("2qw3e4r5t6y78u");
 
publisher.spark(
    "wsed5r6ftg7y8h", // group_id
    "message",        // event_name
    message: JSON.Stringify({ 
        Mes: 'THIS IS A MESSAGE',
        TimeStamp: "28/4/24"
    })
);`],

    ["python",
        `import ignition-sdk

publisher = Ignition(apiKey="2qw3e4r5t6y78u")

mes = {
    "Mes": 'THIS IS A MESSAGE',
    "TimeStamp": "28/4/24"
}

publisher.spark(
    "wsed5r6ftg7y8h", # group_id
    "message", # event_name
    mes # message
)`],

    ["go",
        `package main

import (
    "github.com/go-ignition-sdk"
)

func main() {
	apiKey := "2qw3e4r5t6y78u"

	publisher := Ignition{APIKey: apiKey}

	message := map[string]interface{}{
		"Mes":       "THIS IS A MESSAGE",
		"TimeStamp": "28/4/24",
	}

	publisher.spark(
		groupID:    "wsed5r6ftg7y8h",
		eventName:  "message",
		message:    message,
	)
}
`],

    ["java",
        `

`],

    ["bash",
        `curl -X POST 'https://api.ignition.dev/spark' 
-H 'Authorization: Bearer 2qw3e4r5t6y78u' 
-H 'Content-Type: application/json' 
-d $'{
  "group_id": "wsed5r6ftg7y8h",
  "event_name": "message",
  "message": "Come over !"
}'`],

    ["rust",
        `use ignition_sdk::Ignition;

struct Message {
    mes: String,
    timeStamp: String,
}

fn main() {
    let publisher = Ignition::new("2qw3e4r5t6y78u");
    
    let message = Message {
        mes: "THIS IS A MESSAGE",
        timeStamp: "28/4/24",
    }

    publisher.spark(
            "wsed5r6ftg7y8h", 
            "message", 
            message
    )
    .await;
};`]

]);

const subSdkCodes = new Map([
    ["javascript",
        `import Ignition from "ignition-sdk";

const subscriber = new Ignition("2qw3e4r5t6y78u");

subscriber.listen(group_id: "wsed5r6ftg7y8h")

subscriber.on("message", (data) => {

    // handle the event ..
    console.log(data);

});`],

    ["python",
        `import ignition-sdk

subscriber = Ignition(apiKey="2qw3e4r5t6y78u")

subscriber.listen(group_id="wsed5r6ftg7y8h")

subscriber.on("message", lambda data: print(data))
`],

    ["go",
        `package main

import (
    "fmt"
    "github.com/go-ignition-sdk"
)

func main() {
    apiKey := "2qw3e4r5t6y78u"
    groupID := "wsed5r6ftg7y8h"

    subscriber := Ignition(apiKey)

    subscriber.Listen(groupID)

    handleMessage := func(data interface{}) {
        fmt.Println(data)
    }

    subscriber.On("message", handleMessage)
}`],

    ["java",
        `

`],

    ["bash",
        `# You can check for messages by making a get request
# for reciving real time updates you will need to use
# an SDK

curl -X GET 'https://api.ignition.dev/listen?apikey=
2qw3e4r5t6y78u' 
`],

    ["rust",
        `use ignition_sdk::Ignition;

struct Message {
    mes: String,
    timeStamp: String,
}

fn main() {
    let subscriber = Ignition::new("2qw3e4r5t6y78u");

    subscriber.listen("wsed5r6ftg7y8h");

    subscriber.on("message", |data: Message| {
        println!("Recived some updates: {:#?}", data);

        // handle the event ..
    });

    // your code ..
}

`]

]);

export default function SDK({ sdk }: { sdk: string }) {
    return (
        // shadow-[0px_0px_80px_1px_#FAEEFC]
        <div className="w-full md:w-11/12 h-fit shadow-[0_20px_50px] shadow-mybg mt-6 
        rounded-2xl bg-black border-2 border-neutral-700 backdrop-blur-sm flex flex-col md:flex-row
        items-start px-2 py-0">

            <div className="w-full md:w-1/2 h-full sm:border-r-2 border-neutral-800 text-left">
                <div className='text-xl p-4 font-medium tracking-normal capitalize text-center w-full border-b border-neutral-800'>Publish events</div>
                <div className='text-xs md:text-base py-4 md:pt-0'>
                    <CopyBlock
                        text={pubSdkCodes.get(sdk)!}
                        wrapLongLines
                        language={sdk}
                        showLineNumbers={isMobile ? false : true}
                        // @ts-ignore
                        theme={codeTheme}
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 h-full text-left rounded-2xl">
                <div className='text-xl p-4 font-medium tracking-normal capitalize text-center w-full border-y border-neutral-800'>Subscribe to events</div>
                <div className='text-xs md:text-base pt-4 md:pt-0'>
                    <CopyBlock
                        text={subSdkCodes.get(sdk)!}
                        wrapLongLines
                        language={sdk}
                        showLineNumbers={isMobile ? false : true}
                        // @ts-ignore
                        theme={codeTheme}
                    />
                </div>
            </div>

        </div>
    )
}
import { CheckIcon } from '@radix-ui/react-icons'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs'
import { useState } from 'react'
import Button from './Button'
import * as Switch from '@radix-ui/react-switch';
import { LightningBoltIcon, CrossCircledIcon } from "@radix-ui/react-icons"

const sharedPlans = [
    {
        name: "Hobby",
        price: 0,
        request: "10K",
        conns: "20",
        support: "Standard",
        link: ["/signup", "Start Free"]
    },
    {
        name: "Pro",
        price: 25,
        request: "1M",
        conns: "1K",
        support: "Dedicated",
        link: ["/pricing?plan=pro", "Go Pro"]
    },
    {
        name: "StartUp",
        price: 50,
        request: "5M",
        conns: "5K",
        support: "Dedicated",
        link: ["/pricing?plan=pro+", "Get StartUp"]
    },
]

const dedicatedPlans = [
    {
        name: "Dedicated", // - M4.large | t3.medium | t2.large | t3.large | M6A.large -- ( MAX: 46$ , MIN: 21$ )
        price: 75,
        pros: [
            "No Request limit",
            "No Connection limit",
            "Can handle around 15M request daily with ease"
        ],
        cons: [
            "Auto Scaling",
            "Load Balancing"
        ],
        support: "End to End Complete",
        link: ["/pricing?plan=basic", "Get Dedicated VM"]
    },
    {
        name: "Dedicated +", // - M4.large | t3.medium | t2.large | t3.large | M6A.large -- ( MAX: 46$ , MIN: 21$ )
        price: 299,
        pros: [
            "No Request limit",
            "No Connection limit",
            "Can handle around 90M request daily with ease",
            "Auto Scaling",
            "Load Balancing"
        ],
        cons:[],
        support: "End to End Complete",
        link: ["/pricing?plan=basic", "Get Dedicated+ VM"]
    },
]

export default function Pricing() {

    const [annaul, setAnnual] = useState(false)

    return (
        <div className="h-fit pb-32 my-2 overflow-hidden w-[99%] border-t border-neutral-700 pt-32 rounded-lg m-auto relative text-center">
            <div className='absolute top-0 right-0 left-0 flex w-full justify-center'>
                <div className='left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-mybg to-[rgba(17,17,17,0)] transition-all w-[300px]' />
                <div className="conic_line -top-1 left-1/2 h-[500px] w-full md:max-w-[800px] user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
            </div>
            <h4 className="text-7xl text-center font-medium">Pricing</h4>
            <p className="text-center text-xl text-mybg font-normal w-1/2 m-auto mt-5">
                Use for free, upgarde anytime, Switch between shared & dedicated plans according to your needs |
                <label> Annual Discount </label>
                <Switch.Root onCheckedChange={() => setAnnual(!annaul)} className="mt-2 inline-block w-8 h-4 bg-white rounded-full relative data-[state=checked]:bg-blue-500 outline-none cursor-default">
                    <Switch.Thumb className="block w-3 h-3 bg-black rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:bg-white data-[state=checked]:translate-x-[19px]" />
                </Switch.Root>
            </p>
            <Tabs className="w-full h-fit relative text-center" defaultValue="shared">
                <TabsList className="rounded-lg inline-block bg-gradient-to-b from-bg-neutral-900 to-black my-6">
                    <div className='border border-myborder p-2 rounded-xl'>
                        <TabsTrigger className="text-base capitalize" value="shared">Shared</TabsTrigger>
                        <TabsTrigger className="text-base capitalize" value="dedicated">Dedicated</TabsTrigger>
                    </div>

                </TabsList>

                <TabsContent className="grid grid-cols-3 place-items-start gap-6 mt-12 w-10/12 m-auto h-full pt-12" value="shared">
                    {
                        sharedPlans.map((item, index) => (
                            <div key={index} className="col-span-1 w-full h-fit border border-myborder rounded-xl p-8 text-center
						    bg-gradient-to-b from-neutral-950 to-black backdrop-blur transition hover:scale-[1.02] hover:bg-white/10">
                                <div className='absolute top-0 right-0 left-0 flex w-full justify-center'>
                                    <div className='left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-mybg to-[rgba(17,17,17,0)] transition-all w-[300px]' />
                                </div>
                                <h4 className="text-3xl text-left font-bold tracking-tight text-neutral-500">{item.name}</h4>
                                <h1 className="text-6xl text-left font-semibold my-2">
                                    ${annaul ? item.price * 10 : item.price}
                                    <span className='text-sm'>/ {annaul ? "year" : "month"} {annaul ? item.price * 12 : null}</span>
                                </h1>
                                <ul className="my-8 m-auto text-left flex flex-col items-start gap-2">
                                    <li className="text-lg text-neutral-500 font-medium">
                                        <CheckIcon className="inline-block w-5 h-5 mr-2 rounded-full bg-green-500 stroke-black stroke-[0.5]" /> <strong className='text-white'>{item.request}</strong> Request Per Day
                                    </li>
                                    <li className="text-lg text-neutral-500 font-medium">
                                        <CheckIcon className="inline-block w-5 h-5 mr-2 rounded-full bg-green-500 stroke-black stroke-[0.5]" /> <strong className='text-white'>{item.conns}</strong> Concurrent Connection
                                    </li>
                                    <li className="text-lg text-neutral-500 font-medium">
                                        <CheckIcon className="inline-block w-5 h-5 mr-2 rounded-full bg-green-500 stroke-black stroke-[0.5]" /> <strong className='text-white'>{item.support}</strong> Support
                                    </li>
                                </ul>
                                <Button className="w-11/12" varient="filled" text={item.link[1]} />
                            </div>
                        ))

                    }
                </TabsContent>

                <TabsContent className="grid grid-cols-2 place-items-start gap-6 mt-12 w-10/12 m-auto h-full" value="dedicated">
                    <p className='col-span-2 w-full my-4 flex items-center font-medium text-lg justify-center'>
                        <LightningBoltIcon className='w-5 h-5 mr-2' /> Own a server all for yourself, no Midlleware, no Rate Limit, Unlimited Connections.
                    </p>
                    {
                        dedicatedPlans.map((item, index) => (
                            <div key={index} className="col-span-1 w-full h-fit border border-myborder rounded-xl p-8 text-center
						    bg-gradient-to-b from-neutral-950 to-black backdrop-blur transition hover:scale-[1.02] hover:bg-white/10">
                                <div className='absolute top-0 right-0 left-0 flex w-full justify-center'>
                                    <div className='left-0 h-[1px] rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-mybg to-[rgba(17,17,17,0)] transition-all w-[300px]' />
                                </div>
                                <h4 className="text-3xl text-left font-bold tracking-tight text-neutral-500">{item.name}</h4>
                                <h1 className="text-6xl text-left font-semibold my-2">
                                    ${annaul ? item.price * 10 : item.price}
                                    <span className='text-sm'>/ {annaul ? "year" : "month"} {annaul ? item.price * 12 : null}</span>
                                </h1>
                                <ul className="my-8 m-auto text-left flex flex-col items-start gap-2">
                                    {
                                        item.pros.map((pro, index) => <li className="text-lg text-neutral-500 font-medium" key={index}>
                                            <CheckIcon className="inline-block w-5 h-5 mr-2 rounded-full bg-green-500 stroke-black stroke-[0.5]" /> {pro}
                                        </li>
                                    )}
                                    {
                                        item.cons.map((pro, index) => <li className="text-lg text-neutral-500 font-medium" key={index}>
                                             <CrossCircledIcon className="inline-block w-5 h-5 mr-2 rounded-full bg-red-500 stroke-black stroke-[0.5]" /> {pro}
                                        </li>
                                    )}
                                </ul>
                                <Button className="w-11/12" varient="filled" text={item.link[1]} />
                            </div>
                        ))

                    }
                </TabsContent>

            </Tabs>
        </div>
    )
}

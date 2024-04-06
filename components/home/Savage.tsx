import Counter from "../../components/ui/Counter";
import { PieChartIcon, BellIcon, Crosshair1Icon, ChatBubbleIcon, LightningBoltIcon, Pencil2Icon } from "@radix-ui/react-icons";

const use = [
    {
        icon: <PieChartIcon className="mr-2 text-white scale-[1.2] inline-flex"/>,
        tittle: "Dashboards",
        desc: "Make interactive dashboards and console with real time data feed for your users."
    },
    {
        icon: <BellIcon className="mr-2 text-white scale-[1.2] inline-flex"/>,
        tittle: "Notifications",
        desc: "Deliver informations where its required, in no time"
    },
    {
        icon: <Crosshair1Icon className="mr-2 text-white scale-[1.2] inline-flex"/>,
        tittle: "Location Streaming",
        desc: "Cab/taxis service, food delivery, maps, navigation all at any scale."
    },
    {
        icon: <ChatBubbleIcon className="mr-2 text-white scale-[1.2] inline-flex"/>,
        tittle: "Chat & live Reactions",
        desc: "Customer support, user feedbacks, chat apps, live emoji reactions."
    },
    {
        icon: <Pencil2Icon className="mr-2 text-white scale-[1.2] inline-flex"/>,
        tittle: "Collaberative Working",
        desc: "Make software where mutiple people collabarte & engage, with ease."
    },
    {
        icon: <LightningBoltIcon className="mr-2 text-white scale-[1.2] inline-flex"/>,
        tittle: "Gaming & edge Sync",
        desc: "Sync software, game states between multiple devices instantly."
    },
]

export default function Savage() {
    return (
        <section className='mt-96 min-h-[250vh] px-20 pt-28 place-content-center grid grid-cols-3 gap-8 place-items-center relative'>
            <div className="group/box-body relative col-span-1 rounded-lg text-left">
                <h1 className="text-9xl font-bold bg-gradient-to-t from-[#c7d2fe] to-mybg bg-clip-text text-transparent"><Counter value={5} /><span className="text-xl">MS</span></h1>
                <h1 className="text-xl font-medium ">Mean latency</h1>
                <h1 className="text-xl text-neutral-500">for users with dedicated plans</h1>
            </div>
            <div className="group/box-body relative col-span-1 rounded-lg text-center">
                <h1 className="text-9xl font-bold text-center bg-gradient-to-t from-[#c7d2fe] to-mybg bg-clip-text text-transparent"><Counter value={135} /><span className="text-xl">MS</span></h1>
                <h1 className="text-xl font-medium text-center">Mean latency</h1>
                <h1 className="text-xl text-neutral-500 ">for users with shared & hobby plans</h1>
            </div>
            <div className="group/box-body relative col-span-1 rounded-lg text-right">
                <h1 className="text-9xl font-bold bg-gradient-to-t from-[#c7d2fe] to-mybg bg-clip-text text-transparent"><Counter value={99} /><span className="text-xl">.99%</span></h1>
                <h1 className="text-xl font-medium text-right">Uptime</h1>
                <h1 className="text-xl text-neutral-500 text-right">Robust infrastructure</h1>
            </div>
            <p className="col-span-3 w-1/2 mt-40 mb-24 text-center text-3xl font-medium">
                Whatever your usecase be Ignition can help you improve your user expirence and customer satisfaction with easy integrations and flexible pricing.
            </p>
            <div className="w-full col-span-3 m-auto h-[2px] bg-gradient-to-r from-[#070713] from-25% via-mybg to-80% to-[#070713] mb-20"></div>
            {
                use.map((useCase, id) => <div key={id} className="col-span-1 text-left px-8 my-6">
                    <h5 className="text-neutral-500 leading-[1.5] text-lg">
                        {useCase.icon}
                        <strong className="text-white">{useCase.tittle}</strong> {useCase.desc}
                    </h5>
                </div>
            )}
        </section>
    )
}

import Counter from "../../components/ui/Counter";
import { PieChartIcon, BellIcon, Crosshair1Icon, ChatBubbleIcon, LightningBoltIcon, Pencil2Icon, CrossCircledIcon } from "@radix-ui/react-icons";

const use = [
    {
        icon: <PieChartIcon className="mr-2 text-white scale-[1.35] inline-flex" />,
        tittle: "Dashboards",
        desc: "Make interactive dashboards and console with real time data feed for your users."
    },
    {
        icon: <CrossCircledIcon className="mr-2 text-white scale-[1.35] inline-flex" />,
        tittle: "Elliminate Polling",
        desc: "Keep your servers burden free by switching to event driven architecture with ease."
    },
    {
        icon: <BellIcon className="mr-2 text-white scale-[1.35] inline-flex" />,
        tittle: "Notifications",
        desc: "Keep your users upadted with what's happening in real time, deliver data at scale."
    },
    {
        icon: <Crosshair1Icon className="mr-2 text-white scale-[1.35] inline-flex" />,
        tittle: "Location Streaming",
        desc: "Cab/taxis service, food delivery, maps, navigation all at any scale."
    },
    {
        icon: <ChatBubbleIcon className="mr-2 text-white scale-[1.35] inline-flex" />,
        tittle: "Chat & live Reactions",
        desc: "Customer support, user feedbacks, chat apps, live emoji reactions."
    },
    {
        icon: <Pencil2Icon className="mr-2 text-white scale-[1.35] inline-flex" />,
        tittle: "Collaberative Working",
        desc: "Make software where mutiple people collabarte & engage, with ease."
    },
    // {
    //     icon: <LightningBoltIcon className="mr-2 text-white scale-[1.35] inline-flex" />,
    //     tittle: "Gaming & edge sync",
    //     desc: "Sync software, game states between multiple devices instantly."
    // },
]

export default function Savage() {
    return (
        <section className='px-6 relative'>
            {/* <div className="place-content-center grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 lg:place-items-center">
                <h1 className="col-span-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-medium m-auto z-10 w-full lg:w-[60%] mb-32">
                    The Platform Tailored for the Realtime<span className="bg-gradient-to-tr from-sky-50 to-mybg bg-clip-text text-transparent"> Revolution</span>
                </h1>
                <div className="group/box-body relative col-span-3 lg:col-span-1 rounded-lg text-center lg:text-left 
                border-y border-myborder py-10 lg:border-none">
                    <h1 className="text-9xl font-bold bg-gradient-to-tr from-sky-50 to-mybg bg-clip-text text-transparent"><Counter value={5} /><span className="text-3xl">MS</span></h1>
                    <h1 className="text-xl font-medium">Mean latency</h1>
                    <h1 className="text-xl text-neutral-500">for users with dedicated plans</h1>
                </div>
                <div className="group/box-body relative col-span-3 lg:col-span-1 rounded-lg text-center border-b border-myborder pt-8 pb-10 lg:border-none">
                    <h1 className="text-9xl font-bold bg-gradient-to-tr from-sky-50 to-mybg bg-clip-text text-transparent"><Counter value={135} /><span className="text-3xl">MS</span></h1>
                    <h1 className="text-xl font-medium">Mean latency</h1>
                    <h1 className="text-xl text-neutral-500 ">for users with shared & hobby plans</h1>
                </div>
                <div className="group/box-body relative col-span-3 lg:col-span-1 rounded-lg text-center lg:text-right border-b border-myborder pt-8 pb-10 lg:border-none">
                    <h1 className="text-9xl font-bold bg-gradient-to-tr from-sky-50 to-mybg bg-clip-text text-transparent"><Counter value={100} /><span className="text-3xl">%</span></h1>
                    <h1 className="text-xl font-medium">Uptime</h1>
                    <h1 className="text-xl text-neutral-500">Robust & scalable infrastructure</h1>
                </div>
            </div> */}
            {/* <p className="col-span-3 w-11/12 sm:w-8/12 m-auto lg:w-1/2 mt-40 mb-24 text-center text-lg md:text-3xl font-medium">
                Whatever your usecase be Ignition can help you improve your user expirence and customer satisfaction with easy integrations and flexible pricing.
            </p>
        */}
            {/* <div className="w-full m-auto h-[2px] bg-gradient-to-r from-[#070713] from-25% via-mybg to-80% to-[#070713]"></div>  */}
            <div className="w-full h-fit grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-3 place-content-center mt-16
            place-items-start border-t border-myborder pt-14 ">
                {
                    use.map((useCase, id) => <div key={id} className="col-span-1 text-left px-8 my-6
                    p-3">
                        <h5 className=" leading-[2.5] text-base">
                            {useCase.icon}
                            <strong className="text-white text-xl">{useCase.tittle}</strong> 
                        </h5>
                        <span className="text-zinc-500">{useCase.desc}</span>
                    </div>
                )}
            </div>
        </section>
    )
}

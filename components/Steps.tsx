import Button from "./Button";


export default function Steps() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center mt-32 p-12 gap-16 ">
            <div className="-mt-12 w-[60%] m-auto text-center">
                <h1 className="text-5xl tracking-tight text-center font-medium">
                    Add real time functionalities
                    to your projects in just three steps.
                </h1>
                <Button className="mt-8 -ml-2" varient="filled" text="Try free Forever Plan"/>
                <Button varient="outline" text="Read Docs"/>
            </div>

            <ul className="space-y-4 md:space-y-8 mt-6 w-11/12 m-auto">
                <li className="relative ml-6 bg-white/5 rounded-2xl py-6 px-10 backdrop-blur-xl">
                    <p className="text-3xl tracking-tight font-medium my-3 text-mybg ">Create your free account</p>
                    <p className="relative mt-2 text-p4 text-neutral-500 lg:text-p3">
                        Have your developer install the SDK into your existing mobile, web, IoT, or server application.
                    </p>
                </li>
                <li className="relative ml-6 bg-white/5 rounded-2xl py-6 px-10 backdrop-blur-xl">
                    <p className="text-3xl tracking-tight font-medium my-3 text-mybg ">Install the Ignition SDK</p>
                    <p className="relative mt-2 text-p4 text-neutral-500 lg:text-p3">
                        Have your developer install the SDK into your existing mobile, web, IoT, or server application.
                    </p>
                </li>
                <li className="relative ml-6 bg-white/5 rounded-2xl py-6 px-10 backdrop-blur-xl">
                    <p className="text-3xl tracking-tight font-medium my-3 text-mybg ">Publish & subscribe events</p>
                    <p className="relative mt-2 text-p4 text-neutral-500 lg:text-p3">
                        Have your developer install the SDK into your existing mobile, web, IoT, or server application.
                    </p>
                </li>
            </ul>
        </div>
    )
}

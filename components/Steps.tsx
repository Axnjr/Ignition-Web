import Button from "./Button";


export default function Steps() {
    return (
        <div className="min-h-screen w-full flex items-start mt-12 p-12 gap-16">
            <div className="mt-12 w-[50%] ">
                <h1 className="text-5xl tracking-tight">
                    Add real time functionalities
                    to your projects in just three steps.
                </h1>
                <Button className="mt-8 -ml-2" varient="filled" text="Try free Forever Plan"/>
                <Button varient="outline" text="Read Docs"/>
            </div>
            <ul className="space-y-4 md:space-y-8 mt-6 w-[40%]">
                <li className="relative ml-6">
                    <span className="h6 absolute -left-8 w-6 text-center md:-left-10">1</span>
                    <p className="text-2xl">Create your free account</p>
                    <p className="relative mt-2 text-p4 text-grayscale-5 lg:text-p3">
                        Have your developer install the SDK into your existing mobile, web, IoT, or server application.
                        <span className="absolute -left-5 top-1/2 h-[90%] w-[1px] -translate-y-1/2 border-l-[3px] border-t-0 border-neutral-500 md:-left-7"></span>
                    </p>
                </li>
                <li className="relative ml-6">
                    <span className="h6 absolute -left-8 w-6 text-center md:-left-10">2</span>
                    <p className="text-2xl">Install the Ignition SDK</p>
                    <p className="relative mt-2 text-p4 text-grayscale-5 lg:text-p3">
                        Have your developer install the SDK into your existing mobile, web, IoT, or server application.
                        <span className="absolute -left-5 top-1/2 h-[90%] w-[1px] -translate-y-1/2 border-l-[3px] border-t-0 border-neutral-500 md:-left-7"></span>
                    </p>
                </li>
                <li className="relative ml-6">
                    <span className="h6 absolute -left-8 w-6 text-center md:-left-10">3</span>
                    <p className="text-2xl">Publish & subscribe events</p>
                    <p className="relative mt-2 text-p4 text-grayscale-5 lg:text-p3">
                        Have your developer install the SDK into your existing mobile, web, IoT, or server application.
                        <span className="absolute -left-5 top-1/2 h-[90%] w-[1px] -translate-y-1/2 border-l-[3px] border-t-0 border-neutral-500 md:-left-7"></span>
                    </p>
                </li>
            </ul>
        </div>
    )
}

import Link from "next/link";
import Button from "./Button";


export default function Steps() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center mt-32 p-4 md:p-12 gap-16">
            <div className="-mt-12 w-full sm:w-8/12 grid">
                <h1 className="text-4xl md:text-6xl leading-[1] tracking-tight font-medium">
                    Add real time functionalities
                    to your projects in just three steps.
                </h1>
                <div className="mt-12 flex items-center">
                    <Button className="" varient="filled" text="Get Started"/>
                    <Button className="" varient="outline" text="Read Docs"/>
                </div>
            </div>

            <ul className="w-full md:w-8/12">
                <li className="text-xs md:text-2xl text-neutral-400 border-t-2 py-4 border-neutral-700">
                    Create your Ignition Account by <Link href="/signup" className="underline text-mybg">Signing up</Link>.
                </li>
                <li className="text-xs md:text-2xl text-neutral-400 border-t-2 py-4 border-neutral-700">
                    Install the our SDK in the language of your choice.  
                </li>
                <li className="text-xs md:text-2xl text-neutral-400 border-t-2 py-4 border-neutral-700">
                    Pass your project's API key to the SDK & start coding.
                </li>
                <li className="text-xs md:text-2xl text-neutral-400 border-t-2 py-4 border-neutral-700">
                    Stuck? refer <a className="underline text-mybg">Examples</a> or ask for <a className="underline text-mybg">help</a>.
                </li>
            </ul>
        </div>
    )
}

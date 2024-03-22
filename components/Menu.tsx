import { signIn } from "next-auth/react";
import Link from "next/link";
import Button from "./Button";


export default function Menu() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-5 bg-black z-50 text-center 
        text-white fixed top-0 m-auto">
            <h1 className="text-4xl font-medium tracking-tight my-4">
                Ignition
            </h1>
            <Button className="w-10/12" onClick={() => signIn()} text="Login" varient="outline" />
            <Link className="w-10/12" href="/signup">
                <Button className="w-full mx-0" text="Get Started" varient="filled" />
            </Link>
            <div className="pt-2 text-xl cursor-pointer text-left w-10/12 block">
                <a><h1 className="border-y border-neutral-700 p-2">Products</h1></a>
                <a><h1 className="border-y border-neutral-700 p-2">Documentation</h1></a>
                <a><h1 className="border-y border-neutral-700 p-2">Pricing</h1></a>
                <a><h1 className="border-y border-neutral-700 p-2">Join Us</h1></a>
            </div>
            <svg className="w-16 h-16 m-4 rounded-full border border-neutral-700 p-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
    )
}

import { useSession, signIn, signOut } from "next-auth/react"
// import Modes from "./Modes"
import Button from "./Button"
import Link from "next/link"

export default function Nav() {
    return (
        <nav className="w-full h-20 flex justify-between items-center border-b border-neutral-800 
        px-4  static top-0 bg-black z-10">
            <div className="flex justify-between items-center gap-6">
                <h1 className="text-3xl flex items-center ml-4 mr-8 tracking-tight">
                    Ignition
                </h1>
                <div className="flex items-center gap-6 pt-2 text-md cursor-pointer">
                    <h1><a>Products</a></h1>
                    <h1><a>Use Cases</a></h1>
                    <h1><a>Docs</a></h1>
                    <h1><a>Pricing</a></h1>
                    <h1><a>Join Us</a></h1>
                </div>
            </div>
            <div className="flex items-center gap-2">
                {/* <Modes/> */}
                <Button onClick={() => signIn()} text="Login" varient="outline"/>
                <Link href="/signup"><Button text="Get Started" varient="filled"/></Link>
            </div>
        </nav>
    )
}

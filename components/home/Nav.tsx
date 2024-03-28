import { useSession, signIn, signOut } from "next-auth/react"
import Button from "./Button"
import Link from "next/link"

export default function Nav() {

    const { data: session, status } = useSession();

    function getMenu() {    
        if(document){
            const menu = document.getElementById("menu");
            if(menu){
                menu.style.transform = "translateY(0vh)";
            }
        }
    }

    return (
        <nav className="w-full h-20 flex justify-between items-center border-b border-neutral-800 
        px-4 static top-0 bg-black">
            <div className="flex justify-between items-center gap-6">
                <h1 className="text-3xl font-medium flex items-center mr-8 tracking-tight">
                    <svg className="w-14 h-14 mr-2 stroke-white fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="45.9 8.021 87.99 54.15">
                        <path d="m46 9Zm74.574 23.258c6.666 0 12.069-5.403 12.069-12.068 0-6.666-5.403-12.069-12.069-12.069-6.665 0-12.068 5.403-12.068 12.069 0 6.665 5.403 12.068 12.068 12.068Zm11.852 19.862a4.654 4.654 0 000-6.582l-8.587-8.587a4.654 4.654 0 00-6.582 0l-8.587 8.587a4.656 4.656 0 000 6.582l8.587 8.587a4.654 4.654 0 006.582 0l8.587-8.587Z"/>
                    </svg>
                    Ignition
                </h1>
                <div className="items-center hidden min-[960px]:flex gap-6 pt-2 text-md cursor-pointer">
                    <h1><a>Products</a></h1>
                    <h1><a>Use Cases</a></h1>
                    <h1><a>Docs</a></h1>
                    <h1><a>Pricing</a></h1>
                    <h1><a>Join Us</a></h1>
                </div>

            </div>
            <div className="flex items-center gap-2">
                {
                    status == "authenticated" ? <>
                        <Button className="hidden min-[960px]:block" onClick={() => signOut()} text="Sign Out" varient="outline"/>
                        <Link href="/overview"><Button className="hidden min-[960px]:block whitespace-nowrap" text="Dashboard" varient="filled"/></Link>
                    </>
                        :
                    <>
                        <Button className="hidden min-[960px]:block" onClick={() => signIn()} text="Login" varient="outline"/>
                        <Link href="/signup"><Button className="hidden min-[960px]:block whitespace-nowrap" text="Get Started" varient="filled"/></Link>
                    </>
                }
                <Button onClick={getMenu} className="min-[960px]:hidden" varient="with_children">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </Button>
            </div>
        </nav>
    )
}

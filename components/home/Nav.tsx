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
        <nav className="w-full h-20 flex justify-between items-center px-8 fixed top-0 z-50
        min-[1400px]:px-32 m-auto right-0 left-0 border-neutral-900 bg-black/20 backdrop-blur-sm">
                <h1 className="text-3xl font-medium flex items-center mr-8 tracking-tight">
                    {/* <img src="/logo.png" className="w-8 h-8 mr-2" /> */}
                    Ignition
                </h1>
            <div className="flex justify-between items-center gap-6">
                <div className="items-center hidden min-[960px]:flex gap-6 pt-2 text-md cursor-pointer">
                    <h1><a>Products</a></h1>
                    <h1><a>Use Cases</a></h1>
                    <h1><a>Docs</a></h1>
                    <h1><a>Pricing</a></h1>
                    <h1><a>Join Us</a></h1>
                    {
                        status == "authenticated" 
                            ? 
                        <h1 onClick={() => signOut({callbackUrl:"/"})}><a>SignOut</a></h1> 
                            : 
                        <h1 onClick={() => signIn()}><a>Login</a></h1>
                    }
                </div>

            </div>
            <div className="flex items-center gap-2">
                {
                    status == "authenticated" 
                        ? 
                    <Link href="/overview"><Button className="hidden min-[960px]:block whitespace-nowrap" text="Dashboard" varient="filled"/></Link>
                        :
                    <Link href="/signup"><Button className="hidden min-[960px]:block whitespace-nowrap" text="Get Started" varient="filled"/></Link>    
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

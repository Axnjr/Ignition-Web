import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "../ui/Button";
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
        <nav className="w-full h-16 flex justify-between items-center pl-4 pr-2 sm:px-8 fixed top-0 z-50
        min-[1400px]:px-32 m-auto right-0 left-0 backdrop-blur-xl">
            <h1 className="text-2xl flex items-center mr-8 tracking-tight">
                <svg className="w-6 h-6" viewBox="0 0 500 500" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="globeOuterOnly"><path d="M73.3252 286.654L162.105 286.654L100.636 348.123L151.632 399.119C181.189 369.562 197.794 329.474 197.794 287.674L197.794 231.637C197.794 222.201 190.145 214.551 180.708 214.551H73.3252L73.3252 286.654ZM213.745 73.3254L213.745 162.105L152.276 100.636L101.28 151.632C130.837 181.189 170.926 197.794 212.726 197.794H268.763C278.199 197.794 285.849 190.145 285.849 180.709L285.849 73.3255L213.745 73.3254ZM286.654 427.075V338.295L348.123 399.764L399.119 348.768C369.562 319.211 329.474 302.606 287.674 302.606H231.636C222.2 302.606 214.551 310.255 214.551 319.691L214.551 427.074L286.654 427.075ZM427.074 213.746H338.295L399.764 152.277L348.768 101.281C319.211 130.838 302.605 170.926 302.605 212.726V268.763C302.606 278.199 310.255 285.849 319.691 285.849L427.074 285.849V213.746ZM250.2 285.406C269.938 285.406 285.849 269.414 285.849 249.757C285.849 230.019 269.897 214.068 250.2 214.108C230.502 214.148 214.551 230.1 214.551 249.757C214.511 269.454 230.502 285.446 250.2 285.406Z" fill="white" stroke="white" stroke-width="0"></path></mask></defs><path d="M73.3252 286.654L162.105 286.654L100.636 348.123L151.632 399.119C181.189 369.562 197.794 329.474 197.794 287.674L197.794 231.637C197.794 222.201 190.145 214.551 180.708 214.551H73.3252L73.3252 286.654ZM213.745 73.3254L213.745 162.105L152.276 100.636L101.28 151.632C130.837 181.189 170.926 197.794 212.726 197.794H268.763C278.199 197.794 285.849 190.145 285.849 180.709L285.849 73.3255L213.745 73.3254ZM286.654 427.075V338.295L348.123 399.764L399.119 348.768C369.562 319.211 329.474 302.606 287.674 302.606H231.636C222.2 302.606 214.551 310.255 214.551 319.691L214.551 427.074L286.654 427.075ZM427.074 213.746H338.295L399.764 152.277L348.768 101.281C319.211 130.838 302.605 170.926 302.605 212.726V268.763C302.606 278.199 310.255 285.849 319.691 285.849L427.074 285.849V213.746ZM250.2 285.406C269.938 285.406 285.849 269.414 285.849 249.757C285.849 230.019 269.897 214.068 250.2 214.108C230.502 214.148 214.551 230.1 214.551 249.757C214.511 269.454 230.502 285.446 250.2 285.406Z" fill="white" stroke="white" strokeWidth="0"></path></svg>
                Ignition
            </h1>
            <div className="flex justify-between items-center gap-6 border border-myborder rounded-full py-2 px-4 bg-black">
                <div className="items-center hidden min-[960px]:flex gap-6 text-sm cursor-pointer">
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
                    <Link href="/overview"><Button className="hidden min-[960px]:block whitespace-nowrap">Dashboard</Button></Link>
                        :
                    <Link href="/signup"><Button className="hidden min-[960px]:block whitespace-nowrap">Sign up</Button></Link>    
                }
                <Button onClick={getMenu} className="min-[960px]:hidden">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </Button>
            </div>
        </nav>
    )
}

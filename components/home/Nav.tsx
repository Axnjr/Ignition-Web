"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "../ui/Button";
import Link from "next/link"

export default function Nav(){
    //{ status, signIn, signOut }: { status: string, signIn: any, signOut: any }) {

    const { data: session, status } = useSession()

    function getMenu() {
        if (document) {
            const menu = document.getElementById("menu");
            if (menu) {
                menu.style.transform = "translateY(0vh)";
            }
        }
    }

    function closeMenu() {
        if (document) {
            const menu = document.getElementById("menu");
            if (menu) {
                menu.style.transform = "translateY(-100vh)";
            }
        }
    }

    return (
        <>
            <nav className="w-full h-16 flex justify-between items-center pl-4 pr-2 sm:px-8 fixed top-0 z-50
                min-[1400px]:px-32 m-auto right-0 left-0 backdrop-blur-xl border-b border-myborder/10 text-white">
                <h1 className="text-2xl flex items-center mr-8 tracking-tight">
                    <svg className="w-8 h-8" viewBox="0 0 500 500" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="globeOuterOnly"><path d="M73.3252 286.654L162.105 286.654L100.636 348.123L151.632 399.119C181.189 369.562 197.794 329.474 197.794 287.674L197.794 231.637C197.794 222.201 190.145 214.551 180.708 214.551H73.3252L73.3252 286.654ZM213.745 73.3254L213.745 162.105L152.276 100.636L101.28 151.632C130.837 181.189 170.926 197.794 212.726 197.794H268.763C278.199 197.794 285.849 190.145 285.849 180.709L285.849 73.3255L213.745 73.3254ZM286.654 427.075V338.295L348.123 399.764L399.119 348.768C369.562 319.211 329.474 302.606 287.674 302.606H231.636C222.2 302.606 214.551 310.255 214.551 319.691L214.551 427.074L286.654 427.075ZM427.074 213.746H338.295L399.764 152.277L348.768 101.281C319.211 130.838 302.605 170.926 302.605 212.726V268.763C302.606 278.199 310.255 285.849 319.691 285.849L427.074 285.849V213.746ZM250.2 285.406C269.938 285.406 285.849 269.414 285.849 249.757C285.849 230.019 269.897 214.068 250.2 214.108C230.502 214.148 214.551 230.1 214.551 249.757C214.511 269.454 230.502 285.446 250.2 285.406Z" fill="white" stroke="white" stroke-width="0"></path></mask></defs><path d="M73.3252 286.654L162.105 286.654L100.636 348.123L151.632 399.119C181.189 369.562 197.794 329.474 197.794 287.674L197.794 231.637C197.794 222.201 190.145 214.551 180.708 214.551H73.3252L73.3252 286.654ZM213.745 73.3254L213.745 162.105L152.276 100.636L101.28 151.632C130.837 181.189 170.926 197.794 212.726 197.794H268.763C278.199 197.794 285.849 190.145 285.849 180.709L285.849 73.3255L213.745 73.3254ZM286.654 427.075V338.295L348.123 399.764L399.119 348.768C369.562 319.211 329.474 302.606 287.674 302.606H231.636C222.2 302.606 214.551 310.255 214.551 319.691L214.551 427.074L286.654 427.075ZM427.074 213.746H338.295L399.764 152.277L348.768 101.281C319.211 130.838 302.605 170.926 302.605 212.726V268.763C302.606 278.199 310.255 285.849 319.691 285.849L427.074 285.849V213.746ZM250.2 285.406C269.938 285.406 285.849 269.414 285.849 249.757C285.849 230.019 269.897 214.068 250.2 214.108C230.502 214.148 214.551 230.1 214.551 249.757C214.511 269.454 230.502 285.446 250.2 285.406Z" fill="white" stroke="white" strokeWidth="0"></path></svg>
                    Ignition
                </h1>
                <div className="hidden min-[960px]:flex justify-between items-center gap-6 border border-myborder 
                rounded-full py-3 px-5 bg-black">
                    <div className="items-center flex gap-6 text-sm cursor-pointer">
                        <h1><a href="#products">Products</a></h1>
                        <h1><a href="#usecases">Use Cases</a></h1>
                        <h1><a>Docs</a></h1>
                        <h1><a href="/pricing">Pricing</a></h1>
                        <h1><a href="/carrers">Carrers</a></h1>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {
                        status == "authenticated"
                            ?
                        <Link href="/overview"><Button className="hidden min-[960px]:block whitespace-nowrap">Dashboard</Button></Link>
                            :
                        <Link href="/signup"><Button className="hidden min-[960px]:block whitespace-nowrap">Sign In</Button></Link>
                    }
                    <Button onClick={getMenu} className="min-[960px]:hidden">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </Button>
                </div>
            </nav>
            <div id="menu" className="w-full h-screen flex flex-col items-center justify-start gap-5 z-40 text-center 
            text-white  bg-black pt-24">
                <div className="pt-2 text-xl cursor-pointer text-left w-11/12 block">
                    {
                        status == "authenticated"
                            ?
                        <Link href="/overview"><h5 className="border-b border-neutral-700 py-4">Dashboard</h5></Link>
                            :
                        <Link href="/signup"><h5 className="border-b border-neutral-700 py-4">Sign In</h5></Link>
                    }
                    {/* <a><h5 className="border-y border-neutral-700 py-4">Products</h5></a> */}
                    <a><h5 className="border-y border-neutral-700 py-4">Documentation</h5></a>
                    <a><h5 className="border-y border-neutral-700 py-4">Pricing</h5></a>
                    <a><h5 className="border-y border-neutral-700 py-4">Careers</h5></a>
                    <a><h5 className="border-y border-neutral-700 py-4">Security</h5></a>
                    <a><h5 className="border-y border-neutral-700 py-4">Playground</h5></a>
                </div>
                <svg onClick={closeMenu} className="w-16 h-16 m-4 rounded-full border border-neutral-700 p-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </>
    )
}

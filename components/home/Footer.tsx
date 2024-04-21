

export default function Footer() {
    return (
        <footer className="min-h-[60vh] bg-black relative flex items-start pt-24 mt-12 justify-between px-10">
            <svg className="w-20 h-20" viewBox="0 0 500 500" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="globeOuterOnly"><path d="M73.3252 286.654L162.105 286.654L100.636 348.123L151.632 399.119C181.189 369.562 197.794 329.474 197.794 287.674L197.794 231.637C197.794 222.201 190.145 214.551 180.708 214.551H73.3252L73.3252 286.654ZM213.745 73.3254L213.745 162.105L152.276 100.636L101.28 151.632C130.837 181.189 170.926 197.794 212.726 197.794H268.763C278.199 197.794 285.849 190.145 285.849 180.709L285.849 73.3255L213.745 73.3254ZM286.654 427.075V338.295L348.123 399.764L399.119 348.768C369.562 319.211 329.474 302.606 287.674 302.606H231.636C222.2 302.606 214.551 310.255 214.551 319.691L214.551 427.074L286.654 427.075ZM427.074 213.746H338.295L399.764 152.277L348.768 101.281C319.211 130.838 302.605 170.926 302.605 212.726V268.763C302.606 278.199 310.255 285.849 319.691 285.849L427.074 285.849V213.746ZM250.2 285.406C269.938 285.406 285.849 269.414 285.849 249.757C285.849 230.019 269.897 214.068 250.2 214.108C230.502 214.148 214.551 230.1 214.551 249.757C214.511 269.454 230.502 285.446 250.2 285.406Z" fill="white" stroke="white" stroke-width="0"></path></mask></defs><path d="M73.3252 286.654L162.105 286.654L100.636 348.123L151.632 399.119C181.189 369.562 197.794 329.474 197.794 287.674L197.794 231.637C197.794 222.201 190.145 214.551 180.708 214.551H73.3252L73.3252 286.654ZM213.745 73.3254L213.745 162.105L152.276 100.636L101.28 151.632C130.837 181.189 170.926 197.794 212.726 197.794H268.763C278.199 197.794 285.849 190.145 285.849 180.709L285.849 73.3255L213.745 73.3254ZM286.654 427.075V338.295L348.123 399.764L399.119 348.768C369.562 319.211 329.474 302.606 287.674 302.606H231.636C222.2 302.606 214.551 310.255 214.551 319.691L214.551 427.074L286.654 427.075ZM427.074 213.746H338.295L399.764 152.277L348.768 101.281C319.211 130.838 302.605 170.926 302.605 212.726V268.763C302.606 278.199 310.255 285.849 319.691 285.849L427.074 285.849V213.746ZM250.2 285.406C269.938 285.406 285.849 269.414 285.849 249.757C285.849 230.019 269.897 214.068 250.2 214.108C230.502 214.148 214.551 230.1 214.551 249.757C214.511 269.454 230.502 285.446 250.2 285.406Z" fill="white" stroke="white" strokeWidth="0"></path></svg>
            <div className="flex items-start gap-14 text-neutral-500 font-medium text-left">
                <ul>
                    <label className="text-white font-medium leading-[2]">Products</label>
                    <li>Stream</li>
                    <li>Sync</li>
                    <li>Notify</li>
                </ul>
                <ul>
                    <label className="text-white font-medium leading-[2]">Company</label>
                    <li>Blogs</li>
                    <li>Careers</li>
                    <li>Pricing</li>
                    <li>Docs</li>
                </ul>
                <ul>
                    <label className="text-white font-medium leading-[2]">Legal</label>
                    <li>Terms of service</li>
                    <li>Security</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="absolute bottom-0 w-full left-0 text-neutral-300 border-neutral-800 px-4 py-4 
            border-t flex items-center justify-between">
                <p className="text-sm">
                    © 2024 Ignition Inc. All rights reserved.
                </p>
                <a className="text-sm hover:text-green-500 hover:bg-green-500/20 rounded-lg p-2"><span className="text-xs text-green-500 mr-2">●</span> All systems operational</a>
            </div>
        </footer>
    )
}



export default function Footer() {
    return (
        <footer className="min-h-[50vh] bg-black relative flex items-start pt-24 mt-12 justify-around">
            <div className="">
                <h1 className="text-6xl font-medium flex items-center tracking-tight ">
                    Ignition
                </h1>
                <br/>
                <p className="text-neutral-500">
                    © 2022 Ignition, Inc<br/>
                    All rights reserved.
                </p>
            </div>
            <ul>
                <li className="text-mybg font-medium mb-2 text-xl">Products</li>
                <li>Events</li>
                <li>Notifications - <span className="text-xs">Comming soon</span></li>
                <li>Sync - <span className="text-xs">Comming soon</span></li>
            </ul>
            <ul>
                <li className="text-mybg font-medium mb-2 text-xl">Company</li>
                <li>About</li>
                <li>Join us</li>
                <li>Pricing</li>
                <li>Status</li>
            </ul>
        </footer>
    )
}

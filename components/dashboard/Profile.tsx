import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/Dropdown"

export default function Profile({ user, altName } : { user: string, altName: string }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <div className="text-base text-center flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 rounded-full border p-2 grid place-content-center uppercase">{user ? user[0] : ""}</div>
                    {user ? user.slice(0,user.indexOf("@")+1)+" ...." : "..."}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-10 w-full p-2 rounded-xl z-50">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | null | undefined;

export default function Profile({ user } : { user: User }) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <h1>{user?.email}</h1>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}

"use client"; 
// import { Suspense } from 'react';
import Modes from '../../../components/Modes';
import Button from '../../../components/Button';
import Sidebar from '../../../components/dashboard/Sidebar';
import Profile from '../../../components/dashboard/Profile';
import { useSession } from 'next-auth/react';

export default function Layout({ children }: { children: React.ReactNode }) {

    const { data, status } = useSession();

    return (
        <>
            <header className='w-full h-20 flex items-center fixed z-0 top-0 right-0 border-b border-neutral-300 
            px-4 dark:border-neutral-800 bg-white text-black dark:text-white dark:bg-black
            justify-between flex-row-reverse'>
                <div className='flex items-center gap-2'>
                    <Button text='Docs' varient='plain' />
                    <Button text='Feedback' varient="normal" />
                    <Modes className="mx-4 text-black dark:text-white" />
                </div>
            </header>
            <Sidebar/>

            <main className='pt-16 pl-[20%]'>
                {children}
            </main>
        </>
    )
}

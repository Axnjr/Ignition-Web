"use client";
import Link from 'next/link'
import Profile from './Profile'
import { useSession } from 'next-auth/react';

export default function Sidebar() {

    const { data, status } = useSession();

    return (
        <section className='min-h-screen fixed top-0 left-0 w-1/5 border-r border-neutral-300 z-10 
        text-left dark:border-neutral-800 bg-white dark:bg-black text-black dark:text-white flex flex-col
        items-start justify-between pl-6 gap-8'>
            <h1 className='text-3xl py-6 dark:text-white font-medium tracking-tight'>Ignition</h1>
            <div className='flex flex-col items-start w-full'>
                <Link href="/overview" className='-ml-2 my-1 text-lg flex items-center font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                    Overview
                </Link>
                <p className='-ml-2 my-1 text-lg flex items-center font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
                    API Keys
                </p>
                <Link href="/billing" className='-ml-2 my-1 text-lg flex items-center font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>
                    Billing
                </Link>
                <p className='-ml-2 my-1 text-lg flex items-center font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
                    Logs
                </p>
            </div>
            <Profile user={data?.user} />
        </section>
    )
}

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
            <h1 className="text-2xl my-6 font-medium flex items-center tracking-tight capitalize">
                <svg className="w-14 -ml-10 h-14 mr-4 stroke-black fill-black dark:stroke-white dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="45.9 8.021 87.99 54.15">
                    <path d="m46 9Zm74.574 23.258c6.666 0 12.069-5.403 12.069-12.068 0-6.666-5.403-12.069-12.069-12.069-6.665 0-12.068 5.403-12.068 12.069 0 6.665 5.403 12.068 12.068 12.068Zm11.852 19.862a4.654 4.654 0 000-6.582l-8.587-8.587a4.654 4.654 0 00-6.582 0l-8.587 8.587a4.656 4.656 0 000 6.582l8.587 8.587a4.654 4.654 0 006.582 0l8.587-8.587Z"/>
                </svg>
                {data?.user?.name}
            </h1>
            <div className='flex flex-col items-start w-full'>
                <Link href="/overview" className='-ml-2 my-1 text-base flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                    Overview
                </Link>
                <p className='-ml-2 my-1 text-base flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
                    API Keys
                </p>
                <p className='-ml-2 my-1 text-base flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" /></svg>
                    Servers
                </p>
                <Link href="/billing" className='-ml-2 my-1 text-base flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>
                    Billing
                </Link>
                <p className='-ml-2 my-1 text-base flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
                    Logs
                </p>
            </div>
            <Profile user={data?.user?.email as string} altName={""} />
        </section>
    )
}

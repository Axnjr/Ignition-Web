import Link from 'next/link'
import Profile from './Profile'
import getSession from '@/lib/getSession'; 

export default async function Sidebar() {

    const data = await getSession();

    return (
        <section className='min-h-screen fixed top-0 left-0 w-1/5 border-r border-neutral-300 z-50 
        text-left dark:border-neutral-800 bg-white dark:bg-black text-black dark:text-white flex flex-col
        items-start justify-between pl-6 gap-8'>
            <h1 className="text-2xl my-6 font-medium flex items-center tracking-tight capitalize">
                <svg className="w-8 h-8 mr-1 text-black dark:text-white" viewBox="0 0 500 500" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><defs><mask id="globeOuterOnly"><path d="M73.3252 286.654L162.105 286.654L100.636 348.123L151.632 399.119C181.189 369.562 197.794 329.474 197.794 287.674L197.794 231.637C197.794 222.201 190.145 214.551 180.708 214.551H73.3252L73.3252 286.654ZM213.745 73.3254L213.745 162.105L152.276 100.636L101.28 151.632C130.837 181.189 170.926 197.794 212.726 197.794H268.763C278.199 197.794 285.849 190.145 285.849 180.709L285.849 73.3255L213.745 73.3254ZM286.654 427.075V338.295L348.123 399.764L399.119 348.768C369.562 319.211 329.474 302.606 287.674 302.606H231.636C222.2 302.606 214.551 310.255 214.551 319.691L214.551 427.074L286.654 427.075ZM427.074 213.746H338.295L399.764 152.277L348.768 101.281C319.211 130.838 302.605 170.926 302.605 212.726V268.763C302.606 278.199 310.255 285.849 319.691 285.849L427.074 285.849V213.746ZM250.2 285.406C269.938 285.406 285.849 269.414 285.849 249.757C285.849 230.019 269.897 214.068 250.2 214.108C230.502 214.148 214.551 230.1 214.551 249.757C214.511 269.454 230.502 285.446 250.2 285.406Z" fill="currentColor" stroke="currentColor" stroke-width="0"></path></mask></defs><path d="M73.3252 286.654L162.105 286.654L100.636 348.123L151.632 399.119C181.189 369.562 197.794 329.474 197.794 287.674L197.794 231.637C197.794 222.201 190.145 214.551 180.708 214.551H73.3252L73.3252 286.654ZM213.745 73.3254L213.745 162.105L152.276 100.636L101.28 151.632C130.837 181.189 170.926 197.794 212.726 197.794H268.763C278.199 197.794 285.849 190.145 285.849 180.709L285.849 73.3255L213.745 73.3254ZM286.654 427.075V338.295L348.123 399.764L399.119 348.768C369.562 319.211 329.474 302.606 287.674 302.606H231.636C222.2 302.606 214.551 310.255 214.551 319.691L214.551 427.074L286.654 427.075ZM427.074 213.746H338.295L399.764 152.277L348.768 101.281C319.211 130.838 302.605 170.926 302.605 212.726V268.763C302.606 278.199 310.255 285.849 319.691 285.849L427.074 285.849V213.746ZM250.2 285.406C269.938 285.406 285.849 269.414 285.849 249.757C285.849 230.019 269.897 214.068 250.2 214.108C230.502 214.148 214.551 230.1 214.551 249.757C214.511 269.454 230.502 285.446 250.2 285.406Z" fill="currentColor" stroke="currentColor" strokeWidth="0"></path></svg>
                Ignition
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
                <Link href="/server" className='-ml-2 my-1 text-base flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" /></svg>
                    Server
                </Link>
                <Link href="/billing" className='-ml-2 my-1 text-base flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>
                    Billing
                </Link>
                <p className='-ml-2 my-1 text-base flex items-center hover:bg-neutral-100 dark:hover:bg-neutral-900 w-11/12 rounded-lg py-1 px-2'>
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
                    Logs
                </p>
            </div>
            <Profile user={data?.user?.email as string} />
        </section>
    )
}

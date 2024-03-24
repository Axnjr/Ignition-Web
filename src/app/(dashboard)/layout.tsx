import { Suspense } from 'react';
import Modes from '../../../components/Modes';
import Button from '../../../components/Button';
import Sidebar from '../../../components/dashboard/Sidebar';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense>
            <header className='w-[85%] h-16 flex items-center fixed z-0 top-0 right-0 border-b border-neutral-300 
            px-10 dark:border-neutral-800 bg-white text-black dark:text-white dark:bg-black
            flex-row-reverse'>
                <Button text='Feedback' varient="normal"/>
                <button className='mx-2 px-2'> Docs </button>
                <button className='mx-2 px-2'>Help</button>
                <Modes className="mx-4" />
            </header>

            <Sidebar/>

            <main className='pt-16 pl-[20%]'>
                {children}
            </main>
        </Suspense>
    )
}

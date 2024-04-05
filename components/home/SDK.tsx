import { codeTheme, pubSdkCodes, subSdkCodes } from './codes';

export default function SDK({ sdk }: { sdk: string }) {
    return (
        <div className="w-full flex flex-col md:flex-row
        items-start px-2 py-0">

            <div className="w-full md:w-1/2 h-full sm:border-r-2 border-neutral-800 text-left">
                <div className='text-xl p-4 font-medium tracking-normal capitalize text-center w-full border-b border-neutral-800'>Publish events</div>
                <div className='text-xs md:text-base py-4 md:pt-0'>
                    <pre className=' px-6 py-4 rounded-xl border dark:border-neutral-800'>
                        <code>{
                            sdk == "pub" ? pubSdkCodes.get(sdk)!.split(" ").map((word, i) => {
                                return <span key={i} >{word} </span>
                            })
                                :
                                subSdkCodes.get(sdk)!.split(" ").map((word, i) => {
                                    return <span key={i} >{word} </span>
                                })
                        }</code>
                    </pre>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-full text-left rounded-2xl">
                <div className='text-xl p-4 font-medium tracking-normal capitalize text-center w-full border-y border-neutral-800'>Subscribe to events</div>
                <div className='text-xs md:text-base pt-4 md:pt-0'>
                    <pre className=' px-6 py-4 rounded-xl border dark:border-neutral-800'>
                        <code>{
                            sdk == "pub" ? pubSdkCodes.get(sdk)!.split(" ").map((word, i) => {
                                return <span key={i} >{word} </span>
                            })
                                :
                                subSdkCodes.get(sdk)!.split(" ").map((word, i) => {
                                    return <span key={i} >{word} </span>
                                })
                        }</code>
                    </pre>
                </div>
            </div>

        </div>
    )
}
import { codeTheme, pubSdkCodes, subSdkCodes } from './codes';

export default function SDK({ sdk }: { sdk: string }) {
    return (
        <div className="w-full h-screen mt-24 flex flex-col md:flex-row items-start px-2 py-0">
            <div className="w-full md:w-1/2 h-full text-left">
                <div className='text-xl p-4 font-medium tracking-normal capitalize text-center w-full'>Publish events</div>
                <div className='text-xs md:text-base py-4 md:pt-0'>
                    <pre className=' px-6 py-4 rounded-xl'>
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
                <div className='text-xl p-4 font-medium tracking-normal capitalize text-center w-full'>Subscribe to events</div>
                <div className='text-xs md:text-base pt-4 md:pt-0'>
                    <pre className=' px-6 py-4 rounded-xl'>
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
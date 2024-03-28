import { CopyBlock } from 'react-code-blocks';
import { isMobile } from 'react-device-detect';
import { codeTheme, pubSdkCodes, subSdkCodes } from './codes';

export default function SDK({ sdk }: { sdk: string }) {
    return (
        // shadow-[0px_0px_80px_1px_#FAEEFC]
        <div className="w-full md:w-11/12 h-fit shadow-[0_20px_50px] shadow-mybg mt-6 
        rounded-2xl bg-black border-2 border-neutral-700 backdrop-blur-sm flex flex-col md:flex-row
        items-start px-2 py-0">

            <div className="w-full md:w-1/2 h-full sm:border-r-2 border-neutral-800 text-left">
                <div className='text-xl p-4 font-medium tracking-normal capitalize text-center w-full border-b border-neutral-800'>Publish events</div>
                <div className='text-xs md:text-base py-4 md:pt-0'>
                    <CopyBlock
                        text={pubSdkCodes.get(sdk)!}
                        wrapLongLines
                        language={sdk}
                        showLineNumbers={isMobile ? false : true}
                        // @ts-ignore
                        theme={codeTheme}
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 h-full text-left rounded-2xl">
                <div className='text-xl p-4 font-medium tracking-normal capitalize text-center w-full border-y border-neutral-800'>Subscribe to events</div>
                <div className='text-xs md:text-base pt-4 md:pt-0'>
                    <CopyBlock
                        text={subSdkCodes.get(sdk)!}
                        wrapLongLines
                        language={sdk}
                        showLineNumbers={isMobile ? false : true}
                        // @ts-ignore
                        theme={codeTheme}
                    />
                </div>
            </div>

        </div>
    )
}
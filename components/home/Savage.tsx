import Counter from "../../components/ui/Counter";

export default function Savage() {
    return (
        <section className='mt-96 min-h-screen px-20 pt-32 place-content-center grid grid-cols-3 gap-5 place-items-center'>
            <div className="group/box-body relative col-span-1 rounded-lg text-left">
                <h1 className="text-9xl font-bold bg-gradient-to-t from-[#c7d2fe] to-mybg bg-clip-text text-transparent"><Counter value={5} /><span className="text-xl">MS</span></h1>
                <h1 className="text-xl font-medium ">Mean latency</h1>
                <h1 className="text-xl text-neutral-500">for users with dedicated plans</h1>
            </div>
            <div className="group/box-body relative col-span-1 rounded-lg text-center">
                <h1 className="text-9xl font-bold text-center bg-gradient-to-t from-[#c7d2fe] to-mybg bg-clip-text text-transparent"><Counter value={135} /><span className="text-xl">MS</span></h1>
                <h1 className="text-xl font-medium text-center">Mean latency</h1>
                <h1 className="text-xl text-neutral-500 ">for users with shared & hobby plans</h1>
            </div>
            <div className="group/box-body relative col-span-1 rounded-lg text-right">
                <h1 className="text-9xl font-bold bg-gradient-to-t from-[#c7d2fe] to-mybg bg-clip-text text-transparent"><Counter value={99} /><span className="text-xl">.99%</span></h1>
                <h1 className="text-xl font-medium text-right">Uptime</h1>
                <h1 className="text-xl text-neutral-500 text-right">Robust infrastructure</h1>
            </div>
        </section>
    )
}

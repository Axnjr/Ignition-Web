// "use client";
// import APIKEY from "../../../../components/dashboard/APIKEY";
import Guide from "../../../../components/dashboard/Guide";
// import { useSession } from "next-auth/react";
import getSession from "@/lib/getSession";

export default async function Overview() {

	// const { data: session, status } = useSession();
	const session = await getSession();

	return (
		<div className='px-6 py-10 bg-white text-black dark:bg-black dark:text-white w-full min-h-screen'>
			<div className="flex items-center justify-between w-full p-2">
				<div className='w-1/4'>
					<h1 className="text-4xl mt-6 font-bold leading-[0]">Overview</h1> <br />
					<span className="text-base">Total requests made: 0</span>
				</div>
				{/* <button className='bg-black text-white dark:bg-white dark:text-black font-medium py-2 px-4 rounded-lg'>
					Create API KEY
				</button> */}
				{/* <APIKEY/> */}
				<div className="w-10/12 rounded-xl border p-2 m-2">
					{session?.dbPayload.sub as string}
				</div>
			</div>
			<div className="mt-10 border rounded-xl w-full p-4 h-fit py-6 dark:border-neutral-800">
				<h1 className="text-base m-2 pl-2 mb-6">Add to your project</h1>
				<Guide />
			</div>
		</div>
	)
}

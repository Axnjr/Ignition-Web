import ApiKey from "../../../../components/dashboard/APIKEY";
import Guide from "../../../../components/dashboard/Guide";
import getSession from "@/lib/getSession";

export default async function Overview() {
	const session = await getSession();
	console.log(session?.type)
	return (
		<div className='px-6 py-10 bg-white text-black dark:bg-black dark:text-white w-full min-h-screen'>
			<div className="flex flex-col items-start justify-between w-full p-2">
				<div className='w-1/4 my-3 pl-2'>
					<span className="text-neutral-500 text-sm">Overview</span>
					<h1 className="text-4xl mt-6 whitespace-nowrap tracking-tight font-semibold leading-[1] flex items-center">
						{session?.user?.name}
						<span className="text-sm py-1 px-2 tracking-normal text-neutral-500 border mt-1 mx-2 rounded-lg dark:border-neutral-800">
							{session?.type ?? "Hobby "}
								-
							{
								session?.type == "Hobby" || session?.type == undefined 
									? 
								<a className="text-blue-500"> Upgrade </a> 
									: 
								null
							}
						</span>
					</h1> 
					{/* <br /> */}
				</div>
				{/* <ApiKey/> */}
			</div>
			<div className="mt-6 border rounded-xl w-full p-4 h-fit py-6 dark:border-neutral-800">
				<h1 className="text-base m-2 pl-2 mb-6">Add to your project</h1>
				<Guide />
			</div>
		</div>
	)
}

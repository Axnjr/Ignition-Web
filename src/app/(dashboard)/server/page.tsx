import React from 'react'
import { Button } from '../../../../components/ui/Button'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Vms() {
	return (
		<div className='px-6 py-6 bg-white text-black dark:bg-black dark:text-white w-full min-h-screen'>
			<h1 className="text-4xl mt-6 whitespace-nowrap tracking-tight font-semibold leading-[1]">
				Server Instances
			</h1>
			<div className='w-full mt-8 h-[60vh] border rounded-xl dark:border-neutral-800 flex items-center justify-center'>
				<div className='text-center'>
					<h1 className='text-2xl font-medium my-2'>No dedicated instances running</h1>
					<p className='text-neutral-500 my-4 w-3/5 m-auto text-left'>
						Get an Ignition server all for yourself, no middleware and shared connections.
						For applications requering higher concurrent connections and requests units with mean latency 50ms.
						<Link className='text-blue-500 font-medium' href="/pricing" > View pricing <ExternalLinkIcon className='inline-flex'/></Link>
					</p>
					<Button className='my-2' variant="default">Get a Server</Button>
				</div>
			</div>
		</div>
	)
}

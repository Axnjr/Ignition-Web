'use client'
// import { useState } from "react"
import { useSession } from "next-auth/react"
import { Progress } from "../ui/Progress"

export default function ApiKey() {

    const { data: session } = useSession()

    return (
        <>
           <div className="w-full rounded-xl border px-4 py-2 mt-2 dark:border-neutral-800
           flex flex-col items-start justify-center">
                <div className="flex items-center justify-between w-full my-3 text-sm">
                    <h6 className="text-neutral-500">API Key</h6>
                    <h6 className="text-neutral-500 ">{session?.dbPayload.sub}</h6>
                </div>
                <div className="w-full h-[0.5px] bg-neutral-300 dark:bg-neutral-800 my-2"></div>
                <div className="flex items-center justify-between w-full my-3 text-sm">
                    <h6 className="text-neutral-500">Daily Limit</h6>
                    <h6 className="text-neutral-500">Request made today - 3565 / 200K</h6>
                </div>
                <Progress value={3565/100} max={200} />
			</div>
        </>
    )
}
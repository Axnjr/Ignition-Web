import { Ignition } from "ignition-js-sdk";
import { useState, useEffect } from "react";

const log = (logBool: boolean,...args: any) => {
    if (logBool) { console.log("[ignition-react]", ...args) }
}

export default function useSync(ignition: Ignition, group: string, data: any) {
    const [state, setState] = useState(data);

    useEffect(() => {
        ignition.on("connect", () => {
            console.log(true, "connected")
            ignition.subscribe(group)
        })
        ignition.on("sync", (data) => {
            console.log("SYNCED DATA: ",data)
            setState(JSON.parse(data))
        })
        return () => {
            ignition.off("connect")
            ignition.off("sync")
        }
    }, [])

    useEffect(() => {  
        ignition.emit("sync", group, JSON.stringify(data))
    }, [state])

    return [state, setState];
}
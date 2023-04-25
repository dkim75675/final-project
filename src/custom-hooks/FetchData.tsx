import { useEffect, useState } from "react";
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [coinData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return {coinData, getData:handleDataFetch }

}

function setData(result: any){
    throw new Error("Function not implemented.")
}
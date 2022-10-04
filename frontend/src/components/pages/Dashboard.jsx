import React from "react";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import { getHello } from "../../services/TestService";

export default function Dashboard() {

    const [data, dataSet] = useState([]);

    const updateState = useCallback(async () => {
        const res = await getHello();
        dataSet(res);
    }, []);

    useEffect(() => {
        setInterval(updateState, 1000);
    }, [updateState]);

    return (
        <>
            <h1>{data.myhope}</h1>
        </>
    );
}
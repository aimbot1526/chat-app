import React from "react";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import { getHello } from "../../services/TestService";

export default function Dashboard() {

    const [data, dataSet] = useState([]);

    useEffect(() => {
        getHello().then((data) => dataSet(data));
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <>
            <h1>{data.some}</h1>
        </>
    );
}
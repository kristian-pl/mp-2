import Disney from "./components/Disney.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Character} from "./types/Character.ts";


const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

    const [data, setData] = useState<Character[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.disneyapi.dev/character");
            const json = await rawData.json();
            console.log(json);
            const results: Character[] = json.data;

            setData(results.slice(0,10));
            //sliced here so it diplays 10 characters, before there were 51 !!
        }
        fetchData()
            .then(() => console.log("Success!"))
            .catch((e: Error) => console.log("Error Found: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <Disney data={data}/>
        </ParentDiv>
    )
}
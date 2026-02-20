import {useEffect, useState} from "react";
import RickAndMorty from "./components/RickAndMorty.tsx";

export default function App(){

    //all below would be replaced by SWR

    const[data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const res=await fetch("https://rickandmortyapi.com/api/character");
            const results=await res.json();
            setData(results);
            console.log(results);
        }
        fetchData()
            .then(()=>console.log("everything is good"))
            .catch((e)=>console.log("this error occurred" + e))
    },[data.length])

    return(
        <RickAndMorty data={data.results}/>
    )
}
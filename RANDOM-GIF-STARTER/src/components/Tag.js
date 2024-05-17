import { useState,useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
export default function Tag(){
   /* const [gif,setGif]=useState('');//GIF url
    const [loading,setLoading]=useState(false);

    const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

    async function fetchGif(){
        try{
            setLoading(true);
            const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
            const {data}=await axios.get(url);
            const imagesrc=data.data?.images?.downsized_large?.url;
            setLoading(false);
            setGif(imagesrc);
            
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchGif();
    },[]);*/
    const[tag,setTag]=useState('car');
    const {gif,fetchGif,loading}=useGif(tag);
    return (
        <div className="w-1/2  bg-green-500 w-full rounded-lg border border-black 
        flex flex-col items-center gap-y-10 mt-[15px]">

            <h1 className="text-2xl underline font-bold">RANDOM {tag} GIF</h1>

            {loading?(<Spinner/>):(<img src={gif} width='450'/>)}
            <input type="text" placeholder="enter text" onChange={(event)=>setTag(event.target.value)}></input>

            <button onClick={()=>{fetchGif()}} className="bg-white w-9/12 mb-[10px]">GENERATE</button>
        </div>
    );
}
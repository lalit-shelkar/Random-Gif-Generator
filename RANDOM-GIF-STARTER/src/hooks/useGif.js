//creating my custom hook to optimize the work
import { useEffect, useState } from "react";
import axios from "axios";
export default function useGif(tag){
    const [gif,setGif]=useState('');//GIF url
    const [loading,setLoading]=useState(false);

    const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

    async function fetchGif(){
        try{
            setLoading(true);
            const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
            const finalUrl=tag?(`${url}&tag=${tag}`):(url);
            const h=tag?('t'):('f');
            console.log(h);
            const {data}=await axios.get(finalUrl);
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
    },[]);


    return {gif,loading,fetchGif};
}
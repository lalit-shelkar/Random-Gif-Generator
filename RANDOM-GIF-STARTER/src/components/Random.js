import Spinner from "./Spinner";
import axios from "axios";
import useGif from "../hooks/useGif";
export default function Random (){

   /* const [gif,setGif]=useState('');//GIF url
    const [loading,setLoading]=useState(false);

    const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

    async function fetchGif(){
        try{
            setLoading(true);
            const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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
    },[]); */
    const {gif,fetchGif,loading}=useGif();
    return (
        <div className="w-1/2  bg-green-500 w-full rounded-lg border border-black 
        flex flex-col items-center gap-y-10 mt-[15px]">

            <h1 className="text-2xl underline font-bold">A RANDOM GIF</h1>

            {loading?(<Spinner/>):(<img src={gif} width='450'/>)}

            <button onClick={()=>{fetchGif()}} className="bg-white w-9/12 mb-[10px]">GENERATE</button>
        </div>
    );
}
import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background" >
      <h1 className="bg-white rounded-lg text-center mt-[40px] ml-[25px] mr-[25px] text-4xl font-bold">Random GIFS</h1>
      <div className="flex flex-col items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}


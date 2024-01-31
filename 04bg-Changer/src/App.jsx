import { useState } from "react";
function App() {
  const [color,setcolor] = useState("black");

  return (
    <>
    <div className=" w-full h-screen duration-100"
    style={{backgroundColor:color}}
    >
      <div className=" flex rounded-3xl  justify-center "
      style={{backgroundColor:"white"}}
      >
      <div className=" text-black text-3xl "
      style={{color:color}}
      >
        This is {color} color
      </div>
      </div>
   <div id="btnbar" className=" fixed flex flex-wrap bottom-8 justify-center inset-x-0 px-2">
   
   <div className=" flex flex-wrap justify-center rounded-3xl text-black gap-3 px-3 py-2 bg-white" >

    <button className=" outline-none rounded-full px-4"
    style={{backgroundColor:"red"}}
    onClick={()=>setcolor("red")}
    >Red</button>

    <button className=" outline-none rounded-full px-4"
    style={{backgroundColor:"olive"}}
    onClick={()=>setcolor("olive")}
    >olive</button>

    <button className=" outline-none rounded-full px-4"
    style={{backgroundColor:"green"}}
    onClick={()=>setcolor("green")}
    >green</button>

    <button className=" outline-none rounded-full px-4"
    style={{backgroundColor:"pink"}}
    onClick={()=>setcolor("pink")}
    >pink</button>

    <button className=" outline-none rounded-full px-4"
    style={{backgroundColor:"blue"}}
    onClick={()=>setcolor("blue")}
   >blue</button>
   
    <button className=" outline-none rounded-full px-4"
    style={{backgroundColor:"yellow"}}
    onClick={()=>setcolor("yellow")}
    >yellow</button>
   </div>

   </div>
    </div>
    </>
  )
}

export default App

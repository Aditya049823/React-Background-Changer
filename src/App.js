import {useState} from "react";
function App() {
const[color,setColor]=useState("pink");

  return (
    <>
      <div className="w-100 h-screen"
        style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap bottom-12 inset-x-0
        justify-center">
          <div className="flex flex-wrap justify-center gap-5 px-4 py-2 shadow-lg bg-white rounded-lg">
            <button onClick={()=>setColor("red")}
             className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
               style={{backgroundColor:"red"}}>
                  Red
            </button>
            <button onClick={()=>setColor("yellow")}
             className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
               style={{backgroundColor:"yellow"}}>
                  Yellow
            </button>
            <button onClick={()=>setColor("black")}
             className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
               style={{backgroundColor:"black"}}>
                  Black
            </button>
            <button onClick={()=>setColor("blue")}
             className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
               style={{backgroundColor:"blue"}}>
                  Blue
            </button>
            <button onClick={()=>setColor("orange")}
             className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
               style={{backgroundColor:"orange"}}>
                  Orange
            </button>
            <button onClick={()=>setColor("purple")}
             className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
               style={{backgroundColor:"purple"}}>
                  Purple
            </button>
            <button onClick={()=>setColor("violet")}
             className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
               style={{backgroundColor:"violet"}}>
                  Violet
            </button>
            <button onClick={()=>setColor("gray")}
             className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
               style={{backgroundColor:"gray"}}>
                  Gray
            </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;

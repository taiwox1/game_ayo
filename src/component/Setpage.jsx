import React, { useState } from "react";
import Creategame from "./Creategame";
 import Joingame from "./Joingame";

function Setpage() {
  const [state, setState] = useState("null");

  console.log(state);

  return (
    <div className=" flex flex-col bg-[url('/home/adedotun/game_ayo/src/assets/bag.gif')] bg-cover bg-center h-screen w-screen ">
      <div className="flex flex-row justify-between">
        <div className="text-white  text-[30px] font-semibold   rounded-xl mx-4 mt-2  p-2">
          AYO OLOPON
        </div>
        <h1 className="text-white font-semibold m-2"> Hello Gamer</h1>
      </div>
      <div className=" flex flex-col items-center ">
        <div className=" flex flex-col mx-auto my-4 bg-[#795548] shadow-2xl w-[400px] h-[480px] rounded-xl">
          <div className=" flex flex-col shadow-2xl bg-[url('/home/adedotun/game_ayo/src/assets/ayoii.jpeg')] bg-cover w-[100%] h-[250px] rounded-xl">
            <p className="ml-auto  h-[20px]  font-semibold text-white text-[30px] mr-4 ">
              . . .
            </p>
            <h1 className="flex flex-end mt-auto font-semibold text-white p-2 w-[160px] text-[25px]">
              Let's play Ayo Olopon
            </h1>
          </div>
          <div className="flex flex-row justify-between mt-[50px] bg-gray-300 p-4 mx-6 rounded-xl h-[80px]">
          <button 
              onClick={() => {
                setState("create");
              }}
              className={`${state === "create" ? "bg-gray-500 text-white" : "bg-white text-[#795548]"} p-2 shadow-xl rounded-2xl font-semibold text-[20px] h-[50px] w-[150px]`}
            >
              Create Game
            </button>
            <button
              onClick={() => setState("join")}
              className={`${state === "join" ? "bg-gray-500 text-white" : "bg-white text-[#795548]"} p-2  shadow-xl rounded-2xl font-semibold text-[20px] h-[50px] w-[150px]`}
            >
              Join Game
            </button>
          </div>

          {(() => {
            switch (state) {
              case "join":
                return <Creategame />;
              
              case "create":
                return <Joingame />;
              default:
                return null;
          }
          })()}

          <div className="mx-auto mt-auto font-semibold text-[30px] text-white ">
            <p>. . .</p>
          </div>
          

        </div>

        <div>
          <h1 className="text-white font-semibold mt-2">
        
            Created by two Wonder Kids
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Setpage;

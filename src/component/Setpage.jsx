import React, { useState } from "react";
import Creategame from "./Creategame";
import Joingame from "./Joingame";

function Setpage() {
  const [state, setState] = useState("null");

  console.log(state);

  return (
    <div className=" flex flex-col bg-[url('/home/adedotun/game_ayo/src/assets/bag.gif')] bg-cover bg-center h-screen w-screen ">
      <div className="flex flex-row mt-4 md:mt-2 justify-between">
        <div className="text-white  text-[20px] md:text-[30px] font-semibold   rounded-xl mx-4 md:mt-2  p-2">
          AYO OLOPON
        </div>
        <div className="text-white font-semibold m-2"> Hello Gamer</div>
      </div>
      <div className=" flex flex-col items-center ">
        <div className=" flex flex-col mx-auto pb-4 my-4 bg-[#795548] shadow-2xl w-[260px] md:w-[400px] md:h-[480px] rounded-xl">
          <div className=" flex flex-col shadow-2xl bg-[url('/home/adedotun/game_ayo/src/assets/ayoii.jpeg')] bg-cover  sm:w-[100%] h-[200px] sm:h-[250px] rounded-xl">
            <p className="ml-auto  h-[20px]  font-semibold text-white text-[30px] mr-4 ">
              . . .
            </p>
            <h1 className="flex flex-end mt-auto font-semibold text-white p-2 w-[160px] text-[25px]">
              Let's play Ayo Olopon
            </h1>
          </div>
          <div className="flex flex-row   justify-between mt-[50px] bg-gray-300 p-4 mx-2 md:mx-4 rounded-xl h-[80px]">
            <button
              onClick={() => {
                setState("create");
              }}
              className={`${
                state === "create"
                  ? "bg-gray-500 text-white"
                  : "bg-white text-[#795548]"
              } p-2 mr-2 w-[200px] shadow-xl rounded-2xl font-semibold text-[14px]  md:text-[20px] h-[40px] w-[110px] md:h-[50px]  md:w-[150px]`}
            >
              Create Game
            </button>
            <button
              onClick={() => setState("join")}
              className={`${
                state === "join"
                  ? "bg-gray-500 text-white"
                  : "bg-white text-[#795548]"
              } p-2  shadow-xl rounded-2xl font-semibold text-[14px] md:text-[20px] h-[40px] w-[105px] md:h-[50px]  md:w-[150px]`}
            >
              Join Game
            </button>
          </div>

          <div className="md:flex hidden">{(() => {
            switch (state) {
              case "join":
                return <Creategame />;

              case "create":
                return <Joingame />;
              default:
                return null;
            }
          })()}
          </div> 
        </div>
        <div className=" md:hidden  flex flex-col mx-auto  md:my-4 bg-[#795548] shadow-2xl w-[260px] md:w-[400px] md:h-[480px] rounded-xl">
         

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
         

         
        </div>
      </div>
      <footer className=" mx-auto mt-auto mb-2">
        <h1 className="text-white font-semibold mt-2">
          Created by two Wonder Kids
        </h1>
      </footer>
    </div>
  );
}

export default Setpage;

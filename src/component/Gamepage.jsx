import React from "react";
import { Pad } from "../constant";

function Gamepage(props) {
  return (
    <div className=" flex flex-col bg-[url('/home/adedotun/game_ayo/src/assets/ayo.jpeg')]  bg-cover h-screen w-screen bg-center">
      <div className=" w-full h-[100vh] flex flex-col items-center">
        <div className=" flex  flex-row grid grid-cols-6 m-auto rounded-2xl p-4 bg-[#795548]">
          {Pad.map((cont) => (
            <div className=" flex cursor-pointer flex-col bg-white m-3 border-4 border-solid border-gray-600  shadow-xl w-[180px] h-[200px] rounded-full">
              <div className="flex  z-20 bg-gray-500 rounded-full w-[40px] text-white font-semibold shadow-xl h-[40px] ">
                <p className="m-auto"> 12</p>
              </div>
              <div className="flex bg-green-100  -mt-10  w-[100%] rounded-full h-[100%] text-white mx-auto font-semibold shadow-xl ">
                <div className=" flex flex-wrap p-6 justify-between m-auto">
                  <p className=" flex rounded-full bg-red-500 w-[40px]  mt-1 ml-0.1 h-[40px]"></p>

                  <p className="flex rounded-full bg-red-500 w-[40px]  mt-1 ml-0.1  h-[40px]"></p>
                  <p className=" flex rounded-full bg-red-500 w-[40px]  mt-1 ml-0.1 h-[40px]"></p>

                  <p className="flex rounded-full bg-red-500 w-[40px]  mt-1 ml-0.1  h-[40px]"></p>
                  <p className=" flex rounded-full bg-red-500 w-[40px]  mt-1 ml-0.1 h-[40px]"></p>
                  <p className="flex rounded-full bg-red-500 w-[40px]  mt-1 ml-0.1  h-[40px]"></p>
                  <p className=" flex rounded-full bg-red-500 w-[40px]  mt-1 ml-0.1 h-[40px]"></p>


                  <p className="flex rounded-full bg-red-500 w-[40px]  mt-1 ml-0.1  h-[40px]"></p>
                  <p className=" flex rounded-full bg-red-500 w-[40px]  mt-1 ml-0.1 h-[40px]"></p>
                </div>
              </div>
            </div>))}
          
         
          
        </div>
      </div>
    </div>
  );
}

export default Gamepage;

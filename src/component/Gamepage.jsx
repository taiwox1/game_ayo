import React from "react";
import { toproll, bottomroll } from "../constant";

function Gamepage(props) {
  return (
    <div className=" flex flex-col bg-[url('/home/adedotun/game_ayo/src/assets/ayo.jpeg')]  bg-cover h-screen w-screen bg-center">
      <div className="text-white md:text-[40px] font-semibold  py-2  px-2 flex flex-row justify-between">
        <p>You: 34</p>
        <p className="ml-8"> DashBoard </p>
        <p>Attack: 34</p>
    </div>
      <div className=" w-full h-[100vh] justify-center  md:m-auto  flex flex-row md:h-[200px] md:flex-col items-center">
        <div className=" flex  flex-row grid grid-row-6 md:grid-cols-6   rounded-2xl p-2 md:p-4 bg-[#795548]">
          {toproll.map((cont) => (
            <div className=" flex cursor-pointer flex-col bg-white m-0.5 md:m-3 border-4 border-solid border-gray-600  shadow-xl w-[100px]  h-[80px]  md:w-[180px]  md:h-[200px] rounded-full">
              <div className="flex  z-20 bg-gray-500 rounded-full w-[30px] h-[30px] md:w-[40px] text-white font-semibold shadow-xl mh-[40px] ">
                <p className="m-auto"> {cont.id}</p>
              </div>
              <div className="flex bg-green-100  -mt-8 md:-mt-10  w-[100%] rounded-full h-[100%] text-white mx-auto font-semibold shadow-xl ">
                <div className=" flex flex-wrap p-6 justify-between m-auto">
                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>
                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>
                   <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>
                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>

                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>
                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>
                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>

                  
                 
                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex  flex-row grid grid-row-6 md:grid-cols-6  rounded-2xl p-2 md:p-4  bg-[#795548]">
          {bottomroll.map((cont) => (
            <div className=" flex cursor-pointer flex-col bg-white m-0.5 md:m-3 border-4 border-solid border-gray-600  shadow-xl w-[100px]  h-[80px]  md:w-[180px]  md:h-[200px] rounded-full">
              <div className="flex  z-20 bg-gray-500 rounded-full w-[30px] h-[30px] md:w-[40px] text-white font-semibold shadow-xl md:h-[40px] ">
                <p className="m-auto"> {cont.id}</p>
              </div>
              <div className="flex bg-green-100  -mt-8 md:-mt-10  w-[100%] rounded-full h-[100%] text-white mx-auto font-semibold shadow-xl ">
                <div className=" flex flex-wrap p-6 justify-between m-auto">
                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>
                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>

                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>
                   <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>
                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>

                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>

                  <p className=" flex rounded-full bg-red-500 w-[10px] md:w-[40px]  mt-1 ml-0.1 h-[10px] md:h-[40px]"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gamepage;

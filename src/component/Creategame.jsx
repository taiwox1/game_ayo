import React from 'react'

function Creategame() {
  return (
     <div className="w-[90%] font-semibold text-[#795548] flex flex-col mx-auto mt-4 bg-gray-300 p-3 mx-6 rounded-xl h-[90px]  ">
            <p className="pl-3">Enter link to play game: </p>
            <div className=" flex flex-row h-[40px] mx-auto  mx-auto rounded-xl ">
              <input type="text" placeholder="Enter link" className=" shadow-xl w-[84%] rounded-xl p-2" />
             <a href="playgame"> <button className="text-white font-semibold shadow-xl p-2 rounded-full shadow-xl bg-gray-500 text-[16px] mx-auto ml-2">GO</button>
           </a> </div>
          </div>
  )
}

export default Creategame
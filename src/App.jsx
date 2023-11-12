import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setpage from './component/Setpage';
import Gamepage from "./component/Gamepage";

function App() {
    return (
    <div className="App">
            <BrowserRouter >
            <Routes>
                <Route index element={<Setpage />} />
                <Route path="playgame" element={<Gamepage/>}/>
           
            </Routes>
      
      
      </BrowserRouter>
    </div>
        
   
  );
}

export default App;

import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SessaoDoFilme from "./Components/SessaoDoFilme";
import {BrowserRouter,Routes,Route} from "react-router-dom";

export default function App(){
    return (
        <BrowserRouter>
            <Navbar/>
	        <Routes>
	            <Route path="/" element={<Home />}/>
                <Route path="/sessoes/:idFilme" element={<SessaoDoFilme />}/>
	        </Routes>
        </BrowserRouter>
    )
}


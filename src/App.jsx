import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SessaoDoFilme from "./Components/SessaoDoFilme";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Assentos from "./Components/Assentos";

export default function App(){
    return (
        <BrowserRouter>
            <Navbar/>
	        <Routes>
	            <Route path="/" element={<Home />}/>
                <Route path="/sessoes/:idFilme" element={<SessaoDoFilme />}/>
                <Route path="/assentos/:idSessao" element={<Assentos/>}/>
	        </Routes>
        </BrowserRouter>
    )
}


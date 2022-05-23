import {useState} from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SessaoDoFilme from "./Components/SessaoDoFilme";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Assentos from "./Components/Assentos";
import Sucesso from "./Components/Sucesso";
import Footer from "./Components/Footer";

export default function App(){
    const [info,setInfo]=useState([]);
    function storeInfo(informacao){
        setInfo([...info,informacao]);
    }
    return (
        <BrowserRouter>
            <Navbar/>
	        <Routes>
	            <Route path="/" element={<Home />}/>
                <Route path="/sessoes/:idFilme" element={<SessaoDoFilme storeInfo={storeInfo}/>}/>
                <Route path="/assentos/:idSessao" element={<Assentos storeInfo={storeInfo}/>}/>
                <Route path="/sucesso" element={<Sucesso info={info} />}/>
	        </Routes>
            <Footer info={info} />
        </BrowserRouter>
    )
}


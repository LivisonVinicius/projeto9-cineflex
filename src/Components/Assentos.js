import { useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import { useState, useEffect } from "react";
import AssentoD from "./AssentoD";
import Formulario from "./Formulario";

export default function Assentos({storeInfo}){
    const {idSessao} = useParams();
    const [assentos, setAssentos]= useState([]);
    const [selecionados, setSelecionados] = useState([]);
    const [idselecionados, setIdselecionados] = useState([]);
    
    function selecionaSelecionados(assento,id){
        setSelecionados([...selecionados,assento]);
        setIdselecionados([...idselecionados,Number(id)]);
    }

    function removeSelecionados(assento,id){
        setSelecionados((selecionados) => selecionados.filter((selecionado) => selecionado !== assento));
        setIdselecionados((idselecionados) => idselecionados.filter((selecionado) => selecionado !== Number(id)));
    }

    useEffect(()=>{
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
        );
        
        requisicao.then((res)=> {
            setAssentos(res.data.seats);
            storeInfo([res.data.name, res.data.day.date]);
        });
    },[]);
    
    return(
        <MID>
            <Selecao>{"Selecione o(s) assento(s)"}</Selecao>
            <AssentosBox>
                {assentos.map(assento=>!assento.isAvailable?
                <Assento background="#FBE192" border="#F7C52B" onClick={()=>alert("Esse assento não está disponível")}>{assento.name}</Assento>:<AssentoD name={assento.name} selecionaSelecionados={selecionaSelecionados} selecionados={selecionados} id={assento.id} removeSelecionados={removeSelecionados} />)}
                <LegendaBox>
                    <Legenda><Assento background="#8DD7CF" border="#1AAE9E"></Assento>Selecionado</Legenda>
                    <Legenda><Assento background="#C3CFD9" border="#7B8B99"></Assento>Disponível</Legenda>
                    <Legenda><Assento background="#FBE192" border="#F7C52B"></Assento>Indisponível</Legenda>
                </LegendaBox>
                <Formulario idselecionados={idselecionados} storeInfo={storeInfo} selecionados={selecionados}/>
            </AssentosBox>
        </MID>
        

    )
}

const Selecao = styled.div`
    width:100%;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
`

const AssentosBox= styled.div`
    width:330px;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
`
const MID=styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const Assento= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-width: 26px;
    height: 25px;
    background: ${props=>props.background};
    border: 1px solid ${props=>props.border};
    border-radius: 12px;
    margin-right:7px;
    margin-bottom:18px;
`
const LegendaBox= styled.div`
    display:flex;
    width: 100%;
    justify-content:space-around;
    margin-bottom:41px;
`

const Legenda= styled.div`
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
    flex-direction:column;
`
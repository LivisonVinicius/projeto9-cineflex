import { useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import { useState, useEffect } from "react";

export default function Assentos(){
    const {idSessao} = useParams();
    const [sessao, setSessao]= useState([]);
    
    return(
        <MID>
            <Selecao>{"Selecione o(s) assento(s)"}</Selecao>
            <AssentosBox></AssentosBox>
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
`
const MID=styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
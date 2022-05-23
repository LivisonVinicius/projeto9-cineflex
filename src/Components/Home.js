import React from "react";
import styled from 'styled-components';
import Filmes from "./Filmes";

export default function Home(){
    return(
        <>
            <Selecao>Selecione o filme</Selecao>
            <Filmes />
        </>
        
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
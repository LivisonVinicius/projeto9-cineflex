import React from "react";
import styled from 'styled-components';
import Filmes from "./Filmes";

export default function Home(){
    return(
        <>
            <Header>CINEFLEX</Header>
            <Selecao>Selecione o filme</Selecao>
            <Filmes />
        </>
        
    )
}

const Header = styled.div`
    width:100%;
    height:67px;
    background:#C3CFD9;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
`;
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
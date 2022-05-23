
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import Horarios from "./Horarios";

export default function SessaoDoFilme({storeInfo}){
    const {idFilme} = useParams();
    const [film, setFilm]= useState([]);
    useEffect(()=>{
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        );
        
        requisicao.then((res)=> {
            setFilm(res.data.days);
            storeInfo([res.data.title,res.data.posterURL]);
        });
    },[]);
    return(
        <MID>
            <Selecao>Selecione o horário</Selecao>
            {film.map(dia=>
                <Sessao key={dia.id}>
                    <Dia>{`${dia.weekday} ${dia.date}`}</Dia>
                    <Horarios dia={dia} />
                </Sessao>)
                }
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
const Sessao = styled.div`
    width:300px;
    height:100px;
    margin-left:25px;
    display:flex;
    flex-direction:column;
`
const Dia = styled.div`
    font-size: 20px;
    line-height: 23px;
    color: #293845;
    letter-spacing: 0.02em;
`
const MID = styled.div`
    margin-bottom:151px;
`

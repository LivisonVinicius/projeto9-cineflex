import React from "react";
import styled from 'styled-components';
import axios from "axios";
import { Link } from "react-router-dom";
export default function Filmes(){
    const [filmList,setFilmList] = React.useState([]);
    React.useEffect(()=>{const promise=axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    promise.then(res=>setFilmList(res.data));},[])
    return(
        <FilmBox>
            {filmList.map(film=>
                <Link style={{textDecoration:"none"}} to={`/sessoes/${film.id}`}>
                    <Filme>
                        <img src={film.posterURL} alt={film.title}></img>
                    </Filme>
                </Link>
                )}
        </FilmBox>

    )
}

const FilmBox= styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    flex-wrap:wrap;
`
const Filme= styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:145px;
    height:209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom:11px;
    img{
        width:129px;
        height:193px;
    }
`

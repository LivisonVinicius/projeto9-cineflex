import React from "react";
import styled from 'styled-components';
import axios from "axios";
export default function Filmes(){
    const [filmList,setFilmList] = React.useState([]);
    React.useEffect(()=>{const promise=axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    promise.then(lista=>criaLista(lista,setFilmList,filmList));},[])
    const filmComponents= filmList.map(film=>
        <Filme>
            <img src={film.img} alt={film.title}></img>
        </Filme>)
    console.log(filmList)
    return(
        <FilmBox>
            {filmComponents}
        </FilmBox>

    )
}

function criaLista(response,setFilmList,filmList){
    response.data.map(obj=>setFilmList([...filmList,{id:obj.id, img:obj.posterURL,title:obj.title}]))
}
const FilmBox= styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const Filme= styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
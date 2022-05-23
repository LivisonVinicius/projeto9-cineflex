import styled from "styled-components";
import { useState} from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Formulario(props){
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();
    function submitData(event) {
        event.preventDefault();
        const objPost={ids:props.idselecionados,name:`${name}`,cpf:`${cpf}`}
        console.log(objPost)
        const promise=axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",objPost)
        promise.then(()=>{props.storeInfo([props.selecionados,name,cpf]); navigate("/sucesso")})
      }

    return(
        <Form onSubmit={submitData}>
            <label htmlFor="nome">Nome do comprador:</label>
            <input
              type="text"
              id="nome"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome..."
              
            />
            <label htmlFor="cpfU">CPF do comprador:</label>
            <input
              type="text"
              id="cpfU"
              value={cpf}
              required
              onChange={(e) => setCpf(e.target.value)}
              placeholder="Digite seu CPF..."
              minLength="11"
              maxLength="11"
              pattern="[0-9]{11}"
            />
		    <button type="submit">{'Reservar assento(s)'}</button>
        </Form>
    )
}

const Form=styled.form`
    width:327px;
    height:258px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:150px;
    label{
        width:100%;
        height:25px;
        margin-bottom:1px;
        color: #293845;
    }
    input{
        width:100%;
        height:51px;
        font-size: 18px;
        line-height: 21px;
        margin-bottom:7px;
        padding-left:18px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        color: #FFFFFF;
        font-size: 18px;
        line-height: 21px;
        margin-top:57px;
    }
    `
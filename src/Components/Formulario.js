import styled from "styled-components";
import { useState} from "react";

export default function Formulario(){
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    function submitData(event) {
        event.preventDefault();
        
      }

    return(
        <Form onSubmit={submitData}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="cpfU">Nome</label>
            <input
              type="number"
              id="cpfU"
              value={cpf}
              required
              onChange={(e) => setCpf(e.target.value)}
            />
		    <button type="submit">{'Reservar assento(s)'}</button>
        </Form>
    )
}

const Form=styled.form`
    width:327px;
    height:258px;
    `
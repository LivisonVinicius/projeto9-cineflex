import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Sucesso({info,setInfo}){
    function formataCPF(cpf){return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"); }
    return (
        <Mid>
            <Mensagem>Pedido feito
            com sucesso!</Mensagem>
            <Sections><h2>Filme e sessão</h2> <h3>{info[0][0]}</h3> <h3>{`${info[1][1]} ${info[1][0]}`}</h3> </Sections>
            <Sections><h2>Ingressos</h2><h3>{info[2][0].map(assento=><>{`Assento ${assento}`}<br/></>)}</h3></Sections>
            <Sections><h2>Comprador</h2><h3>Nome:{info[2][1]}<br/>Cpf:{formataCPF(info[2][2])}</h3></Sections>
            <Link style={{textDecoration:"none"}} to={"/"}>
                <Botao onClick={()=>setInfo([])}>Voltar pra Home</Botao>
            </Link>
        </Mid>
        

    )
}

const Mensagem= styled.div`
    width: 100%;
    height: 110px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content:center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
`
const Sections= styled.section`
    width:90%;
    display:flex;
    flex-direction:column;
    color: #293845;
    letter-spacing: 0.04em;
    margin-left:29px;
    margin-bottom:43px;
    h2{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }
    h3{
        font-size: 22px;
        line-height: 26px;
    }
`
const Mid = styled.main`
display:flex;
justify-content:center;
align-items:center;
width:100%;
flex-direction:column;
`
const Botao = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 225px;
height: 42px;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;
background: #E8833A;
border-radius: 3px;
color: #FFFFFF;
margin-top:91px;
margin-bottom:90px;
box-sizing:border-box;
`
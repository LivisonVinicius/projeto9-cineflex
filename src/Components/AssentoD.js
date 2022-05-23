import styled from 'styled-components';


export default function AssentoD(props){
    return(
       <>
            {!props.selecionados.includes(`${props.name}`)?
            <Assento background="#C3CFD9" border="#7B8B99">
                <div onClick={()=>props.selecionaSelecionados(`${props.name}`,`${props.id}`)}>{props.name}</div>
            </Assento>:
            <Assento background="#8DD7CF" border="#1AAE9E">
                <div onClick={()=>props.removeSelecionados(`${props.name}`,`${props.id}`)}>{props.name}</div>
            </Assento>
            }
       </> 
    )
}

const Assento = styled.div`
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

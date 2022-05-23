import { Link} from "react-router-dom";
import styled from 'styled-components';

export default function Horarios(props){
    return(
        <Horario>
            {props.dia.showtimes.map(hora=>
                <Link to={`/assentos/${hora.id}`}>
                    <Hora key={hora.id}>{hora.name}</Hora>
                </Link>  
                )}
        </Horario>
    )
}
const Hora= styled.div`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    color:#FFFFFF;
    font-size: 18px;
    line-height: 21px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:8px;
`
const Horario = styled.div`
    width:100%;
    height:43px;
    display:flex;
    margin-top:22px;
    margin-bottom:22px;
`
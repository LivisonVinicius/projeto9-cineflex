import styled from 'styled-components';

export default function Navbar(){
    return(
        <Header>CINEFLEX</Header>
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
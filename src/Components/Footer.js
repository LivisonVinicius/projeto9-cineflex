import styled from "styled-components"

export default function Footer ({info}){
    return(
        <>
            {info.length===0?<Foot display="none"></Foot>:info.length===1?<Foot display="flex"><div><img src={info[0][1]}/>  </div> <ul>{info[0][0]}</ul></Foot>:info.length===2?<Foot display="flex"><div><img src={info[0][1]}/>  </div> <ul>{info[0][0]}<br/>{`${info[1][1]} - ${info[1][0]}`}</ul></Foot>:<Foot display="none"></Foot>}
        </> 
    )
}

const Foot= styled.div`
    width:100%;
    height:117px;
    position:fixed;
    right:0px;
    bottom:0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display:${props=>props.display};
    align-items:center;
    img{
        width:48px;
        height:72px;
    }
    div{
        width:64px;
        height:89px;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#FFFFFF;
        margin-left:10px;
        margin-right:14px;
    }
    ul{
        font-size: 26px;
        line-height: 30px;
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
    }
`
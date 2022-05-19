import React from "react"
import Home from "./Components/Home"

export default function App(){
    return (
        <RenderizarTela />
    )
}

function RenderizarTela(){
    const [screen,setScreen] = React.useState("home")
    if (screen==="home"){
        return (
            <Home setScreen={setScreen}/>
        )
    }
}
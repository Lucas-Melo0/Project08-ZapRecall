import HomePage from "./components/HomePage";
import ZapPage from "./components/ZapPage";
import React from "react"


export default function App() {


    const [numberOfZaps, setNumberOfZaps] = React.useState("Digite uma meta de zaps")

    
    return (
        <>
            <HomePage  numberOfZaps={numberOfZaps} setNumberOfZaps={setNumberOfZaps} />
            <ZapPage numberOfZaps={numberOfZaps} />
        </>



    )
}





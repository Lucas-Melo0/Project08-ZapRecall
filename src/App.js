import HomePage from "./components/HomePage";
import ZapPage from "./components/ZapPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {

const [numberOfZaps, setNumberOfZaps] = React.useState("Digite sua meta de zaps...")

    return (
        <Router>
        <Routes>
            <Route path="/" element={<HomePage numberOfZaps={numberOfZaps} setNumberOfZaps={setNumberOfZaps} />} />
            <Route path="/ZapPage" element={<ZapPage numberOfZaps={numberOfZaps}/>} />
        </Routes>
    </Router>

    )

    
}





import HomePage from "./components/HomePage";
import ZapPage from "./components/ZapPage";
import React from "react";
import "./css/reset.css";
import "./css/styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {

const [numberOfZaps, setNumberOfZaps] = React.useState("Digite sua meta de zaps...")
const [deck, setDeck] = React.useState("React Deck")

    return (
        <Router>
        <Routes>
            <Route path="/" element={<HomePage numberOfZaps={numberOfZaps} setNumberOfZaps={setNumberOfZaps} setDeck={setDeck} />} />
            <Route path="/ZapPage" element={<ZapPage numberOfZaps={numberOfZaps} deck={deck}/>} />
        </Routes>
    </Router>

    )

    
}





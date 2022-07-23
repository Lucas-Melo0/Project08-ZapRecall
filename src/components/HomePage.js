import { Link } from "react-router-dom";
import React from "react";
import bolt from "../assets/bolt.png"
export default function HomePage({ numberOfZaps, setNumberOfZaps, setDeck}) {

   
    
    return (
        <div className="homePage">

            <img src={bolt} alt="Lightning bolt" />
            <h1>ZapRecall</h1>
            <div className="container">
                <select  onChange={(e) => setDeck(e.target.value)} className="dropdown">
                    <option value={""}>Selecione um deck</option>
                    <option value={"Casimiro Deck"}>Casimiro Deck</option>
                    <option value={"React Deck"}>React Deck</option>
                </select>
                <input value={numberOfZaps} onChange={(e) => setNumberOfZaps(e.target.value)} type="number" placeholder="Digite sua meta de zaps..." className="dropdown"></input>
                {
                    numberOfZaps > 0 ? <Link to="/ZapPage">
                        <button className="buttonClicked" >Iniciar Recall!</button>
                    </Link> : <button className="buttonNotClicked">Iniciar Recall!</button>
                }

            </div>

        </div>

    )
}
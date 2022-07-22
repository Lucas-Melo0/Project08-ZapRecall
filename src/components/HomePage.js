import { Link } from "react-router-dom";
import React from "react";

export default function HomePage({ numberOfZaps, setNumberOfZaps }) {
    
    
    
    return (
        <div className="homePage">
            
            <img src="./assets/bolt.png" alt="Lightning bolt" />
            <h1>ZapRecall</h1>
            <input value ={numberOfZaps} onChange={(e) => setNumberOfZaps(e.target.value)} type="number" placeholder="Digite sua meta de zaps..."className="dropdown"></input>
            <Link to="/ZapPage"> 
                <button>Iniciar Recall!</button>
            </Link>

        </div>
    )
}
import { Link } from "react-router-dom";
import React from "react";

export default function HomePage({ numberOfZaps, setNumberOfZaps }) {



    return (
        <div className="homePage">

            <img src="./assets/bolt.png" alt="Lightning bolt" />
            <h1>ZapRecall</h1>
            <div className="container">
                <input value={numberOfZaps} onChange={(e) => setNumberOfZaps(e.target.value)} type="number" placeholder="Digite sua meta de zaps..." className="dropdown"></input>
                {
                    numberOfZaps > 0 ? <Link to="/ZapPage">
                        <button>Iniciar Recall!</button>
                    </Link> : <button>Iniciar Recall!</button>
                }

            </div>

        </div>

    )
}
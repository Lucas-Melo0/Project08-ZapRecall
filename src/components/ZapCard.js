import React from "react";
import reactDeck from "../data";
export default function ZapCard() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [zapClass, setZapClass] = React.useState("zapCard")


    function openZap() {

        setZapClass("hidden")
        setIsOpen(true)

    }

    return (
        <>
            <div onClick={openZap} className={zapClass}>
                <div className="zapContainer">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
            {isOpen && <div className="zapClicked">
                    <p>O que é JSX?</p>
                    <img src="./assets/setinha.png" alt=" turnaround arrow" />

                </div>}
        </>


    )
}



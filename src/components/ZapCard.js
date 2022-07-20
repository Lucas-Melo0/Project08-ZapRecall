import React from "react";
export default function ZapCard({ cardNumber, cardQuestion, cardAnswer }) {

    const [isClicked, setIsClicked] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isTurned, setIsTurned] = React.useState(false);
    


    return (
        <>
            {
                isClicked ? null
                    : <div onClick={() => {setIsOpen(true); setIsClicked(true)}} className="zapCard">
                        <div className="zapContainer">
                            <p>Pergunta {cardNumber} </p>
                            <ion-icon name="play-outline"></ion-icon>
                        </div>
                    </div>
            }
            {
                isOpen ? <div className="zapClicked">
                    <p>{cardQuestion}</p>
                    <img onClick={() => {setIsTurned(true);setIsOpen(false)}} src="./assets/setinha.png" alt=" turnaround arrow" />
                </div> : null
            }
            {
                isTurned ? <div className="zapClicked">
                    <p>{cardAnswer}</p>
                    <div className="options">
                        <button className="wrong">Não lembrei</button>
                        <button className="halfCorrect">Quase não lembrei</button>
                        <button className="correct">Zap!</button>
                    </div>
                </div> : null
            }

        </>


    )
}



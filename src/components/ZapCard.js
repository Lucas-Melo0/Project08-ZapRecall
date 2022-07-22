import React from "react";
export default function ZapCard({ cardNumber, cardQuestion, cardAnswer, countAnswers, footerCorrectAnswerIcon, footerIncorrectAnswerIcon, footerHalfCorrectAnswerIcon}) {

    const [isClicked, setIsClicked] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isTurned, setIsTurned] = React.useState(false);
    const [zapClass, setZapClass] = React.useState("zapCard");
    const [zapIcon, setZapIcon] = React.useState("play-outline");
    
    function showAnswerResult(){
        setIsClicked(false);
        setIsTurned(false);
    }
    function wrongAnswer(){
        showAnswerResult();
        setZapClass("zapCard wrongAnswer");
        setZapIcon("close-circle");
        countAnswers();
        footerIncorrectAnswerIcon();
         
    }
    function halfCorrectAnswer(){
        showAnswerResult();
        setZapClass("zapCard halfCorrectAnswer");
        setZapIcon("help-circle");
        countAnswers();
        footerHalfCorrectAnswerIcon();
    
    }
    function correctAnswer(){
        showAnswerResult();
        setZapClass("zapCard correctAnswer");
        setZapIcon("checkmark-circle");
        countAnswers();
        footerCorrectAnswerIcon();

    }

    return (
        <>
            {
                isClicked && zapClass === "zapCard" ? null
                    : <div onClick={() => {setIsOpen(true); setIsClicked(true)}} className={zapClass}>
                        <div className="zapContainer">
                            <p>Pergunta {cardNumber} </p>
                            <ion-icon name={zapIcon}></ion-icon>
                        </div>
                    </div>
            }
            {
                isOpen && zapClass === "zapCard" ? <div className="zapClicked">
                    <p>{cardQuestion}</p>
                    <img onClick={() => {setIsTurned(true);setIsOpen(false)}} src="./assets/Vector.png" alt=" turnaround arrow" />
                </div> : null
            }
            {
                isTurned ? <div className="zapClicked">
                    <p>{cardAnswer}</p>
                    <div className="options">
                        <button onClick={wrongAnswer} className="wrong">Não lembrei</button>
                        <button onClick={halfCorrectAnswer} className="halfCorrect">Quase não lembrei</button>
                        <button onClick={correctAnswer} className="correct">Zap!</button>
                    </div>
                </div> : null
            }

        </>
    )
}



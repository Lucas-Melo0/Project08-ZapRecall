import ZapCard from "./ZapCard"
import Footer from "./Footer";
import reactDeck from "../data";
import React from "react";
export default function ZapPage() {
    const initialArray = []
    const [answers, setAnwsers] = React.useState(0);
    const [answersIcon, setAnwsersIcon] = React.useState(initialArray);
    


    function countAnswers(){
        setAnwsers(answers + 1 )
    }
    function correctAnswerIcon(){
        setAnwsersIcon(initialArray => [...initialArray,"checkmark-circle"])
    }


    return (
        <div className="zapPage">
            <header>
                <img src="./assets/logo.png" alt="Lightning bolt" />
                <h1>ZapRecall</h1>
            </header>
            <div className="zaps">
                {reactDeck.map((value,index) => 
                <ZapCard  countAnswers ={countAnswers} 
                cardNumber ={index + 1}
                cardQuestion = {value.question}
                cardAnswer ={value.answer}
                correctAnswerIcon={correctAnswerIcon}/>)
                }
                
            </div>
          <Footer answersIcon ={answersIcon} answers = {answers}/>
        </div>
    )
}
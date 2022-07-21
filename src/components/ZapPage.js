import ZapCard from "./ZapCard"
import Footer from "./Footer";
import reactDeck from "../data";
import React from "react";
export default function ZapPage() {
    
    const [answers, setAnwsers] = React.useState(0);
    const [answersIcon, setAnwsersIcon] = React.useState([]);

    function countAnswers(){
        setAnwsers(answers + 1 )
    }
    function correctAnswerIcon(){
        setAnwsersIcon([...answersIcon,{iconClass:"correctAnswer", iconName:"checkmark-circle"}]) 
    }
    function incorrectAnswerIcon(){
        setAnwsersIcon([...answersIcon,{iconClass:"incorrectAnswer", iconName:"close-circle"}])  
    }
    function halfCorrectAnswerIcon(){
        setAnwsersIcon([...answersIcon,{iconClass:"halfCorrectAnswer", iconName:"help-circle"}]) 
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
                correctAnswerIcon={correctAnswerIcon}
                incorrectAnswerIcon={incorrectAnswerIcon}
                halfCorrectAnswerIcon={halfCorrectAnswerIcon}/>)
                }
                
            </div>
          <Footer answersIcon ={answersIcon} answers = {answers}/>
        </div>
    )
}
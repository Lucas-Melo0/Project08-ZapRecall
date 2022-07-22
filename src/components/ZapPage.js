import ZapCard from "./ZapCard"
import Footer from "./Footer";
import reactDeck from "../data";
import React from "react";
export default function ZapPage({numberOfZaps}){
    
    const [answers, setAnwsers] = React.useState(0);
    const [answersIcon, setAnwsersIcon] = React.useState([]);

    function countAnswers(){
        setAnwsers(answers + 1);
    }
    function footerCorrectAnswerIcon(){
        setAnwsersIcon([...answersIcon,{iconClass:"correctAnswer", iconName:"checkmark-circle"}]);
    }
    function footerIncorrectAnswerIcon(){
        setAnwsersIcon([...answersIcon,{iconClass:"incorrectAnswer", iconName:"close-circle"}]); 
    }
    function footerHalfCorrectAnswerIcon(){
        setAnwsersIcon([...answersIcon,{iconClass:"halfCorrectAnswer", iconName:"help-circle"}]); 
    }

    return (
        <div className="zapPage">
            <header>
                <img src="./assets/logo.png" alt="Lightning bolt" />
                <h1>ZapRecall</h1>
            </header>
            <div className="zaps">
                {reactDeck.map((value,index) => 
                <ZapCard  key ={index} countAnswers ={countAnswers} 
                cardNumber ={index + 1}
                cardQuestion = {value.question}
                cardAnswer ={value.answer}
                footerCorrectAnswerIcon={footerCorrectAnswerIcon}
                footerIncorrectAnswerIcon={footerIncorrectAnswerIcon}
                footerHalfCorrectAnswerIcon={footerHalfCorrectAnswerIcon}/>)
                }
                
            </div>
          <Footer numberOfZaps={numberOfZaps} answersIcon ={answersIcon} answers = {answers}/>
        </div>
    )
}
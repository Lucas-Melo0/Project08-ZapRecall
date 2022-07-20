import ZapCard from "./ZapCard"
import reactDeck from "../data"
export default function ZapPage() {
    return (
        <div className="zapPage">
            <header>
                <img src="./assets/logo.png" alt="Lightning bolt" />
                <h1>ZapRecall</h1>
            </header>
            <div className="zaps">
                {reactDeck.map((value => 
                <ZapCard cardNumber ={value.cardNumber}
                cardQuestion = {value.question}
                cardAnswer ={value.answer}/>)
                )}
                
            </div>
            <footer>
                <p>0/{reactDeck.length} Concluidos</p>
            </footer>
        </div>
    )
}
import { Link } from "react-router-dom";
import reactDeck from "../data";


export default function Footer({ answers, answersIcon, numberOfZaps}) {

    const wrongAnswersNumber = answersIcon.filter(value => value.iconClass === "incorrectAnswer")
    function isThereWrongAnswers() {
        if (wrongAnswersNumber.length > 0 && answersIcon.length === 8) {
            return true;
        }
    }
    function isZeroWrongAnswers() {
        if (wrongAnswersNumber.length === 0 && answersIcon.length === 8) {
            return true;
        }
    }
    function amountOfZaps(){
        let correctZaps = answersIcon.filter(v => v.iconClass === "correctAnswer");
        return correctZaps.length
    }

    return (
        <footer>
            {
                isThereWrongAnswers() ? <div className="finalResult">
                    <div className="resultMessage">
                        <img src="./assets/sad.png" alt="sad emoticon" /> <p>Putz...</p>
                    </div>
                    <p>Ainda faltam alguns...Mas não desanime!</p>
                    <p>Meta {amountOfZaps()}/{numberOfZaps} </p>
                </div> : null
            }
            {
                isZeroWrongAnswers() ? <div className="finalResult">
                    <div className="resultMessage">
                        <img src="./assets/party.png" alt="congratulations emoticon" /> <p>Parabéns!</p>
                    </div>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                    <p>Meta {amountOfZaps()}/{numberOfZaps} </p>
                </div> : null
            }
            <p>{answers}/{reactDeck.length} Concluidos</p>
            <div className="footerIcons">
                {answersIcon.map(value => <ion-icon class={value.iconClass} name={value.iconName}></ion-icon>)}
            </div>
            {
                answersIcon.length === 8 ? <Link to="/">
                <button className="restartRecall">REINICIAR RECALL</button>
            </Link> : null
            }
            

        </footer>
    )
}
import reactDeck from "../data"

export default function Footer({ answers, answersIcon }) {
    return (
        <footer>
            <p>{answers}/{reactDeck.length} Concluidos</p>
            {answersIcon.map(value => <ion-icon class="correctAnswer" name={value}></ion-icon>)}
            

        </footer>
    )
}
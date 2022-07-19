import HomePage from "./components/HomePage"
export default function App() {
    return (
        <>
            {/* <HomePage/> */}
            <div className="zapPage">
                <header>
                    <img src="./assets/logo.png" alt="Lightning bolt" />
                    <h1>ZapRecall</h1>
                </header>
                <div className="zaps">
                    <div className="zapCard">
                        <p>Pergunta 1</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="zapCard">
                        <p>Pergunta 1</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="zapCard">
                        <p>Pergunta 1</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="zapCard">
                        <p>Pergunta 1</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
                <footer>
                    <p>0/4 Concluidos</p>
                </footer>
            </div>

        </>
    )
}



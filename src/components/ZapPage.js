import ZapCard from "./ZapCard"
export default function ZapPage() {
    return (
        <div className="zapPage">
            <header>
                <img src="./assets/logo.png" alt="Lightning bolt" />
                <h1>ZapRecall</h1>
            </header>
            <div className="zaps">
                <ZapCard />
                <ZapCard />
            </div>
            <footer>
                <p>0/4 Concluidos</p>
            </footer>
        </div>
    )
}
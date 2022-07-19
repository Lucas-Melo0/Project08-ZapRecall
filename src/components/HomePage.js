import { Link } from "react-router-dom";
export default function HomePage() {
    return (
        <div className="homePage">
            <img src="./assets/logo.png" alt="Lightning bolt" />
            <h1>ZapRecall</h1>
            <Link to="/ZapPage">
                <button>Iniciar Recall!</button>
            </Link>


        </div>
    )
}
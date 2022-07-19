import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ZapPage from "./components/ZapPage";
export default function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ZapPage" element={<ZapPage />} />
            </Routes>
        </Router>

    )
}



import ReactDom from "react-dom";
import ZapPage from "./components/ZapPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


ReactDom.render(<Router>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ZapPage" element={<ZapPage />} />
    </Routes>
</Router>,document.querySelector(".root"))
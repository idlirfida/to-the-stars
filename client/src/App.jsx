import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from "./pages/HomePage/HomePage.jsx";
import PhinPage from './pages/PhinPage/PhinPage.jsx';
import LiriPage from './pages/LiriPage/LiriPage.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';

function App() {
    return (
        <div className="page-wrapper">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/phin" element={<PhinPage />} />
                    <Route path="/liri" element={<LiriPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

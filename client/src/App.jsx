import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PhinPage from "./pages/PhinPage/PhinPage.jsx";
import LiriPage from "./pages/LiriPage/LiriPage.jsx";
import AuthorsPage from "./pages/AuthorsPage/AuthorsPage.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />}>
                        <Route path="musings" element={<HomePage />} />
                        <Route path="photos" element={<HomePage />} />
                        <Route path="music" element={<HomePage />} />
                    </Route>
                    <Route path="/phin" element={<PhinPage />}>
                        <Route path="musings" element={<PhinPage />} />
                        <Route path="photos" element={<PhinPage />} />
                    </Route>
                    <Route path="/liri" element={<LiriPage />}>
                        <Route path="musings" element={<LiriPage />} />
                        <Route path="photos" element={<LiriPage />} />
                        <Route path="music" element={<LiriPage />} />
                    </Route>
                    <Route path="/authors" element={<AuthorsPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
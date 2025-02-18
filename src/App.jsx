import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Header from './components/header.jsx'
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import AboutMe from "./pages/about-me.jsx";
import Education from "./pages/education.jsx";
import Experience from "./pages/experience.jsx";
import Skills from "./pages/technical-skills.jsx";
import Achievements from "./pages/achievements.jsx";
import Portfolio from "./pages/portfolio.jsx";

// import AOS from "aos/src/js/aos.js";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    const [pageTitle, setPageTitle] = useState("Home");

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Router>
            <Header title={pageTitle} />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home setTitle={setPageTitle} />} />
                    <Route path="/education" element={<Education setTitle={setPageTitle} />} />
                    <Route path="/technical-skills" element={<Skills setTitle={setPageTitle} />} />
                    <Route path="/experience" element={<Experience setTitle={setPageTitle} />} />
                    <Route path="/achievements" element={<Achievements setTitle={setPageTitle} />} />
                    <Route path="/portfolio" element={<Portfolio setTitle={setPageTitle} />} />
                    <Route path="/about-me" element={<AboutMe setTitle={setPageTitle} />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}

export default App

import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import AboutApp from "./pages/AboutApp";
import AboutAuthor from "./pages/AboutAuthor";
import Home from './pages/Home';

function Routing() {
    return(
        <Routes>
            <Route path="/" exact element={<App/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/about/about-app" exact element={<AboutApp/>}/>
            <Route path="/about/about-author" exact element={<AboutAuthor/>}/>
        </Routes>
    )    
}

export default Routing;
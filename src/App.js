import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MealInfo from "./pages/MealInfo";
import Search from "./pages/Search";
import FilterIng from "./pages/Filter-ing";

function App() {
    return (
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/meal/:id" element={<MealInfo/>}/>
                <Route path="/search/:name" element={<Search/>}/>
                <Route path="/ingredient/:ing" element={<FilterIng/>}/>
            </Routes>
    );
}

export default App;

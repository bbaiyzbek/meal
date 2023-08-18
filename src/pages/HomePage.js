import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import axios from "axios";
import Footer from "../components/Footer";
import ProductList from "../components/Product-list";



const HomePage = () => {
    const [meals, setMeals] = useState([])


    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(res => setMeals(res.data.meals))
    }, [])

    return (
        <div>
            <Header/>
            <div className="container">
                <h1 className={'home-desc'}>Latest meals:</h1>
                <ProductList meals={meals}/>
            </div>
            <Footer/>
        </div>
    )
};

export default HomePage

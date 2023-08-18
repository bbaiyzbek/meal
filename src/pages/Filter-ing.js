import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import ProductList from "../components/Product-list";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FilterIng = () => {
    const [meal, setMeal] = useState({})
    const params = useParams()
    const navigate = useNavigate()



    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${params.ing}`)
            .then(res => setMeal(res.data.meals[0]))
    },[params.ing])

    return (
        <div>
            <Header/>
            <div className={'container'}>
                <button className={'btnmeal'} onClick={() => navigate(-1)}>Back</button>
                <h2>{meal.strMeal}</h2>
                <img className={'meal-image'} src={meal.strMealThumb} alt={meal.strMeal}/>
                {/*<ProductList meals={meal}/>*/}
            </div>
            <Footer/>
        </div>
    );
};

export default FilterIng;
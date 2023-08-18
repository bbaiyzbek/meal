import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import ProductList from "../components/Product-list";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FilterIng = () => {
    const [meals, setMeals] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${params.ing}`)
            .then(res => setMeals(res.data.meals))
    }, [params.ing])

    return (
        <div>
            <Header/>
            <div className={'container'}>
                <button className={'btnmeal'} onClick={() => navigate(-1)}>Back</button>
                <ProductList meals={meals}/>
            </div>
            <Footer/>
        </div>
    );
};

export default FilterIng;
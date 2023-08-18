import React, {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useNavigate} from "react-router";
import axios from "axios";
import ProductList from "../components/Product-list";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [meals, setMeals ] = React.useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/search.php?s=${searchParams.get('name')}`)
            .then(res => setMeals(res.data.meals))
    },[searchParams])
    return (
        <div>
            <Header/>
           <div>
               <button onClick={() => navigate(-1)}>Back</button>
               <ProductList meals={meals}/>
           </div>
            <Footer/>
        </div>
    )
}
export default Search

import React, {useEffect} from "react";
// import {useSearchParams} from "react-router-dom";
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import ProductList from "../components/Product-list";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Search = () => {
    const [meals, setMeals] = React.useState([])
    const navigate = useNavigate()
    const params = useParams()


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/search.php?s=${params.name}`)
            .then(res => setMeals(res.data.meals))
    }, [params])
    return (
        <div>
            <Header/>
            <div className={'container'} style={{minHeight: '100vh'}}>
                <button className={'btnmeal'} onClick={() => navigate(-1)}>Back</button>
                <ProductList meals={meals}/>
            </div>
            <Footer/>
        </div>
    )
}
export default Search

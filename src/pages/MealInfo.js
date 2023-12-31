import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";


const MealInfo = () => {
    const [meal, setMeal] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(res => setMeal(res.data.meals[0]))
    }, [params.id])

    const youtube = meal.strYoutube?.split('=')[1]

    return (
        <div>
            <Header/>
            <div className="container" style={{minHeight: '100vh'}}>
                <button className={'btnmeal'} onClick={() => navigate('/')}>Back</button>
                <div>
                    <div className={'meal-info'}>
                        <div>
                            <h2>{meal.strMeal}</h2>
                            <img className={'meal-image'} src={meal.strMealThumb} alt={meal.strMeal}/>
                        </div>
                        <div className={'row'}>
                            {meal.strIngredient1 &&
                                <div className="col-4">
                                    <div className="card">
                                        <Link className={'ing-link'} to={`/ingredient/${meal.strIngredient1}`}>
                                            <img className={'img-ing'}
                                                 src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png`}
                                                 alt=""/>
                                            <h3>{meal.strIngredient1}</h3>
                                        </Link>
                                    </div>
                                </div>
                            }
                            {meal.strIngredient2 &&
                                <div className="col-4">
                                    <div className="card">
                                        <Link className={'ing-link'} to={`/ingredient/${meal.strIngredient2}`}>
                                            <img className={'img-ing'}
                                                 src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient2}.png`}
                                                 alt=""/>
                                            <h3>{meal.strIngredient2}</h3>
                                        </Link>
                                    </div>
                                </div>
                            }
                            {meal.strIngredient3 &&
                                <div className="col-4">
                                    <div className="card">
                                        <Link className={'ing-link'} to={`/ingredient/${meal.strIngredient3}`}>
                                            <img className={'img-ing'}
                                                 src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient3}.png`}
                                                 alt=""/>
                                            <h3>{meal.strIngredient3}</h3>
                                        </Link>
                                    </div>
                                </div>
                            }
                            {meal.strIngredient4 &&
                                <div className="col-4">
                                    <div className="card">
                                        <Link className={'ing-link'} to={`/ingredient/${meal.strIngredient4}`}>
                                            <img className={'img-ing'}
                                                 src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient4}.png`}
                                                 alt=""/>
                                            <h3>{meal.strIngredient4}</h3>
                                        </Link>
                                    </div>
                                </div>
                            }
                            {meal.strIngredient5 &&
                                <div className="col-4">
                                    <div className="card">
                                        <Link className={'ing-link'} to={`/ingredient/${meal.strIngredient5}`}>
                                            <img className={'img-ing'}
                                                 src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient5}.png`}
                                                 alt=""/>
                                            <h3>{meal.strIngredient5}</h3>
                                        </Link>
                                    </div>
                                </div>
                            }
                            {meal.strIngredient6 &&
                                <div className="col-4">
                                    <div className="card">
                                        <Link className={'ing-link'} to={`/ingredient/${meal.strIngredient6}`}>
                                            <img className={'img-ing'}
                                                 src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient6}.png`}
                                                 alt=""/>
                                            <h3>{meal.strIngredient6}</h3>
                                        </Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={'info'}>
                        <p>{meal.strInstructions}</p>
                    </div>
                    <div className={'youtube'}>
                        <iframe width={'550'} height={'315'} title={meal.strMeal}
                                src={`https://www.youtube.com/embed/${youtube}`}></iframe>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default MealInfo

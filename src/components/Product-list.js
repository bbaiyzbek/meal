import React from 'react';
import {Link} from "react-router-dom";

const ProductList = ({meals}) => {
    return (
        <div>
            <div className={'row'}>
                {
                    meals.map((meal, idx) => {
                        return (
                            <div className={'col-3'} key={idx}>
                                <Link className={'link'} to={`/meal/${meal.idMeal}`}>
                                    <div className={"box"}>
                                        <div className={'img-wrapper'}>
                                            <img src={meal.strMealThumb} alt={meal.strMeal}/>
                                        </div>
                                        <h6>{meal.strMeal}</h6>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductList;
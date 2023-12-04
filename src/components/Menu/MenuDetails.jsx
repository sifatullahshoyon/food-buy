import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMealDetails from './SingleMealDetails';

const MenuDetails = () => {
    const {meals} = useLoaderData();
    return (
        <div>
            {
                meals?.map(meal => <SingleMealDetails key={meal.idMeal} meal={meal} />)
            }
        </div>
    );
};

export default MenuDetails;
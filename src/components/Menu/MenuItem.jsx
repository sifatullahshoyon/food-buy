import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb, strInstructions, strCategory } = meal;
  
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={strMealThumb ? strMealThumb : "Image Not Found"}
            alt="Meals Images"
            className="object-cover"
          />
        </figure>
        <div className="card-body font-lato">
          <h2 className="card-title">
            Title : {strMeal ? strMeal : "Not Found"}
          </h2>
          <p>Category: {strCategory ? strCategory : "Not Found"}</p>
          <p>
            Details:{" "}
            {strInstructions.slice(0, 30)
              ? strInstructions.slice(0, 30)
              : "not Found"}
            ....
          </p>
          <div className="card-actions justify-start">
            <Link to={`/menu/${idMeal}`}>
                <button className="btn btn-primary bg-brown border-none hover:bg-orange-400 hover:border-none text-black font-lato">
                View Details
                </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

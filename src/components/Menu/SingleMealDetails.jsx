import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToDb } from "../../utilities/fakeDB";

const SingleMealDetails = ({ meal }) => {
  const [wrap, SetWrap] = useState(true);
  const {
    idMeal, 
    strMealThumb,
    strSource,
    strTags,
    strYoutube,
    strMeal,
    strArea,
    strCategory,
    strInstructions,
  } = meal;

  const handleAddToCart = (id) => {
    addToDb(id);
  };
  
  return (
    <div className="container mx-auto p-5 mt-32">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-3/6">
          <img
            src={strMealThumb ? strMealThumb : "Images Not Found"}
            className=" object-cover w-full"
            alt="Food Images"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-lato">
            {strMeal ? strMeal : "Not Found"}
          </h2>
          <p>
            <span className="font-lato font-bold">Category:</span>{" "}
            {strCategory ? strCategory : "Not Found"}
          </p>
          <p>
            <span className="font-lato font-bold">Area:</span>{" "}
            {strArea ? strArea : "Not Found"}
          </p>
          <p>{strTags ? strTags : "Not Found"}</p>
          <p>
            <span className="font-lato font-bold">Area:</span>{" "}
            {strArea ? strArea : "Not Found"}
          </p>
          <p>
            <span className="font-lato font-bold">Details:</span>{" "}
            {wrap ? (
              <>
                <span>
                  {strInstructions
                    ? strInstructions.substring(0, 100)
                    : "Data Not Found"}
                  ....
                </span>
                <span
                  onClick={() => SetWrap(!wrap)}
                  className="font-semibold text-blue-600 font-lato cursor-pointer"
                >
                  Read More
                </span>
              </>
            ) : (
              <>
                <span>
                  {strInstructions ? strInstructions : "Data Not Found"}
                </span>
                <span
                  onClick={() => SetWrap(!wrap)}
                  className="font-lato cursor-pointer text-blue-600"
                >
                  Read Less
                </span>
              </>
            )}
          </p>
          <p>
            <span className="font-lato font-bold">Source:</span>{" "}
            {strSource ? strSource : "Not Found"}
          </p>
          <a
            href={strYoutube ? strYoutube : "Link Not Found"}
            className="underline text-blue-500 font-lato font-semibold"
          >
            YouTube
          </a>
          <div className="card-actions justify-end">
            <Link to="/menu">
              <button className="btn btn-primary">Back</button>
            </Link>
            <button onClick={() => handleAddToCart(idMeal)} className="btn btn-primary bg-brown border-0 hover:bg-orange-400 font-bold text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMealDetails;

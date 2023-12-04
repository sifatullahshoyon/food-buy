import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu = () => {
  const meals = useLoaderData();
  const navigation = useNavigation();
  const [showAll, setShowAll] = useState(false);
  const itemShowAll = showAll ? meals?.meals : meals?.meals.slice(0, 6);

  const handleSeeAll = () => {
    setShowAll(true);
  };

  if (navigation.state === "loading") {
    return (
      <div className="flex items-center justify-center mt-96 mb-32">
        <span className="loading loading-bars loading-lg text-success"></span>
      </div>
    );
  }

  return (
    <div className="my-28">
      <div className="container mx-auto p-5">
        <div>
          <h1 className="text-center font-lato text-5xl text-brown font-bold mb-10">
            Our Menu
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itemShowAll?.map((meal) => (
              <MenuItem key={meal.idMeal} meal={meal} />
            ))}
          </div>
          <div className="text-center my-8">
            {!showAll && (
              <button
                onClick={handleSeeAll}
                className="btn btn-wide bg-brown hover:bg-orange-400 hover:border-none border-none font-lato font-bold text-black"
              >
                See All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

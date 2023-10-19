"use client";
import React, { useState, useEffect } from 'react';

async function getMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();

    if (data.meals && data.meals.length > 0) {
      const mealDetailsPromises = data.meals.map((meal) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
        ).then((res) => res.json())
      );

      const mealDetails = await Promise.all(mealDetailsPromises);
      return mealDetails.map((detail) => detail.meals[0]);
    }
    return [];
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error.message);
    throw error;
  }
}
const MealIdeas = ({ ingredient }) => {
    const [mealIdeas, setMealIdeas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hoveredMeal, setHoveredMeal] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      setError(null);
  
      getMealIdeas(ingredient)
        .then((fetchedMeals) => {
          setMealIdeas(fetchedMeals);
          setIsLoading(false);
        })
        .catch(() => {
          setError('Failed to fetch meal ideas. Please try again later.');
          setIsLoading(false);
        });
    }, [ingredient]);
  
    const handleHoverMeal = (meal) => {
      setHoveredMeal(meal);
    };
  
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Meal Ideas for {ingredient}</h2>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p className="text-red-500">{error}</p>}
        {!isLoading && !error && mealIdeas.length === 0 && (
          <p>No meal ideas found for {ingredient}.</p>
        )}
        {!isLoading && !error && mealIdeas.length > 0 && (
          <div className="flex">
            <ul className="list-none p-0 mr-4">
              {mealIdeas.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="mb-4 cursor-pointer group relative meal-idea"
                  onMouseEnter={() => handleHoverMeal(meal)}
                  onMouseLeave={() => setHoveredMeal(null)}
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    width="75"
                    className="mb-2 w-24 h-24 object-cover transition-transform transform scale-100 group-hover:scale-110 group-hover:opacity-100 opacity-80"
                  />
                  <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                </li>
              ))}
            </ul>
            {hoveredMeal && (
              <div className="bg-orange-600 bg-opacity-75 p-4 rounded-lg w-72">
                <h4 className="font-semibold text-lg mb-2">
                  Ingredients for {hoveredMeal.strMeal}:
                </h4>
                <ul className="list-disc pl-5">
                  {[
                    hoveredMeal.strIngredient1,
                    hoveredMeal.strIngredient2,
                    hoveredMeal.strIngredient3,
                    hoveredMeal.strIngredient4,
                    hoveredMeal.strIngredient5,
                  ]
                    .filter((ingredient) => ingredient) // Filter out empty ingredients
                    .map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default MealIdeas;
  

  //THIS IS THE GOOD ONE!!!

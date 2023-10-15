import classes from "./AvalableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvalableMeals = () => {
  const [meals,setMeals] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const [httpError,setHttpError] = useState();

  useEffect(()=>{
    const fetchData = async() => { 
      const response = await fetch('https://react-practic-762f2-default-rtdb.firebaseio.com/meals.json')
      const responseData = await response.json()

      if(!response.ok){
        throw new Error('Something Went Wrong')
      }

      const loadedData = [];

      for(const key in responseData){
        loadedData.push({
          id: key,
          name: responseData[key].name,
          description : responseData[key].description,
          price: responseData[key].price
        });
      }
      setMeals(loadedData);
      setIsLoading(false)
    }
    fetchData().catch((error)=>{
      setIsLoading(false)
      setHttpError(error.message)
    });
  })

  if(isLoading){
    return <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if(httpError){
    return <section className={classes.mealsHttpError}>
      <p>{httpError}</p>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      discription={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvalableMeals;

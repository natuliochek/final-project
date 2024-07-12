import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import MyList from './MyList';
import MyMeatsAndingredients from './MyMealsAndIngredients';

function App() {

  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);

  const [selectedDay, setSelectedDay] = useState(false);

  useEffect (()=> {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

  const addMeal = ()=> {
    const newMeal = {
      title: "today is...",
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log(newMeal)
  }

  const deleteDay = (mealID) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealID))
  }

  const updateDay = (myUpdatedMeal)=> {
    const updatedMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans(updatedMeals)
  }

  const getActiveMeal = ()=> {
    return mealPlans.find(({id}) => id === selectedDay)
  }


  return (
    <div className="App">
      <MyList 
      mealPlans = {mealPlans} 
      addMeal = {addMeal} 
      deleteDay = {deleteDay} 
      selectedDay = {selectedDay} 
      setSelectedDay = {setSelectedDay} />

      <MyMeatsAndingredients 
      selectedDay={getActiveMeal()} 
      updateDay={updateDay}
      />
    </div>
  );
}

export default App;

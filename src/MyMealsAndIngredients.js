const MyMeatsAndingredients = ({selectedDay, updateDay})=> {

    const editMyMeal = (myInput, value)=> {
        updateDay({
            ...selectedDay, 
            [myInput]: value
        })
    }

    if (!selectedDay) return <p>Plan your week ahead of time!</p>

    return(
        <div className="whole-plan">
            <div className="meal-editing">

                <input
                className="myInput"
                type="text"
                placeholder="Today is ..." 
                id="title" 
                value= {selectedDay.title} 
                onChange={(e) => editMyMeal("title", e.target.value)}
                />

            </div>

            <textarea
            placeholder="Write your meal plan here" 
            id="mealForADay" 
            value={selectedDay.mealForADay} 
            onChange={(e)=> editMyMeal("mealForADay", e.target.value)}
            />

            <textarea
            placeholder="List of ingredients" 
            id="mealForADay" 
            value={selectedDay.ingredients} 
            onChange={(e)=> editMyMeal("ingredients", e.target.value)}
            />
        </div>
    )
}
export default MyMeatsAndingredients;
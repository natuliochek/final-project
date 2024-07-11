function MyList ({mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay}) {
    return(
        <div>

            <div>
                <h1>Weekly Meal Plan Ideas</h1>
                <button onClick={ addMeal } className="button-add">ADD</button>
            </div>

            <div>
                {mealPlans.map(({id, title, mealForADay}) => (
                    <div className = {`meal ${id === selectedDay ? "selected" : "default" }`} 
                    onClick={()=> setSelectedDay(id)}
                    >
                        <p className="title">{title}</p>
                        <p>{mealForADay}</p>
                        <button className="button-delete"
                        onClick = { ()=> deleteDay(id) } >
                        DELETE
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default MyList;
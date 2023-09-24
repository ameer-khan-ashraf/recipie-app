import React, { useEffect, useState } from 'react'

const useFavouriteMeal = () => {
    const [favouriteMeals, setFavouriteMeals] = useState<any>([])
    const [favouriteMealIds,setFavouriteMealIds] = useState<any>([])
    useEffect(() => {
        const favouriteString = localStorage.getItem('favouriteMeals')
        if(favouriteString){
            const favouriteArray = JSON.parse(favouriteString)
            setFavouriteMeals(!!favouriteArray.length?favouriteArray:[])
            setFavouriteMealIds(favouriteArray.map((meal:any)=>meal.idMeal))
        }
        const checkUserData = (event:any) =>{
            if(event.key === 'favouriteMeals'){
                const favouriteArray = JSON.parse(event.newValue)
                setFavouriteMeals(favouriteArray)
            }
        }
        window.addEventListener('storage', checkUserData)

        return () => {
            window.removeEventListener('storage', checkUserData)
        }
      }, [])
      const onClickLike = (meal:any) =>{
        console.log(meal)
        let newFav
        if(favouriteMealIds.includes(meal.idMeal)){
            newFav = favouriteMeals.filter((favMeal:any)=>favMeal.idMeal!==meal.idMeal)
        }
        else{
            newFav = [...favouriteMeals,{strMeal:meal.strMeal,idMeal:meal.idMeal,strMealThumb:meal.strMealThumb}]
        }
        const string = JSON.stringify(newFav)
        localStorage.setItem('favouriteMeals',string)
        setFavouriteMeals(newFav)
        setFavouriteMealIds(newFav.map((meal:any)=>meal.idMeal))
    }
  return { onClickLike,favouriteMeals,favouriteMealIds}
}

export default useFavouriteMeal
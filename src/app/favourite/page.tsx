'use client'
import RecipieCard from '@/components/recipie-card'
import useFavouriteMeal from '@/hooks/useFavouriteMeal'
import React from 'react'

const FavouriteMeals = () => {
    const {onClickLike,favouriteMealIds,favouriteMeals} = useFavouriteMeal()
  return (
    <div className="overflow-y-scroll container flex flex-col">
      <div className='text-center py-10 font-bold text-4xl'>Favourites</div>
        <div className="grid grid-cols-2 gap-5">
            {
                !!favouriteMeals.length? 
                favouriteMeals.map((meal:any)=>{
                    return <RecipieCard key={meal.idMeal} favouriteMeals={favouriteMealIds} onClickLike={onClickLike} meal={meal}/>
                })
                :`No Favourites Added!`
            }
        </div>
    </div>
  )
}

export default FavouriteMeals
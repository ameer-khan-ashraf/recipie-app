'use client'
import RecipieCard from '@/components/recipie-card'
import useFavouriteMeal from '@/hooks/useFavouriteMeal'
import Link from 'next/link'
import React from 'react'

const FavouriteMeals = () => {
    const {onClickLike,favouriteMealIds,favouriteMeals} = useFavouriteMeal()
  return (
    <div className="overflow-y-scroll container flex flex-col">
      <div className='text-center py-10 font-bold text-4xl'>Favourites</div>
      {
        !!favouriteMeals.length? 
        <div className="grid grid-cols-2 gap-5">
            {
                
                favouriteMeals.map((meal:any)=>{
                    return <RecipieCard key={meal.idMeal} favouriteMeals={favouriteMealIds} onClickLike={onClickLike} meal={meal}/>
                })
                
            }
        </div>:
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] flex flex-col justify-center items-center text-center gap-6'>
            <div className='flex flex-col gap-1'>
                <span className='text-blue-500 text-md'>
                    No favourites
                </span>
                <span className='text-md text-gray-400'>
                    Go like some Recipies!
                </span>
            </div>
            <Link className='bg-blue-600 px-8 py-2 w-fit rounded-md text-white font-semibold' href='/menu'>
                Menu
            </Link>
        </div>
      }
    </div>
  )
}

export default FavouriteMeals
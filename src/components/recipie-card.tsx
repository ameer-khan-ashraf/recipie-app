import React from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'

const RecipieCard = ({meal,onClickLike,favouriteMeals}:any) => {
  return (
    <div className="border border-blue-100 flex rounded-lg items-center gap-4">
        <Image src={meal.strMealThumb} alt="meal-img" className="rounded-l-lg" width={100} height={100}/>
        <span className='font-semibold text-2xl line-clamp-1'>{meal.strMeal}</span>
        <div className="ml-auto px-4">
            <button onClick={()=>onClickLike(meal)}>
                <Heart className={favouriteMeals.includes(meal.idMeal)?`fill-current text-blue-200`:''}/>
            </button>
        </div>
    </div>
  )
}

export default RecipieCard
'use client'
import LoadingSpinner from "@/components/loading-spinner"
import RecipieCard from "@/components/recipie-card"
import useFavouriteMeal from "@/hooks/useFavouriteMeal"
import { mealsFetcher } from "@/service"
import useSWR from "swr"

export default function Page({params}:{params:{category:string}}){
    const{data,isLoading} = useSWR(params.category,mealsFetcher) 
    const {onClickLike, favouriteMealIds} = useFavouriteMeal()

    if(isLoading){
        return <LoadingSpinner/>
    }

    return <div className="overflow-y-scroll container flex flex-col">
      <div className='text-center py-10 font-bold text-4xl'>{params.category} Recipies</div>
        <div className="grid lg:grid-cols-2 gap-5">
            {
                !!data.length? 
                data.map((meal:any)=>{
                    return <RecipieCard key={meal.idMeal} favouriteMeals={favouriteMealIds} onClickLike={onClickLike} meal={meal}/>
                })
                :`No Meals available for ${params.category}!`
            }
        </div>
    </div>
}
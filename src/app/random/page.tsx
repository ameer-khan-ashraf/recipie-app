'use client'

import React, { useEffect } from 'react'
import useSWR from 'swr'
import { randomMealFetcher } from '../../service'
import { RANDOM_MEAL } from '../../constants'
import Image from 'next/image'
import { Heart, RefreshCcw } from 'lucide-react'
import useFavouriteMeal from '@/hooks/useFavouriteMeal'
import LoadingSpinner from '@/components/loading-spinner'

const RandomMeal = () => {
    const {data,error,isLoading, mutate, isValidating} = useSWR(RANDOM_MEAL,randomMealFetcher,{revalidateOnFocus:false})
    const {onClickLike,favouriteMealIds} = useFavouriteMeal()
    
    if(isLoading||isValidating) return <LoadingSpinner/>
    
    return (
        <div className='container flex flex-col justify-center items-center gap-4 py-10'>
            <div className='border rounded-3xl w-[400px]'>
                <Image src={data.strMealThumb} className='object-cover rounded-t-3xl' width={400} height={300} alt="category_img" />
                <div className=' rounded-b-3xl flex flex-col gap-5 px-10 py-4 border-t'>
                  <div className='flex flex-col gap-4'>
                    <span className='font-semibold text-xl text-blue-900'>{data.strMeal}</span>
                    <span className='text-sm line-clamp-5'>{data.strInstructions}</span>
                  </div>
                    <div className="ml-auto">
                        <button onClick={()=>onClickLike(data)}>
                            <Heart className={favouriteMealIds.includes(data.idMeal)?`fill-current text-blue-200`:''}/>
                        </button>
                    </div>
                </div>
            </div>
            <button disabled={isValidating} onClick={mutate} className="w-fit flex gap-2 border px-8 py-4 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg"><RefreshCcw/> Regenerate</button>
        </div>
    )
}

export default RandomMeal
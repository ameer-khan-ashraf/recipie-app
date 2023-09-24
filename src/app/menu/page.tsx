'use client'

import React, { useEffect } from 'react'
import useSWR from 'swr'
import { CATEGORIES } from '../../constants'
import { mealCategoriesFetcher } from '../../service'
import Link from 'next/link'
import Image from 'next/image'
import LoadingSpinner from '@/components/loading-spinner'

const Menu = () => {

    const {data,isLoading} = useSWR(CATEGORIES,mealCategoriesFetcher)
    if(isLoading) return <LoadingSpinner/>

  return (
    <div className='flex flex-col gap-4 container'>
      <div className='text-center py-10 font-bold text-4xl'>Choose A Category</div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {!!data?.length?
        data.map((category:any)=>{
            return <div className='border rounded-3xl' key={category.idCategory}>
              <Image src={category.strCategoryThumb} className='object-cover w-full rounded-t-3xl' width={400} height={200} alt="category_img" />
                <div className=' rounded-b-3xl flex flex-col gap-10 px-10 py-8 border-t'>
                  <div className='flex flex-col gap-4'>
                    <span className='font-semibold text-3xl text-blue-900'>{category.strCategory}</span>
                    <span className='text-xl line-clamp-2'>{category.strCategoryDescription}</span>
                  </div>
                  <Link className=' px-4 py-2 text-blue-700 border border-blue-700 hover:bg-blue-50 w-fit rounded-md' href={`/menu/${category.strCategory}`}>View Recipies</Link>
                </div>
            </div>
        })
        :
        <div>No Categories Available!</div>}
      </div>
    </div>
  )
}

export default Menu
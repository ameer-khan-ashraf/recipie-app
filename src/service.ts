import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
    timeout: 1000
});

export const randomMealFetcher = () => instance.get('random.php').then((res)=>{
    return res.data.meals[0]
})

export const mealCategoriesFetcher = () => instance.get('categories.php').then((res)=>{
    return res.data.categories
})

export const mealsFetcher = (category:string) => instance.get(`filter.php?c=${category}`).then((res)=>{
    return res.data.meals
})
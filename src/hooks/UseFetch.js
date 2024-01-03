// custom hooks - function

import { useEffect, useState } from "react"


const useFetch = (url)=>{
    const [data , setdata] = useState(null)

// call the fetch when the page is loads
    useEffect(()=>{
        fetch(url).then(res=>{
            //json() is use to remove unnesassary data
            res.json().then(result=>{
                setdata(result.products)

            })
        })
    },[])
    return data
}

export default useFetch;
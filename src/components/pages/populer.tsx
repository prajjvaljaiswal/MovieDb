
// import usePopularMovies from '@/hooks/usePopularMovies'

import { addPopularMovies } from "@/utils/movieSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Button } from "../ui/button"

const Populer = () => {
  console.log("popular")
  const [change, setChange] = useState(false)

  const dispatch = useDispatch()
    const Api_key = process.env.API_KEY
    console.log(Api_key)
    const getPopularMovies = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`);
    const json = await data.json()
    console.log(json)
    dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        console.log("useEffect")
    },[change])

    const handelButton = ()=>{
      setChange(!change)
    }
  
  return (
    <div className="text-white">populer
      <Button onClick={handelButton}>Hello</Button>
    </div>
  )
}

export default Populer
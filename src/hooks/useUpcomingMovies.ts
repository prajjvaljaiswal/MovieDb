import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies=()=>{
    const dispatch = useDispatch()
    const Api_key = import.meta.env.VITE_API_KEY
    console.log(Api_key)
    const getUpcomingMovies = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`);
    const json = await data.json()
    console.log(json)
    dispatch(addUpComingMovies(json.results));
    }
    useEffect(()=>{
        getUpcomingMovies()
    },[])
}

export default useUpcomingMovies;
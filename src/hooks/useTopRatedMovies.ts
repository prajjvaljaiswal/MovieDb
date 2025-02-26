import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies=()=>{
    const dispatch = useDispatch()
    const Api_key = import.meta.env.VITE_API_KEY
    console.log(Api_key)
    const getTopRatedMovies = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`);
    const json = await data.json()
    console.log(json)
    dispatch(addTopRatedMovies(json.results));
    }
    useEffect(()=>{
        getTopRatedMovies()
    },[])
}

export default useTopRatedMovies;
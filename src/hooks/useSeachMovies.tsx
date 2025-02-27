import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useSearchMovies=(name: string)=>{
    const dispatch = useDispatch()
    const Api_key = import.meta.env.VITE_API_KEY
    const getPopularMovies = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${name}&page=1`);
    const json = await data.json()
    dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
        getPopularMovies()
        return (()=>{})
    },[])
}

export default useSearchMovies;
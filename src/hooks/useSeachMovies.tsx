import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useSearchMovies=(name: string)=>{
    const dispatch = useDispatch()
    // console.log(name)
    const Api_key = import.meta.env.VITE_API_KEY
    // console.log(Api_key)
    const getPopularMovies = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${name}&page=1`);
    const json = await data.json()
    console.log(json)
    dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
        getPopularMovies()
    },[])
}

export default useSearchMovies;
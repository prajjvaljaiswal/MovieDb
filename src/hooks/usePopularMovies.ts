import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
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
        getPopularMovies()
    },[])
}

export default usePopularMovies;
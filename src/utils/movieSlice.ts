import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "@/type/movie";

interface MovieState {
    nowPlayingMovies: Movie[];
    popularMovies: Movie[];
    topRatedMovies: Movie[];
    upComingMovies: Movie[];
  }
  
  const initialState: MovieState = {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
  };

const movieSlice = createSlice(
    {
        name : "movie",
        initialState,
        reducers : {
            addMovies(state,action: PayloadAction<Movie[]>){
                state.nowPlayingMovies = action.payload;
            },
            addPopularMovies(state, action){
                state.popularMovies = action.payload;
            },
            addTopRatedMovies(state, action){
                state.topRatedMovies = action.payload;
            },
            addUpComingMovies(state, action){
                state.upComingMovies = action.payload;
            }
        }
    }
)

export const {addMovies, addPopularMovies, addTopRatedMovies, addUpComingMovies} = movieSlice.actions;

export default movieSlice.reducer;
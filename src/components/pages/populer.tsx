import React from 'react'
import usePopularMovies from '@/hooks/usePopularMovies'
import { Header } from "../Header"
import MovieCard from "@/components/pages/DmovieCard"
import { RootState } from '@/utils/appStore'
import { useSelector } from 'react-redux'

const Populer: React.FC = () => {
  console.log("popular")
  usePopularMovies();
  const movies = useSelector((state: RootState) => state.movie.popularMovies);
  if(!movies){
    return
  }
  // const movies = useSelector((store: RootState)=>{store.movie.popularMovies})
  
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header/>
      <main className="container mx-auto px-4 py-8">
        {/* <h1 className="text-3xl mb-6 text-center">Popular Movies</h1> */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {(movies).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Populer
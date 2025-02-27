import React from "react";
import usePopularMovies from "@/hooks/usePopularMovies";
import { Header } from "../Header";
import MovieCard from "@/components/pages/DmovieCard";
import { RootState } from "@/utils/appStore";
import { useSelector } from "react-redux";
import { Movie } from "@/type/movie";

const Populer: React.FC = () => {
  console.log("popular");
  usePopularMovies();

  const movies: Movie[] = useSelector(
    (state: RootState) => state.movie.popularMovies
  );
  if (!movies || movies.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-900 text-white flex justify-center items-center">
        <p className="text-lg text-zinc-400">No popular movies available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* <h1 className="text-3xl mb-6 text-center">Popular Movies</h1> */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Populer;

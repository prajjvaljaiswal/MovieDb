import { Header } from "../Header";
import { useParams } from "react-router-dom";
import { Movie } from "@/type/movie";
import useSearchMovies from "@/hooks/useSeachMovies";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/appStore";
import MovieCard from "./DmovieCard";

const Browse = () => {
  const { name } = useParams<{ name: string }>();
  const movies: Movie[] = useSelector(
    (state: RootState) => state.movie.popularMovies
  );
  // if (!movies || movies.length === 0) {
  //   return (
  //     <div className="min-h-screen bg-zinc-900 text-white ">
  //       <Header />
  //       <div className="flex justify-center items-center">
  //         <p className="text-lg text-zinc-400">
  //           No movies available of this name.
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }
  if (!name) return;
  useSearchMovies(name);
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {movies && movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Browse;

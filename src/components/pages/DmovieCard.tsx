import React from "react";
import { Movie } from "@/type/movie";
import { useNavigate } from "react-router-dom";

interface MovieProps {
  movie: Movie
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  const navigate = useNavigate()
  const handleMovieClick = () => {
    navigate(`/movie/${movie.id}`);
  }
  return (
    <div key={movie.id}
    onClick={() => handleMovieClick()}
    className="group flex cursor-pointer flex-col gap-2">
      <div className="aspect-[2/3] overflow-hidden rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <h2 className="text-center text-sm font-medium text-white">{movie.title}</h2>
      <div className="text-center text-sm text-zinc-400">Rating: {movie.vote_average?.toFixed(1)}</div>
    </div>
  );
};

export default MovieCard;

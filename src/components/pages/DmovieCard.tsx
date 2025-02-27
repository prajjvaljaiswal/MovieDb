import React from "react";

interface MovieProps {
  movie: {
    id: number;
    title?: string;
    poster_path?: string;
    vote_average?: number;
  };
}

const MovieCard: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <div className="aspect-[2/3] overflow-hidden rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <h2 className="text-center text-sm font-medium text-white">{movie.title}</h2>
      <div className="text-center text-sm text-zinc-400">Rating: {movie.vote_average}</div>
    </div>
  );
};

export default MovieCard;

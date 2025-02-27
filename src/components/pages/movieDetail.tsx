import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Header";
import { Movie } from "@/type/movie";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ActorCard from "../ActorCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/utils/appStore";
import { addCast } from "@/utils/movieSlice";

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
//   const [cast, setCast] = useState<Cast | null>(null);
    const cast = useSelector((state: RootState)=> state.movie.cast) || []
    const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      setLoading(true);
      const Api_key = import.meta.env.VITE_API_KEY;
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`
      );
      const json = await data.json();
      setMovie(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCast = async () => {
    try {
      const Api_key = import.meta.env.VITE_API_KEY;
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`
      );
      const json = await data.json();
    //   setCast(json.cast);
      dispatch(addCast(json.cast))
    //   console.log(json.cast);
      console.log(cast);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchCast();
  }, []);

  const PrimaryPannel: React.FC = () => {
    if (!movie) return <div>Loading...</div>;
    return (
      <div className="relative">
        <div className="absolute inset-0 z-10 ">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-transparent to-transparent" />
        </div>
        <div className="relative aspect-[2.4/1] w-full overflow-hidden">
          <img
            src={
              `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` ||
              "/placeholder.svg"
            }
            alt=""
            width={1920}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="mx-auto max-w-7xl px-4 pb-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:gap-8 ">
              <div className="relative w-32 shrink-0 md:w-40">
                <div className="absolute -inset-4 bg-gradient-to-r from-zinc-900 to-transparent rounded-lg" />
                <Card className="relative overflow-hidden border-0">
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500${movie.poster_path}` ||
                      "/placeholder.svg"
                    }
                    alt={movie.title}
                    width={160}
                    height={240}
                    className="aspect-[2/3] h-full w-full object-cover"
                  />
                </Card>
              </div>

              <div className="flex-1 relative">
                <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                  {movie.title}
                </h1>
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-300">
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{movie.vote_average?.toFixed(1)}</span>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-4 bg-zinc-700"
                  />
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{movie.runtime} min</span>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-4 bg-zinc-700"
                  />
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{movie.release_date}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <Badge
                      key={genre.id}
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      {loading && <div>Loading...</div>}
      <PrimaryPannel />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-white">Overview</h2>
          {movie && <p className="text-zinc-300">{movie.overview}</p>}
        </section>
        <section>
          <h2 className="mb-6 text-xl font-semibold text-white">Cast</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {cast && cast.map((actor) => (
              <ActorCard key={actor.id} actor={actor} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieDetail;

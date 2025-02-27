// import { RootState } from "@/utils/appStore";
// // import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const MovieCard = () => {
//     const movies: any  = useSelector((store: RootState) => store.movie.popularMovies) 
//     if(!movies){
//         return
//     }
// //   if (!movies) {
// //     return (
// //       <div className="mt-12 text-center text-zinc-400">
// //         No movies found. Try a different category or search term.
// //       </div>
// //     );
// //   }
// //   const { id, title, poster_path, vote_average } = movies ?? {};
//   const handleMovieClick = (id: number) => {
//     console.log(id)
//   };
//   //     const [movies, setMovies] = useState<Movie[]>(movieData)
//   //   const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {!movies && (
//         <div className="mt-12 text-center text-zinc-400">
//           No movies found. Try a different category or search term.
//         </div>
//       )}
//       <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
//           {movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="flex cursor-pointer flex-col gap-2"
//               onClick={() => handleMovieClick(movie.id)}
//             >
//               <div className="aspect-[2/3] overflow-hidden rounded-lg">
//                 <img
//                   src={"https://image.tmdb.org/t/p/w500"+ movie.poster_path}
//                   alt={movie.title}
//                   width={300}
//                   height={450}
//                   className="h-full w-full object-cover transition-transform hover:scale-105"
//                 />
//               </div>
//               <h2 className="text-center text-sm font-medium text-white">{movie.title}</h2>
//               <div className="text-center text-sm text-zinc-400">Rating: {movie.vote_average}</div>
//             </div>
//           ))}
//         </div>

//       {/* <div
//         key={id}
//         className="flex cursor-pointer flex-col gap-2"
//         onClick={() => handleMovieClick(id)}
//       >
//         <div className="aspect-[2/3] overflow-hidden rounded-lg">
//           <image
//                   src={movie.posterUrl || "/placeholder.svg"}
//                   alt={movie.title}
//                   width={300}
//                   height={450}
//                   className="h-full w-full object-cover transition-transform hover:scale-105"
//                 />
//         </div>
//         <h2 className="text-center text-sm font-medium text-white">{title}</h2>
//         <div className="text-center text-sm text-zinc-400">
//           Rating: {vote_average}
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default MovieCard;

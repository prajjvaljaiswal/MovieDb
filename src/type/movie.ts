export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genres: {
    id: number;
    name: string
  }[];
  id: number;
  original_language: string;
  title?: string;
  runtime: number;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface Cast {
  adult: boolean;
  cast_id: number;
  character?: string;
  credit_id?: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    vote_average?: number;
    vote_count?: number;
  }
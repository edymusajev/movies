export interface Genre {
  id: number;
  name: string;
}
export interface Creator {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Person {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

export interface Cast extends Person {
  original_name: string;
  character: string;
  credit_id: string;
  order: number;
}
export interface Crew extends Cast {}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
}

export interface Trailer {
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  id: string;
  official: boolean;
  published_at: string;
}

interface Content {
  id: number;
  poster_path: string;
  overview: string;
  genres: Genre[];
  backdrop_path: string;
  vote_average: number;
  media_type: string;
  tagline: string;
  created_by: Creator[];
  credits: Credits;
}

export interface Movie extends Content {
  type: 'movie';
  title: string;
  release_date: string;
  trailer: string;
  runtime: number;
}

export interface Series extends Content {
  type: 'tv';
  name: string;
  first_air_date: string;
  episode_run_time: number[];
}

// export type Content = Movie & Show;
export interface ContentList extends Array<Content> {}
export interface MovieList extends Array<Movie> {}
export interface SeriesList extends Array<Series> {}

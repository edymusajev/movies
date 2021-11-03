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

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: number;
}
export interface Crew extends Cast {}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
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
  title: string;
  release_date: string;
  trailer: string;
  runtime: number;
}

export interface Series extends Content {
  name: string;
  first_air_date: string;
  episode_run_time: number[];
}

// export type Content = Movie & Show;
export interface ContentList extends Array<Content> {}

// {
//     "adult": false,
//     "backdrop_path": "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
//     "genre_ids": [
//         878,
//         28
//     ],
//     "id": 580489,
//     "original_language": "en",
//     "original_title": "Venom: Let There Be Carnage",
//     "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
//     "popularity": 7933.523,
//     "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
//     "release_date": "2021-09-30",
//     "title": "Venom: Let There Be Carnage",
//     "video": false,
//     "vote_average": 7,
//     "vote_count": 1106
// }

// {
//   "id": 1294471,
//   "credit_id": "61235265886348007e36f84c",
//   "name": "Hwang Dong-hyuk",
//   "gender": 2,
//   "profile_path": "/xyr3b04ayyJtA5ZN3L0Af10WKIR.jpg"
// }

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

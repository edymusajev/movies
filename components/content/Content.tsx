import { Movie, Series } from '../../interfaces/Movie';
import { Description } from './Description';
import { Header } from './Header';

interface ContentProps {
  movie?: Movie;
  series?: Series;
}

export const Content = ({ movie, series }: ContentProps) => {
  // If the data is a series it contains the name property
  if (series) {
    return (
      <div>
        <Header background={series.backdrop_path} poster={series.poster_path} />
        <Description
          title={series.name}
          release_date={series.first_air_date}
          user_score={series.vote_average}
          duration={series.episode_run_time[0]}
          genres={series.genres}
          tagline={series.tagline}
          overview={series.overview}
          created_by={series.created_by}
        />
      </div>
    );
  } else if (movie) {
    return (
      <div>
        <Header background={movie.backdrop_path} poster={movie.poster_path} />
        <Description
          title={movie.title}
          release_date={movie.release_date}
          user_score={movie.vote_average}
          duration={movie.runtime}
          genres={movie.genres}
          tagline={movie.tagline}
          overview={movie.overview}
          created_by={movie.created_by}
        />
      </div>
    );
  } else {
    return <div>No Data</div>;
  }
  //   return (
  //     <div>
  //       <Header background={data.backdrop_path} poster={data.poster_path} />
  //       <Description
  //         title={data.media_type === 'movie' ? data.title : data.name}
  //         release_date={data.media_type === 'movie' ? data.release_date : data.first_air_date}
  //         user_score={data.vote_average}
  //         duration={data.media_type === 'movie' ? data.runtime : data.episode_run_time[0]}
  //         genres={data.genres}
  //       />
  //     </div>
  //   );
};

import { Movie, Series } from '../../interfaces/Movie';
import { CastList } from './CastList';
import { Description } from './Description';
import { Header } from './Header';
import { RelatedList } from './RelatedList';

interface ContentProps {
  movie?: Movie;
  series?: Series;
}

export const Content = ({ movie, series }: ContentProps) => {
  let description;

  if (series) {
    description = (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 md:py-8">
          <Header background={series.backdrop_path} poster={series.poster_path} />
          <div className="md:col-span-3">
            <Description
              type={series.type}
              id={series.id}
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
        </div>

        <CastList cast={series.credits.cast} series />
        <RelatedList id={series.id} />
      </div>
    );
  } else if (movie) {
    description = (
      <div>
        <div className="flex flex-row">
          <Header background={movie.backdrop_path} poster={movie.poster_path} />
          <Description
            type={movie.type}
            id={movie.id}
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

        <CastList cast={movie.credits.cast} />
        <RelatedList id={movie.id} />
      </div>
    );
  }

  return <div className="">{description}</div>;
};

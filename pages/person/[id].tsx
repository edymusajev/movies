import { GetServerSideProps } from 'next';
import React from 'react';
import { Heading } from '../../components/Heading';
import { Layout } from '../../components/Layout';
import { Link } from '../../components/Link';
import Poster from '../../components/Poster';
import { MovieList, Person, SeriesList } from '../../interfaces/Movie';
import { getPersonGender } from '../../services/getPersonGender';

interface Props {
  data: Person;
  casting: MovieList | SeriesList;
}

const Description = (props: { term: string; details: string }) => {
  const { term, details } = props;
  return (
    <div className="py-2">
      <dt className="font-medium text-sm text-gray-700">{term}</dt>
      <dd>{details ? details : '-'}</dd>
    </div>
  );
};

const ReadMoreText = (props: { text: string }) => {
  const { text } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMore = () => setIsOpen(true);
  return (
    <div className="relative mt-2">
      <p>{isOpen ? text : text.substring(0, 420)}</p>
      <div className="absolute bottom-0 flex justify-end w-full bg-gradient-to-l from-white via-white">
        {text.length > 420 && (
          <button className="font-semibold" onClick={toggleMore}>
            {!isOpen && 'Read more'}
          </button>
        )}
      </div>
    </div>
  );
};

interface HorizontalShowListProps {
  showList: MovieList | SeriesList;
}

const HorizontalShowList = (props: HorizontalShowListProps) => {
  const { showList } = props;
  const renderList = () => {
    return showList.map((show) => (
      <Link key={show.id} href={show.type === 'movie' ? `/movie/${show.id}` : `/tv/${show.id}`}>
        <div className="hover:cursor-pointer">
          <div className="w-32 h-48 flex-none">
            <Poster src={show.poster_path} />
          </div>
          <p className="text-sm mt-2">{show.type === 'movie' ? show.title : show.name}</p>
        </div>
      </Link>
    ));
  };
  return <div className="flex overflow-x-scroll space-x-4">{showList && renderList()}</div>;
};

const PersonPage = (props: Props) => {
  const { data, casting } = props;
  console.log(data);
  console.log(casting);

  return (
    <Layout>
      <div className="flex flex-col items-center py-8">
        <div className="w-40 h-40 mb-8">
          <Poster src={`${data.profile_path}`} />
        </div>
        <Heading size={Heading.size.LARGE}>{data.name}</Heading>
      </div>

      <div className="space-y-4 mb-4">
        <div>
          <Heading size={Heading.size.MEDIUM}>Personal Info</Heading>
          <dl>
            <Description term="Known for" details={data.known_for_department} />
            <Description term="Gender" details={getPersonGender(data.gender)} />
            <Description term="Birthday" details={data.birthday} />
            <Description term="Place of birth" details={data.place_of_birth} />
          </dl>
        </div>

        <div>
          <Heading size={Heading.size.MEDIUM}>Biography</Heading>
          <ReadMoreText
            text={data.biography ? data.biography : `We don't have a biography for ${data.name}`}
          />
        </div>

        <div className="space-y-2">
          <Heading size={Heading.size.MEDIUM}>Known For</Heading>
          <HorizontalShowList showList={casting} />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const personId = context.params?.id;
  const personData = await fetch(
    `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.MOVIES_API}&language=en-US`
  ).then((res) => res.json());
  const movieCasting = await fetch(`
  https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.MOVIES_API}&language=en-US
  `).then((res) => res.json());
  const tvCasting = await fetch(`
  https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=${process.env.MOVIES_API}&language=en-US
  `).then((res) => res.json());

  const casting = movieCasting.cast
    .concat(tvCasting.cast)
    .filter(
      (show: any, index: number, self: any) =>
        index === self.findIndex((t: any) => t.place === show.place && t.name === show.name)
    )
    .sort((a: any, b: any) => {
      return b.popularity - a.popularity;
    })
    .map((show: any) => {
      return {
        ...show,
        type: show.title ? 'movie' : 'tv',
      };
    });
  return {
    props: {
      data: personData,
      casting,
    },
  };
};

export default PersonPage;

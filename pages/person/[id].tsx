import { GetServerSideProps } from 'next';
import React from 'react';
import { Heading } from '../../components/Heading';
import { Layout } from '../../components/Layout';
import Poster from '../../components/Poster';
import { Person } from '../../interfaces/Movie';
import { getPersonGender } from '../../services/getPersonGender';

interface Props {
  data: Person;
  movies: any;
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

const PersonPage = (props: Props) => {
  const { data, movies } = props;
  console.log(data);
  console.log(movies);
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

        <div>
          <Heading size={Heading.size.MEDIUM}>Known For</Heading>
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
  const movies = await fetch(`
  https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.MOVIES_API}&language=en-US
  `).then((res) => res.json());
  return {
    props: {
      data: personData,
      movies,
    },
  };
};

export default PersonPage;

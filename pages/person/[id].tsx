import { GetServerSideProps } from 'next';
import { Heading } from '../../components/Heading';
import { Layout } from '../../components/Layout';
import Poster from '../../components/Poster';

interface Props {
  data: any;
}

const PersonPage = (props: Props) => {
  const { data } = props;
  console.log(data);
  return (
    <Layout>
      <div className="flex flex-col items-center py-8">
        <div className="w-40 h-40 mb-8">
          <Poster src={`${data.profile_path}`} />
        </div>
        <Heading size={Heading.size.LARGE}>{data.name}</Heading>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const personId = context.params?.id;
  const personData = await fetch(
    `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.MOVIES_API}&language=en-US`
  ).then((res) => res.json());
  return {
    props: {
      data: personData,
    },
  };
};

export default PersonPage;

import { GetServerSideProps } from 'next';
import { Layout } from '../../components/Layout';
import { Movie } from '../../interfaces/Movie';
import Image from 'next/image';
import Poster from '../../components/Poster';
import { VideoPlayer } from '../../components/VideoPlayer';
import { Video } from '../../interfaces/Video';

const TvPage = ({ data, bgColor }: { data: Movie; bgColor: string }) => {
  console.log(data);
  console.log(data.trailer);
  return (
    <Layout>
      <div
        className="w-full bg-center bg-no-repeat bg-cover bg-gray-100 mb-72"
        style={
          data.backdrop_path
            ? { backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})` }
            : {}
        }
      >
        <div className="bg-opacity-40 bg-black px-4 md:px-8 w-full h-full">
          <h1 className="text-5xl font-bold text-white w-full relative top-32 text-center">
            {data.title}
          </h1>
          <div className="w-64 h-96 relative top-48 shadow-lg rounded-lg mx-auto bg-gray-100">
            <Poster src={data.poster_path} />
          </div>
        </div>
      </div>

      {/* <p>{data.vote_average}</p> */}

      <h3 className="text-2xl mb-2">Overview</h3>
      <p className="mb-8">{data.overview}</p>
      <h3 className="text-2xl mb-2">Trailer</h3>
      {data.trailer && <VideoPlayer video={data.trailer} />}
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.MOVIES_API}&language=en-US`
  ).then((response) => response.json());

  const videos = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.MOVIES_API}&language=en-US`
  ).then(
    (response) => response.json(),
    (error) => console.log(error)
  );
  const trailer = videos.results.find((video: Video) => video.site === 'YouTube');

  return {
    props: {
      data: {
        ...data,
        trailer: trailer ? trailer : null,
      },
    },
  };
};
export default TvPage;

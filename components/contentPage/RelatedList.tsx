import useSWR from 'swr';
import { fetcher } from '../../services/SWRFetcher';
import { Carousel } from '../Carousel/Carousel';
import { Heading } from '../Heading';

interface Props {
  id: number;
}

export const RelatedList = (props: Props) => {
  const { id } = props;
  const { data, error } = useSWR(`/api/related?id=${id}`, fetcher);
  console.log(data);

  const renderList = () => {
    return data?.map((item: any) => <div key={item.id}>{item.name}</div>);
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Heading size={Heading.size.MEDIUM}>Related</Heading>
      {renderList()}
      {/* <Carousel /> */}
    </div>
  );
};

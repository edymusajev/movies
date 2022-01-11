import useSWR from 'swr';
import { fetcher } from '../../services/SWRFetcher';

interface Props {
  id: number;
}

export const RelatedList = (props: Props) => {
  const { id } = props;
  const { data, error } = useSWR(`/api/related?id=${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (data) {
    console.log(data);
  }
  return <div>hi</div>;
};

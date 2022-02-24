import { SearchData } from '../interfaces/Movie';
import { Heading } from './Heading';
import { Layout } from './Layout';
import { ListGrid } from './ListGrid';

interface Props {
  title: string;
  data: SearchData;
  api: string;
}

export const ContentList = (props: Props) => {
  const { title, data, api } = props;
  return (
    <Layout>
      <div className="w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-8">
        <Heading size={Heading.size.LARGE}>{title}</Heading>
      </div>
      <ListGrid data={data} api={api} />
    </Layout>
  );
};

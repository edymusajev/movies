import NextLink from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  passHref?: boolean;
}

const Link = (props: Props) => {
  const { href, children, passHref } = props;
  return (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  );
};
export { Link };

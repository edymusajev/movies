interface Props {
  children: React.ReactNode;
}

export const Container = (props: Props) => {
  const { children } = props;
  return <div className="max-w-screen-2xl md:px-8">{children}</div>;
};

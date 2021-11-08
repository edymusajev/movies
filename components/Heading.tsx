import classNames from 'classnames';

enum Size {
  SMALL,
  MEDIUM,
  LARGE,
  EXTRA_LARGE,
}
enum Align {
  LEFT,
  CENTER,
  RIGHT,
}

interface Props {
  children: React.ReactNode;
  align: Align;
  size: Size;
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'text-lg',
  [Size.MEDIUM]: 'text-xl',
  [Size.LARGE]: 'text-3xl',
  [Size.EXTRA_LARGE]: 'text-5xl',
};
const ALIGN_MAPS: Record<Align, string> = {
  [Align.LEFT]: 'text-left',
  [Align.CENTER]: 'text-center',
  [Align.RIGHT]: 'text-right',
};

const Heading = (props: Props) => {
  const { children, align, size } = props;
  return <h2 className={classNames(`pb-4`, SIZE_MAPS[size], ALIGN_MAPS[align])}>{children}</h2>;
};

Heading.defaultProps = {
  align: Align.LEFT,
  size: Size.MEDIUM,
};

Heading.size = Size;
Heading.align = Align;

export { Heading };

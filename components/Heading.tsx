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
enum Weight {
  NORMAL,
  MEDIUM,
  SEMIBOLD,
  BOLD,
}

interface Props {
  children: React.ReactNode;
  align: Align;
  size: Size;
  weight: Weight;
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
const WEIGHT_MAPS: Record<Weight, string> = {
  [Weight.NORMAL]: 'font-normal',
  [Weight.MEDIUM]: 'font-medium',
  [Weight.SEMIBOLD]: 'font-semibold',
  [Weight.BOLD]: 'font-bold',
};

const Heading = (props: Props) => {
  const { children, align, size, weight } = props;
  return (
    <h2 className={classNames(SIZE_MAPS[size], ALIGN_MAPS[align], WEIGHT_MAPS[weight])}>
      {children}
    </h2>
  );
};

Heading.defaultProps = {
  align: Align.LEFT,
  size: Size.MEDIUM,
  weight: Weight.NORMAL,
};

Heading.size = Size;
Heading.align = Align;
Heading.weight = Weight;

export { Heading };

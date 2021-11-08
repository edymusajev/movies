import classNames from 'classnames';
import NextImage from 'next/image';
import { BsFillImageFill } from 'react-icons/bs';

enum Rounded {
  NONE = 'none',
  MEDIUM = 'medium',
}

interface Props {
  src: string;
  alt: string;
  rounded: Rounded;
}

const ROUNDED_MAPS: Record<Rounded, string> = {
  [Rounded.NONE]: '',
  [Rounded.MEDIUM]: 'rounded-lg',
};

const Image = (props: Props) => {
  const { src, alt, rounded } = props;
  if (src) {
    return (
      <NextImage
        src={`https://image.tmdb.org/t/p/w500${src}`}
        alt={alt}
        layout="fill"
        className={classNames('object-cover', ROUNDED_MAPS[rounded])}
      />
    );
  } else {
    return (
      <div
        className={classNames(
          'bg-gray-100 text-gray-300 h-full w-full flex justify-center items-center',
          ROUNDED_MAPS[rounded]
        )}
      >
        <BsFillImageFill className={'text-3xl'} />
      </div>
    );
  }
};

Image.defaultProps = {
  rounded: Rounded.NONE,
};
Image.rounded = Rounded;

export { Image };

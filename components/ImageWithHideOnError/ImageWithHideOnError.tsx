import { useState, FC } from "react";
import Image from "next/image";

type TProps = {
  alt: string;
  src: string;
  width: number;
  height: number;
  className: string;
  onClick?: () => void;
  priority?: boolean;
};

export const ImageWithHideOnError: FC<TProps> = ({
  alt,
  src,
  width,
  height,
  className,
  onClick,
  priority,
}) => {
  const [hideImage, setHideImage] = useState<boolean>(false);

  return !hideImage ? (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={className}
      onError={() => setHideImage(true)}
      onClick={onClick}
      priority={priority !== undefined ? priority : false}
    />
  ) : null;
};

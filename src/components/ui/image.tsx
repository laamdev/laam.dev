import { Image as AstroImage } from "astro:assets";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function Image({ src, alt, width, height, className }: ImageProps) {
  return (
    <AstroImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      class={className}
    />
  );
}

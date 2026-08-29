type AssetIconProps = {
  src: string;
  alt: string;
  size: number;
};

export function AssetIcon({ src, alt, size }: AssetIconProps) {
  return (
    <span
      className="relative inline-block shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="size-full object-contain"
      />
    </span>
  );
}

export function HeroOverlayGradients() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-16 bg-gradient-to-b from-black/55 via-black/20 to-transparent sm:h-20 xl:h-44"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[62%] bg-gradient-to-t from-black/95 via-black/55 to-transparent max-xl:h-[68%] xl:h-[42%]"
        aria-hidden
      />
    </>
  );
}

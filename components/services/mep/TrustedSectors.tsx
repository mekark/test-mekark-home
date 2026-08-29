import Image from "next/image";

const logos = [
  {
    image: "/images/services/mep/trusted-sectors/tata.png",
    imageClass:
      "absolute top-[-26.42%] left-[-51.53%] h-[150.94%] w-[208.94%] max-w-none object-cover",
    containerClass: "relative h-[62.6px] w-[80.4px] overflow-hidden",
    width: 80,
    height: 63,
  },
  {
    image: "/images/services/mep/trusted-sectors/bosch.png",
    imageClass: "size-full max-w-none object-cover",
    containerClass: "relative size-[78.7px] overflow-hidden",
    width: 79,
    height: 79,
  },
  {
    image: "/images/services/mep/trusted-sectors/hyundai.png",
    imageClass: "size-full max-w-none object-cover",
    containerClass: "relative size-[100px]",
    width: 100,
    height: 100,
  },
  {
    image: "/images/services/mep/trusted-sectors/voltas.png",
    imageClass: "size-full max-w-none object-cover",
    containerClass: "relative size-[100px]",
    width: 100,
    height: 100,
  },
  {
    image: "/images/services/mep/trusted-sectors/jk.png",
    imageClass:
      "absolute top-[-41.03%] left-0 h-[192.31%] w-full max-w-none object-cover",
    containerClass: "relative h-[57.5px] w-[110.7px] overflow-hidden",
    width: 111,
    height: 58,
  },
  {
    image: "/images/services/mep/trusted-sectors/tvs.png",
    imageClass: "size-full max-w-none object-cover",
    containerClass: "relative size-[100px]",
    width: 100,
    height: 100,
  },
  {
    image: "/images/services/mep/trusted-sectors/partner.png",
    imageClass: "size-full max-w-none object-cover",
    containerClass: "relative size-[72px]",
    width: 72,
    height: 72,
  },
] as const;

export default function TrustedSectors() {
  return (
    <section className="relative w-full shrink-0 overflow-hidden bg-lavenderblush px-4 py-10 text-center font-manrope text-gray sm:px-6 md:px-8 lg:py-16">
      <div className="mx-auto max-w-[1706px] rounded-[24px] bg-gray-panel px-5 py-10 shadow-[0px_0px_40px_rgba(0,0,0,0.1)] sm:rounded-[40px] sm:px-10 sm:py-12 lg:px-16">
        <b className="mx-auto block max-w-[1023px] text-[28px] leading-[1.2] sm:text-[36px] lg:text-[40px] lg:leading-[45.33px]">
          <span className="leading-[inherit]">
            Trusted Across
            <br />
          </span>
          <span className="leading-[inherit] text-red">
            Industrial & Commercial Sectors
          </span>
        </b>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:mt-12 lg:grid-cols-7 lg:gap-4">
          {logos.map((logo) => (
            <div
              key={logo.image}
              className="flex h-[100px] items-center justify-center rounded-num-14_94 border-[1.3px] border-solid border-gray-soft bg-white sm:h-num-122_3"
            >
              <div className={logo.containerClass}>
                <Image
                  className={logo.imageClass}
                  src={logo.image}
                  width={logo.width}
                  height={logo.height}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[16px] text-gray-tagline sm:text-[18.67px]">
          <Image
            className="hidden h-[1px] w-[95px] sm:block"
            src="/images/services/mep/trusted-sectors/divider.svg"
            width={95}
            height={1}
            alt=""
          />
          <div className="flex items-center gap-[6.7px]">
            <Image
              className="relative h-8 w-8 shrink-0"
              src="/images/services/mep/trusted-sectors/shield.svg"
              width={32}
              height={32}
              alt=""
            />
            <div className="tracking-[1.33px] leading-[26.67px] font-light">
              Built on Trust. Delivering Excellence.
            </div>
          </div>
          <Image
            className="hidden h-[1px] w-[95px] sm:block"
            src="/images/services/mep/trusted-sectors/divider.svg"
            width={95}
            height={1}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

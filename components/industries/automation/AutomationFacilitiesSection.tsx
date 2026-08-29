import Image from "next/image";

type Facility = {
  title: string;
  description: string;
  image: string;
  imageFit?: "cover" | "crop-left";
  titleLayout?: "robotics" | "two-lines" | "three-lines";
  wideDescription?: boolean;
};

const IMAGE_SIZE = 257.333;

const facilities: Facility[] = [
  {
    title: "Industrial Robotics Manufacturing:",
    description:
      "Vibration-controlled, high-precision facilities engineered for robotic arm and system assembly.",
    image: "/images/industries/automation/automation-facilities/industrial-robotics.jpg",
    imageFit: "crop-left",
    titleLayout: "robotics",
  },
  {
    title: "Control Panel & PLC Assembly Units:",
    description:
      "ESD-safe, contamination-controlled plants designed for panel building, wiring, and testing.",
    image: "/images/industries/automation/automation-facilities/control-panel-plc.png",
  },
  {
    title: "CNC & Precision Machinery Manufacturing:",
    description:
      "Heavy-load flooring and crane-integrated bays for machine tool assembly and testing.",
    image: "/images/industries/automation/automation-facilities/cnc-precision.png",
    titleLayout: "three-lines",
  },
  {
    title: "Sensor, PCB & Electronics-Adjacent Assembly:",
    description:
      "Cleanroom-adjacent, static-controlled environments for sensitive component handling.",
    image: "/images/industries/automation/automation-facilities/sensor-pcb.png",
  },
  {
    title: "Automotive & Industrial Automation Equipment Manufacturing:",
    description:
      "Facilities built for conveyor systems, packaging automation, and material handling equipment production.",
    image: "/images/industries/automation/automation-facilities/automotive-automation.png",
    titleLayout: "three-lines",
    wideDescription: true,
  },
  {
    title: "Testing & R&D Laboratories:",
    description:
      "Climate-controlled, vibration-isolated spaces for automation product testing and validation.",
    image: "/images/industries/automation/automation-facilities/testing-rnd.png",
  },
];

function FacilityImage({
  src,
  imageFit = "cover",
}: {
  src: string;
  imageFit?: Facility["imageFit"];
}) {
  if (imageFit === "crop-left") {
    return (
      <div
        className="relative shrink-0 overflow-hidden rounded-[21.333px]"
        style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
      >
        <Image
          src={src}
          alt=""
          width={450}
          height={IMAGE_SIZE}
          className="absolute top-[0.21%] max-w-none object-cover"
          style={{
            width: "174.97%",
            height: "100%",
            left: "-15.68%",
          }}
          sizes={`${IMAGE_SIZE}px`}
        />
      </div>
    );
  }

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[21.333px]"
      style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes={`${IMAGE_SIZE}px`}
      />
    </div>
  );
}

function FacilityCard({
  title,
  description,
  image,
  imageFit,
  titleLayout = "two-lines",
  wideDescription = false,
}: Facility) {
  const titleClasses = {
    robotics:
      "max-w-[229px] min-h-[53.734px] leading-[26.867px]",
    "two-lines": "min-h-[42.667px] leading-[21.333px]",
    "three-lines": "min-h-[64px] leading-[21.333px]",
  }[titleLayout];

  const descriptionMargin = {
    robotics: "mt-[2.29px]",
    "two-lines": "mt-[12px]",
    "three-lines": "mt-[6px]",
  }[titleLayout];

  return (
    <article
      className="flex shrink-0 flex-col"
      style={{ width: IMAGE_SIZE, maxWidth: "100%" }}
    >
      <FacilityImage src={image} imageFit={imageFit} />
      <div className="mt-[33.333px] flex flex-col">
        <h3
          className={`font-[family-name:var(--font-montserrat)] text-[18.667px] font-bold text-[#3c3938] ${titleClasses}`}
        >
          {title}
        </h3>
        <p
          className={`${descriptionMargin} font-[family-name:var(--font-montserrat)] text-base leading-[21.333px] text-[#555] ${wideDescription ? "w-[266px] max-w-[calc(100vw-48px)]" : "w-full"}`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default function AutomationFacilitiesSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#ffefef] px-[clamp(24px,5.573vw,107px)] py-16 text-[#111] lg:min-h-[885px] lg:pt-[103px] lg:pb-[48px]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 overflow-hidden opacity-15"
        style={{ top: -13.33, height: 390.667 }}
        aria-hidden
      >
        <Image
          src="/images/industries/automation/automation-facilities/grid-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1706px]">
        <header className="mx-auto flex w-full max-w-[1452px] flex-col items-center gap-[13px] text-center lg:h-[157px]">
          <h2 className="max-w-[1404px] font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,3.5vw,50px)] font-bold leading-[1.2] tracking-[-1.3333px] text-[#111] lg:flex lg:h-[117px] lg:items-center lg:leading-[60px]">
            Automation & Robotics Manufacturing Facility Construction Across
            South India&apos;s Growth Hubs
          </h2>
          <p className="max-w-[1273px] font-[family-name:var(--font-manrope)] text-lg leading-[27px] text-black">
            Our precision facility construction serves automation manufacturers
            across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala:
          </p>
        </header>

        <div className="mt-12 w-full overflow-x-auto lg:mt-[49px] min-[1920px]:overflow-visible">
          <div className="mx-auto grid grid-cols-1 justify-items-center gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:min-h-[448px] lg:min-w-[1706px] lg:grid-cols-[repeat(6,257.333px)] lg:justify-between lg:justify-items-start lg:gap-x-0 lg:gap-y-0">
            {facilities.map((facility) => (
              <FacilityCard key={facility.title} {...facility} />
            ))}
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-[1212px] text-center font-[family-name:var(--font-manrope)] text-lg font-normal leading-[23px] text-[#8b91a0] lg:mt-[34px]">
          Wherever you&apos;re located in South India –{" "}
          <span className="font-semibold text-[#f01d23]">
            Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, or Kochi
          </span>{" "}
          – Mekark&apos;s automation facility engineering is customised to your
          production process and precision requirements.
        </p>
      </div>
    </section>
  );
}

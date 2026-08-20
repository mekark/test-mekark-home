"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const EASE = [0.22, 1, 0.36, 1] as const;

type ServiceId = "eot" | "racking" | "clean-room";

type ExtendedOffering = {
  id: ServiceId;
  index: string;
  name: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

const SERVICES: ExtendedOffering[] = [
  {
    id: "eot",
    index: "01",
    name: "EOT Crane",
    eyebrow: "Material Handling",
    title: "EOT Crane",
    intro: (
      <>
        South India&apos;s trusted{" "}
        <span className="font-semibold">EOT crane service providers</span>,
        Mekark delivers{" "}
        <span className="font-semibold">electric overhead travelling cranes</span>{" "}
        engineered for heavy-duty{" "}
        <span className="font-semibold">industrial material handling</span>{" "}
        across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala —
        precision-built, safety-certified, and designed for continuous load.
      </>
    ),
    paragraphs: [
      "As a leading EOT crane service providers in South India, Mekark designs, fabricates, installs, and commissions electric overhead travelling cranes tailored to your facility's load capacity, span, and operational demands — ensuring maximum efficiency and long-term structural reliability.",
      "Every EOT crane is custom-engineered around your load requirements, bay dimensions, and duty cycle, meeting IS 3177 and IS 807 safety standards with certified interlocks, overload protection, and AMC support across South India.",
    ],
    image: "/images/extended-service/eot-blended.png",
    imageAlt:
      "Electric overhead travelling crane hoist, trolley and hook assembly",
  },
  {
    id: "racking",
    index: "02",
    name: "Racking",
    eyebrow: "Storage Systems",
    title: "Industrial Racking",
    intro: (
      <>
        Mekark delivers{" "}
        <span className="font-semibold">heavy-duty industrial racking</span>{" "}
        engineered for{" "}
        <span className="font-semibold">high-density warehouse storage</span>{" "}
        across South India — pallet racking, cantilever, and custom layouts
        built for load safety, aisle efficiency, and long-term operational
        reliability.
      </>
    ),
    paragraphs: [
      "As a leading pallet racking system service providers in South India, Mekark designs, fabricates, and installs heavy-duty industrial storage racks tailored to your facility's load capacity, storage density, and material handling requirements from Selective and Double Deep to Drive-In, Cantilever, and Mezzanine racking.",
      "Every racking system meets IS 807 and MHE code specifications for load rating and seismic bracing, with CNC-fabricated precision and AMC support across South India ensuring your industrial storage racks stay safe and stable for years.",
    ],
    image: "/images/services/racking.png",
    imageAlt: "Heavy-duty industrial pallet racking in a warehouse aisle",
  },
  {
    id: "clean-room",
    index: "03",
    name: "Clean Room",
    eyebrow: "Controlled Environments",
    title: "Clean Room",
    intro: (
      <>
        Mekark builds{" "}
        <span className="font-semibold">contamination-controlled clean rooms</span>{" "}
        for precision manufacturing across South India — modular envelopes,
        HVAC, and finishes engineered to the{" "}
        <span className="font-semibold">ISO classification</span> your process
        demands.
      </>
    ),
    paragraphs: [
      "From pharma and electronics to food and precision assembly, we design and execute clean room infrastructure as an integrated package — partitions, flooring, air handling, and pressure regimes coordinated with the parent building.",
      "Each facility is planned around your process flow, personnel movement, and cleanliness class, with validated HVAC performance and turnkey execution across South India.",
    ],
    image: "/images/services/clean-room.png",
    imageAlt: "Modular contamination-controlled clean room interior",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is a pre-engineered warehouse building and how does it work?",
    answer:
      "A pre-engineered warehouse is a steel building whose primary members are designed, fabricated, and coded off-site, then erected on a prepared foundation. This factory-controlled process shortens site time, improves quality, and allows clear spans tailored to storage, production, or logistics layouts.",
  },
  {
    question:
      "Who is the best pre-engineered warehouse manufacturer in South India?",
    answer:
      "The right partner is one that owns design, fabrication, and erection under a single EPC system. Mekark delivers PEB warehouses across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala with in-house engineering and project control from concept to handover.",
  },
  {
    question:
      "How long does it take to construct a pre-engineered warehouse in South India?",
    answer:
      "Timelines depend on span, area, and finishes, but PEB programmes typically run in parallel — design, procurement, and fabrication overlap so site erection is compressed versus conventional RCC construction.",
  },
  {
    question:
      "How much does it cost to build a factory warehouse shed in South India?",
    answer:
      "Cost is driven by built-up area, crane loads, insulation, flooring, and MEP scope. Share your plot, usage, and capacity requirements and Mekark will issue an engineered proposal rather than a generic per-sq.ft rate.",
  },
  {
    question: "Do you provide turnkey EPC solutions for warehouses?",
    answer:
      "Yes. Mekark executes warehouses as a single-point EPC package covering civil, PEB structure, EOT cranes, racking, MEP, and allied infrastructure so coordination sits with one accountable team.",
  },
  {
    question: "Can Mekark design and erect cold storage steel structures?",
    answer:
      "Yes. We engineer insulated PEB envelopes, flooring, and door systems for cold and controlled-temperature storage, coordinated with refrigeration vendors and the required temperature bands.",
  },
  {
    question:
      "Can existing warehouses be reconfigured or expanded instead of rebuilt?",
    answer:
      "In many cases, yes. We assess the existing frame, foundations, and crane rails, then design bay extensions, mezzanines, or racking upgrades that add capacity without a full rebuild.",
  },
  {
    question: "Which parts of South India does Mekark execute projects in?",
    answer:
      "Mekark executes industrial projects across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, with design and fabrication anchored in Chennai.",
  },
  {
    question: "What industries does Mekark service?",
    answer:
      "We serve logistics and warehousing, manufacturing, automotive, pharma, food and beverage, electronics, data centres, and allied industrial sectors that need engineered steel infrastructure.",
  },
  {
    question: "Is the construction of the warehouse at Mekark IS compliant?",
    answer:
      "Yes. Structures are designed and executed to applicable Indian Standards, including IS 800, IS 875, and, where EOT cranes are specified, IS 3177 and IS 807, with documented quality checks through fabrication and erection.",
  },
] as const;

function isServiceId(value: string): value is ServiceId {
  return SERVICES.some((service) => service.id === value);
}

function ServiceSwitcher({
  activeId,
  onSelect,
}: {
  activeId: ServiceId;
  onSelect: (id: ServiceId) => void;
}) {
  return (
    <div className="flex w-full flex-col rounded-[24px] bg-[#d91a20] py-10 sm:py-[60px] lg:w-[376px] lg:shrink-0">
      <div className="flex w-full flex-col gap-8 sm:gap-[40px]">
        {SERVICES.map((service) => {
          const active = service.id === activeId;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelect(service.id)}
              aria-pressed={active}
              className="relative flex w-full items-center py-0.5 pl-10 pr-5 text-left"
            >
              {active ? (
                <span
                  aria-hidden
                  className="absolute top-1/2 left-0 h-[2px] w-[17px] -translate-y-1/2 bg-white"
                />
              ) : null}
              <span
                className={`w-[52px] shrink-0 font-[family-name:var(--font-manrope)] text-[20px] leading-none sm:w-[75px] ${
                  active
                    ? "font-medium text-white"
                    : "font-normal text-[#ee7c7c]"
                }`}
              >
                {service.index}
              </span>
              <span
                className={`font-[family-name:var(--font-manrope)] leading-none ${
                  active
                    ? "text-[28px] font-medium text-white sm:text-[36px]"
                    : "text-[22px] font-normal text-[#ee7c7c] sm:text-[30px]"
                }`}
              >
                {service.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FaqItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const number = String(index + 1).padStart(2, "0");
  const panelId = `extended-faq-panel-${index}`;
  const buttonId = `extended-faq-button-${index}`;

  return (
    <div className="w-full rounded-[21px] border border-[#e3e4e7] bg-white">
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-[26px] py-[22px] text-left"
      >
        <span className="flex min-w-0 items-start gap-3">
          <span className="mt-1 shrink-0 font-[family-name:var(--font-manrope)] text-[16px] font-bold leading-[17px] text-[#e60f1a]">
            {number}
          </span>
          <span className="font-[family-name:var(--font-manrope)] text-[16px] font-medium leading-[27px] tracking-[-0.47px] text-[#101116] sm:text-[18px]">
            {item.question}
          </span>
        </span>
        <span className="relative mt-1.5 size-[17px] shrink-0 overflow-clip">
          <img
            src="/images/extended-service/faq-chevron.svg"
            alt=""
            width={17}
            height={17}
            className={`absolute inset-0 m-auto size-full object-contain transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-[26px] pb-6 pl-[54px] font-[family-name:var(--font-manrope)] text-[15px] leading-[26px] text-[#555]">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function ExtendedServiceSection() {
  const [activeId, setActiveId] = useState<ServiceId>("eot");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (isServiceId(hash)) setActiveId(hash);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const selectService = (id: ServiceId) => {
    setActiveId(id);
    window.history.replaceState(null, "", `/services/extended#${id}`);
  };

  const active = SERVICES.find((service) => service.id === activeId) ?? SERVICES[0];
  const leftFaqs = FAQ_ITEMS.slice(0, 5);
  const rightFaqs = FAQ_ITEMS.slice(5);

  return (
    <div className="bg-white font-[family-name:var(--font-manrope)] text-[#17171b]">
      <section className="overflow-x-hidden bg-[#f6f6f6] pt-[108px] sm:pt-[128px]">
        <div className="mx-auto w-full max-w-[1740px] px-5 pb-16 sm:px-8 lg:px-[80px] lg:pb-[80px]">
          <motion.header
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex max-w-[1590px] flex-col gap-2.5"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2rem,4vw,50px)] font-medium tracking-[-0.95px] text-[#17171b]"
            >
              Extended Service
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-[1590px] text-[clamp(1.05rem,2vw,26px)] font-light leading-normal text-[#17171b]"
            >
              {active.intro}
            </motion.p>
          </motion.header>

          <div className="mt-10 flex flex-col gap-8 lg:mt-[56px] lg:flex-row lg:items-start lg:gap-10 xl:gap-[70px]">
            <div className="flex w-full flex-col gap-5 lg:w-[376px] lg:shrink-0">
              <ServiceSwitcher activeId={activeId} onSelect={selectService} />

              <Link
                href="#enquiry"
                className="inline-flex h-[62px] w-full items-center justify-center gap-3 rounded-full border-2 border-[#e50818] bg-white px-5 py-4 text-[20px] font-bold leading-[31px] text-[#e50818] transition-colors hover:bg-[#fff5f5]"
              >
                Enquire Now
                <span className="relative size-6 shrink-0 overflow-clip">
                  <img
                    src="/images/extended-service/cta-arrow.svg"
                    alt=""
                    width={25}
                    height={25}
                    className="size-full object-contain"
                  />
                </span>
              </Link>
            </div>

            <div className="relative min-w-0 flex-1 xl:min-h-[486px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="relative z-10 flex max-w-[625px] flex-col gap-5"
                >
                  <p className="text-[14px] font-bold uppercase leading-normal text-[#e50818]">
                    {active.eyebrow}
                  </p>
                  <h2 className="text-[clamp(1.75rem,3vw,40px)] font-medium leading-normal text-[#17171b]">
                    {active.title}
                  </h2>
                  <p className="text-[22px] font-normal leading-normal whitespace-pre-wrap text-[#555]">
                    {active.paragraphs.join("\n\n")}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="relative mt-8 h-[260px] w-full sm:h-[380px] xl:absolute xl:inset-y-0 xl:left-[42%] xl:right-[-80px] xl:mt-0 xl:h-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.image}
                      alt={active.imageAlt}
                      fill
                      priority={active.id === "eot"}
                      className="object-cover object-[70%_center] xl:object-contain xl:object-right"
                      sizes="(max-width: 1280px) 100vw, 55vw"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #f6f6f6 0%, rgba(246,246,246,0.96) 16%, rgba(246,246,246,0.45) 38%, rgba(246,246,246,0) 58%), linear-gradient(180deg, rgba(246,246,246,0) 62%, rgba(246,246,246,0.7) 82%, #f6f6f6 100%)",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-[1740px] flex-col items-center gap-10 px-5 py-14 sm:px-8 lg:gap-[68px] lg:px-[80px] lg:py-[50px]">
          <h2 className="text-center text-[clamp(1.75rem,4vw,53px)] font-bold tracking-[-1.33px] text-[#111] lg:leading-[65px]">
            Frequently Asked Questions
          </h2>

          <div className="grid w-full grid-cols-1 gap-[13px] lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col gap-[13px]">
              {leftFaqs.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  index={index}
                  open={openFaq === index}
                  onToggle={() =>
                    setOpenFaq((current) => (current === index ? null : index))
                  }
                />
              ))}
            </div>
            <div className="flex flex-col gap-[13px]">
              {rightFaqs.map((item, index) => {
                const actualIndex = index + 5;
                return (
                  <FaqItem
                    key={item.question}
                    item={item}
                    index={actualIndex}
                    open={openFaq === actualIndex}
                    onToggle={() =>
                      setOpenFaq((current) =>
                        current === actualIndex ? null : actualIndex,
                      )
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

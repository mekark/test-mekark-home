"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const EASE = [0.22, 1, 0.36, 1] as const;

type ServiceId = "eot" | "racking" | "clean-room" | "cold-storage";

type FaqEntry = {
  question: string;
  answer: string;
};

type ExtendedOffering = {
  id: ServiceId;
  index: string;
  name: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  faqs: FaqEntry[];
};

const PAGE_INTRO =
  "From heavy-duty EOT cranes to cleanroom facilities, cold storage units, and industrial racking systems, Mekark delivers integrated material handling, storage, and controlled-environment solutions engineered for precision, safety, and continuous performance. Serving manufacturing plants, warehouses, cold chain facilities, and industrial units across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala.";

const SERVICES: ExtendedOffering[] = [
  {
    id: "eot",
    index: "01",
    name: "EOT Crane",
    eyebrow: "End-to-End Industrial Systems",
    title: "EOT Crane",
    paragraphs: [
      "As a leading EOT crane supplier in South India, Mekark supplies electric overhead travelling cranes (EOT cranes) tailored to your facility's load capacity, crane span, and operational duty cycle, ensuring maximum handling efficiency and long-term structural reliability.",
      "Every EOT crane we supply is selected and configured around your specific load requirements, bay dimensions, and duty class, meeting IS 3177 and IS 807 safety standards, with certified safety interlocks, overload protection systems, and AMC (Annual Maintenance Contract) support.",
      "Our EOT crane offering is suited for manufacturing plants, warehouses, and heavy engineering facilities.",
    ],
    image: "/images/extended-service/eot-blended.webp",
    imageAlt:
      "Electric overhead travelling crane hoist, trolley and hook assembly",
    faqs: [
      {
        question: "What is an EOT crane and how does it work?",
        answer:
          "An Electric Overhead Travelling (EOT) crane is a motorised hoist that runs on rails fixed to the building structure. The bridge travels the length of the bay, the trolley moves across the span, and the hoist lifts the load — giving three-axis material handling without occupying floor space.",
      },
      {
        question: "What load capacities do Mekark's EOT cranes support?",
        answer:
          "Mekark engineers EOT cranes around your facility's duty cycle and peak load, from light workshop duties through heavy-duty industrial lifts. Capacity, span, and lift height are specified together so the crane, rails, and supporting structure work as one system.",
      },
      {
        question: "How long does it take to install an EOT crane?",
        answer:
          "Installation time depends on capacity, span, and whether the building already has crane girders and rails. Fabrication proceeds in parallel with site preparation; erection, alignment, load testing, and commissioning follow once the runway is ready.",
      },
      {
        question: "Are Mekark's EOT cranes compliant with safety standards?",
        answer:
          "Yes. Every crane is designed and executed to IS 3177 and IS 807, with certified interlocks, overload protection, limit switches, and documented load testing before handover.",
      },
      {
        question:
          "Can an existing overhead crane be upgraded instead of replaced?",
        answer:
          "In many cases, yes. We assess the existing hoist, trolley, girders, and runway, then upgrade capacity, controls, or safety systems where the structure allows — avoiding a full replacement when the frame is still sound.",
      },
      {
        question: "What maintenance does an EOT crane require?",
        answer:
          "Regular inspection of wire ropes, brakes, limit switches, wheels, and electrical systems, plus lubrication and load-path checks. Mekark offers AMC support across South India so duty-cycle wear is caught before it affects uptime.",
      },
      {
        question:
          "How is the right EOT crane capacity determined for my facility?",
        answer:
          "Capacity is set from your heaviest load, lift height, span, duty class, and how often the crane will run. We also check bay geometry and building structure so the crane rating matches both operations and the supporting frame.",
      },
      {
        question: "Does Mekark provide EOT cranes for outdoor applications?",
        answer:
          "Yes. Outdoor and gantry configurations can be specified with weather-protected electrics, suitable coatings, and duty ratings for open-yard or semi-open industrial use.",
      },
      {
        question: "What industries commonly use EOT cranes?",
        answer:
          "Manufacturing, heavy engineering, steel and fabrication, automotive, warehousing, power, and process plants use EOT cranes wherever repetitive overhead lifting is part of the production flow.",
      },
      {
        question:
          "Does Mekark supply and install EOT cranes across South India?",
        answer:
          "Yes. Mekark designs, fabricates, installs, and commissions EOT cranes across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, with AMC support after handover.",
      },
    ],
  },
  {
    id: "racking",
    index: "02",
    name: "Racking",
    eyebrow: "End-to-End Industrial Systems",
    title: "Racking",
    paragraphs: [
      "As a leading pallet racking system supplier in South India, Mekark supplies heavy-duty industrial storage racks tailored to your facility's load capacity, storage density, and material handling requirements, from Selective and Double Deep to Drive-In, Cantilever, and Mezzanine racking, ensuring maximum storage efficiency and long-term structural stability.",
      "Every racking system we supply is selected and configured around your specific load ratings, bay dimensions, and storage layout, meeting IS 807 and MHE code specifications for load rating and seismic bracing, with CNC-fabricated precision and AMC (Annual Maintenance Contract) support.",
      "Our racking offering is suited for warehouses, distribution centres, and manufacturing storage facilities.",
    ],
    image: "/images/extended-service/racking-blended.webp",
    imageAlt: "Heavy-duty industrial pallet racking in a warehouse aisle",
    faqs: [
      {
        question: "What is heavy duty industrial racking and how does it work?",
        answer:
          "Heavy-duty industrial racking is a steel storage frame that carries palletised or long loads in organised bays. Uprights and beams take the load, aisles give forklift access, and the layout is engineered around your SKU mix, bay height, and handling equipment so density and safety work together.",
      },
      {
        question:
          "Who is Mekark and what heavy-duty racking services do they offer?",
        answer:
          "Mekark designs, fabricates, and installs industrial racking as part of its South India EPC offering. Scope covers Selective, Double Deep, Drive-In, Cantilever, and Mezzanine systems, from layout engineering through erection and AMC support.",
      },
      {
        question:
          "What load capacities do Mekark's pallet racking systems support?",
        answer:
          "Capacity is specified per beam pair and per bay from your pallet weight, stacking height, and handling method. Each system is load-rated to the facility's duty, with seismic bracing and beam-upright connections sized to IS 807 and MHE code requirements.",
      },
      {
        question: "How long does it take to install an industrial racking system?",
        answer:
          "Installation time depends on bay count, height, and whether the floor and building are ready. Fabrication runs in parallel with site preparation; erection, alignment, and load signage follow once the slab and access are clear.",
      },
      {
        question:
          "Are Mekark's heavy-duty racking systems compliant with safety standards?",
        answer:
          "Yes. Systems are designed and executed to IS 807 and MHE code specifications for load rating, beam deflection, and seismic bracing, with CNC-fabricated members and documented checks through fabrication and installation.",
      },
      {
        question:
          "Can existing warehouse racking be reconfigured or expanded instead of replaced?",
        answer:
          "In many cases, yes. We assess the existing uprights, beams, floor loads, and aisle geometry, then add bays, change beam levels, or extend the layout where the structure still meets the required rating.",
      },
      {
        question:
          "How is the right heavy-duty racking system determined for my facility?",
        answer:
          "Selection follows your SKU profile, pallet size, throughput, forklift type, and available clear height. From that we specify Selective, Double Deep, Drive-In, Cantilever, or Mezzanine so storage density matches how goods actually move.",
      },
      {
        question:
          "Does Mekark provide racking systems for cold storage applications?",
        answer:
          "Yes. Cold-store racking is specified for low-temperature duty, with coatings, member sizing, and layouts coordinated with insulated envelopes, flooring, and the required temperature band.",
      },
      {
        question: "Which industries commonly use heavy-duty industrial racking?",
        answer:
          "Logistics and warehousing, manufacturing, automotive, FMCG, pharma, food and beverage, and 3PL operations use heavy-duty racking wherever palletised or long-goods storage needs engineered load safety.",
      },
      {
        question:
          "Does Mekark supply and install pallet racking systems across South India?",
        answer:
          "Yes. Mekark supplies and installs heavy-duty industrial storage racks across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, with AMC support after handover.",
      },
    ],
  },
  {
    id: "clean-room",
    index: "03",
    name: "Clean Room",
    eyebrow: "End-to-End Industrial Systems",
    title: "Clean Room",
    paragraphs: [
      "As a leading clean room solutions provider in South India, Mekark provides modular clean room systems tailored to your facility's contamination control, airflow, and compliance requirements, from Cleanroom HVAC Systems to Pharmaceutical and Electronics/Semiconductor Clean Rooms, along with STP, WTP, and ETP systems for complete facility compliance.",
      "We select and configure every cleanroom system we supply to meet ISO 14644, GMP, and WHO-GMP standards, with factory-fabricated precision and AMC (Annual Maintenance Contract) support.",
      "Our cleanroom offering suits pharmaceutical plants, electronics/semiconductor facilities, and regulated manufacturing environments.",
    ],
    image: "/images/extended-service/clean-room.webp",
    imageAlt: "Modular contamination-controlled clean room interior",
    faqs: [
      {
        question: "What is a clean room and how does it work?",
        answer:
          "A clean room is a controlled, contamination-free environment engineered to maintain low levels of airborne particulates, using HEPA filtration, controlled air changes, and pressure differentials. Mekark's modular clean room systems are designed to protect sensitive products and processes across pharmaceutical, electronics, and industrial applications.",
      },
      {
        question: "What cleanliness classes do Mekark's clean rooms support?",
        answer:
          "Mekark designs and manufactures modular clean rooms across a wide range of ISO cleanliness classes, from ISO Class 5 to ISO Class 8, tailored to your facility's process requirements, particulate control needs, and regulatory compliance standards.",
      },
      {
        question: "Are Mekark's clean rooms compliant with regulatory standards?",
        answer:
          "Yes. All Mekark clean room systems are engineered in full compliance with ISO 14644, GMP, and WHO-GMP standards, incorporating validated air change rates, pressure differentials, and HEPA filtration to ensure consistent contamination control and regulatory compliance.",
      },
      {
        question: "What industries commonly use clean room systems?",
        answer:
          "Clean rooms are widely used across pharmaceutical, biotechnology, electronics, semiconductor, healthcare, food processing, cosmetics, and aerospace industries — anywhere airborne particle control and contamination-free environments are operationally critical.",
      },
      {
        question:
          "Does Mekark provide STP, WTP, and ETP solutions along with clean room services?",
        answer:
          "Yes. Alongside clean room systems, Mekark offers turnkey design, fabrication, and installation of Sewage Treatment Plants (STP), Water Treatment Plants (WTP), and Effluent Treatment Plants (ETP) — delivering integrated infrastructure for facilities requiring both contamination control and water/wastewater management across South India.",
      },
      {
        question: "What is the difference between STP, WTP, and ETP?",
        answer:
          "A Sewage Treatment Plant (STP) treats domestic sewage for safe disposal or reuse; a Water Treatment Plant (WTP) purifies raw water for industrial or drinking use; and an Effluent Treatment Plant (ETP) treats industrial wastewater and effluent before discharge or recycling — each playing a distinct role in water and wastewater management.",
      },
      {
        question:
          "Are Mekark's STP, WTP, and ETP systems compliant with pollution control regulations?",
        answer:
          "Yes. Mekark's Sewage Treatment Plant, Water Treatment Plant, and Effluent Treatment Plant systems are engineered to comply with CPCB (Central Pollution Control Board) norms and applicable state pollution control board regulations, ensuring safe discharge, resource recovery, and environmental compliance.",
      },
      {
        question:
          "Can existing clean rooms or treatment systems be reconfigured or expanded instead of replaced?",
        answer:
          "Yes. Mekark offers modification, reconfiguration, and expansion services for modular clean rooms, HVAC systems, and STP/WTP/ETP infrastructure — helping facilities extend usable life, improve capacity, and enhance contamination control or treatment efficiency without full replacement.",
      },
      {
        question: "What does Mekark's AMC (Annual Maintenance Contract) include?",
        answer:
          "Mekark's AMC covers scheduled preventive maintenance, HEPA filter checks and replacement, airflow and pressure differential validation, HVAC servicing, and performance testing for clean rooms — along with routine inspection, servicing, and compliance checks for STP, WTP, and ETP systems — ensuring your systems remain safe, efficient, and audit-ready throughout the year.",
      },
      {
        question:
          "Does Mekark supply and install clean room systems across South India?",
        answer:
          "Yes. Mekark provides modular clean room solutions across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, with AMC support after handover.",
      },
    ],
  },
  {
    id: "cold-storage",
    index: "04",
    name: "Cold Storage",
    eyebrow: "End-to-End Industrial Systems",
    title: "Cold Storage Facility Construction",
    paragraphs: [
      "As a leading cold storage solution providers in South India, Mekark provides insulated cold storage units tailored to your product type, temperature range, and storage capacity, from Blast Freezers and Chillers to Multi-Temperature Cold Rooms, PUF Panel Insulated Storage, and Modular Cold Storage systems.",
      "Every cold storage system we supply is selected and configured with PUF-insulated panels for optimal thermal efficiency, fire-retardant material specifications, and refrigeration systems engineered for consistent temperature control, backed by AMC (Annual Maintenance Contract) support.",
      "Our cold storage offering is suited for food processing plants, cold chain logistics facilities, and pharmaceutical storage units.",
    ],
    image: "/images/extended-service/cold-storage-blended.webp",
    imageAlt:
      "Insulated cold storage facility with PUF panel sliding door and refrigeration unit",
    faqs: [
      {
        question:
          "Does Mekark design and build cold storage facilities across South India?",
        answer:
          "Yes, Mekark designs, fabricates, and constructs cold storage facilities across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala for food, pharma, and industrial cold chain requirements.",
      },
      {
        question:
          "What temperature ranges can Mekark's cold storage facilities support?",
        answer:
          "We build facilities across chiller (0°C to 8°C), freezer (-18°C to -25°C), and blast freezing (-30°C and below) ranges, including multi-temperature zone facilities within a single unit.",
      },
      {
        question:
          "What insulation is used in Mekark's cold storage construction?",
        answer:
          "We use PUF (Polyurethane Foam) insulated panels, engineered for thermal efficiency, fire-retardant performance, and long-term structural stability.",
      },
      {
        question:
          "Can Mekark build multi-temperature cold storage within one facility?",
        answer:
          "Yes, we design multi-chamber cold storage units with independent temperature zones to store different product categories in a single facility.",
      },
      {
        question:
          "Does Mekark provide cold storage for pharmaceutical and food industries?",
        answer:
          "Yes, we build cold storage facilities compliant with food safety and pharma cold chain storage requirements, including FSSAI-aligned specifications where applicable.",
      },
      {
        question:
          "What is the typical construction timeline for a cold storage facility?",
        answer:
          "Depending on capacity and complexity, most cold storage facilities are delivered in 8–16 weeks from design approval, with in-house fabrication reducing delays.",
      },
      {
        question:
          "Does Mekark handle the refrigeration and MEP systems for cold storage, or only the civil structure?",
        answer:
          "Mekark provides turnkey cold storage solutions, structural construction, PUF panel insulation, and integrated refrigeration and MEP systems under one contract.",
      },
      {
        question:
          "Can existing warehouses be converted into cold storage facilities?",
        answer:
          "Yes, we offer retrofit and conversion solutions for existing warehouses, adding insulation, refrigeration systems, and structural modifications as needed.",
      },
      {
        question:
          "Does Mekark offer AMC support for cold storage facilities after construction?",
        answer:
          "Yes, we provide AMC (Annual Maintenance Contract) support across South India to ensure consistent temperature performance and facility reliability.",
      },
      {
        question:
          "Does Mekark supply and install cold storage systems across South India?",
        answer:
          "Yes. Mekark provides cold storage systems across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, with AMC support after handover.",
      },
    ],
  },
];

function isServiceId(value: string): value is ServiceId {
  return SERVICES.some((service) => service.id === value);
}

function MobilePillSwitcher({
  activeId,
  onSelect,
}: {
  activeId: ServiceId;
  onSelect: (id: ServiceId) => void;
}) {
  return (
    <div className="flex w-full flex-wrap gap-2 px-5 py-4">
      {SERVICES.map((service) => {
        const active = service.id === activeId;

        return (
          <button
            key={service.id}
            type="button"
            onClick={() => onSelect(service.id)}
            aria-pressed={active}
            className={`rounded-full px-[14px] py-2 font-[family-name:var(--font-manrope)] text-sm leading-5 ${
              active
                ? "bg-[#d91a20] font-bold text-white"
                : "border border-[#e3e4e7] bg-white font-medium text-[#53555b]"
            }`}
          >
            {service.name}
          </button>
        );
      })}
    </div>
  );
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
              className="group relative flex w-full items-center py-0.5 pl-10 pr-5 text-left"
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
                    : "font-normal text-[#ee7c7c] group-hover:text-white"
                }`}
              >
                {service.index}
              </span>
              <span
                className={`font-[family-name:var(--font-manrope)] leading-none ${
                  active
                    ? "text-[28px] font-medium text-white sm:text-[36px]"
                    : "text-[22px] font-normal text-[#ee7c7c] group-hover:text-white sm:text-[30px]"
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
  mobile = false,
}: {
  item: FaqEntry;
  index: number;
  open: boolean;
  onToggle: () => void;
  mobile?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");
  const panelId = `extended-faq-panel-${index}`;
  const buttonId = `extended-faq-button-${index}`;

  return (
    <div className="w-full rounded-[18px] border border-[#e3e4e7] bg-[#fefefe]">
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className={`flex min-h-[58px] w-full items-center justify-between gap-3 text-left ${
          mobile ? "px-[15px] py-px" : "gap-4 px-[26px] py-[18px]"
        }`}
      >
        <span
          className={`flex min-w-0 items-center ${
            mobile ? "gap-[14px]" : "gap-[17px]"
          }`}
        >
          <span
            className={`shrink-0 font-montserrat font-bold tracking-[-0.4675px] text-[#e60f1a] ${
              mobile
                ? "text-sm leading-[16.624px]"
                : "w-[22px] font-[family-name:var(--font-manrope)] text-[16px] leading-[17px] tracking-[-0.47px]"
            }`}
          >
            {number}
          </span>
          <span
            className={`font-[family-name:var(--font-manrope)] font-medium text-[#1e1e1e] ${
              mobile
                ? "text-sm leading-normal tracking-[0.056px]"
                : "text-[16px] leading-[27px] sm:text-[18px]"
            }`}
          >
            {item.question}
          </span>
        </span>
        <span
          className={`relative shrink-0 ${
            mobile ? "size-[16.624px]" : "size-[17px]"
          }`}
        >
          <img
            src={
              mobile
                ? "/images/extended-service/faq-chevron-mobile.svg"
                : "/images/extended-service/faq-chevron.svg"
            }
            alt=""
            width={mobile ? 16.624 : 17}
            height={mobile ? 16.624 : 17}
            className={`${
              mobile ? "size-full object-contain" : "absolute inset-0 m-auto size-full object-contain"
            } transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
            <p
              className={`font-[family-name:var(--font-manrope)] text-[#555] ${
                mobile
                  ? "px-[15px] pb-5 pl-[43px] text-sm leading-[22px]"
                  : "px-[26px] pb-6 pl-[65px] text-[15px] leading-[26px]"
              }`}
            >
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (isServiceId(hash)) setActiveId(hash);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    scrollContainerRef.current?.scrollTo({ top: 0 });

    if (window.matchMedia("(max-width: 1023px)").matches) {
      mobileContentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeId]);

  const selectService = (id: ServiceId) => {
    setActiveId(id);
    setOpenFaq(null);
    window.history.replaceState(null, "", `/services/extended#${id}`);
  };

  const active = SERVICES.find((service) => service.id === activeId) ?? SERVICES[0];
  const hasBakedFade =
    active.id === "racking" || active.id === "cold-storage";

  return (
    <div className="bg-white font-[family-name:var(--font-manrope)] text-[#17171b]">
      {/* Mobile — Figma extended-service-mobile (7629:1525) */}
      <section className="flex flex-col bg-[#f6f6f6] pt-[60px] lg:hidden">
        <header className="flex flex-col gap-3 border-b border-[#e3e4e7] bg-white px-5 pb-6">
          <h1 className="text-[28px] font-bold leading-9 tracking-[-0.5px] text-[#111]">
            Extended Service
          </h1>
          <p className="text-sm font-normal leading-[22px] text-[#555]">
            {PAGE_INTRO}
          </p>
        </header>

        <div className="sticky top-[60px] z-20 bg-[#f6f6f6]">
          <MobilePillSwitcher activeId={activeId} onSelect={selectService} />
        </div>

        <div ref={mobileContentRef} className="scroll-mt-[168px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="flex flex-col gap-6 px-5 pb-8"
            >
              <div className="relative h-[227px] w-full overflow-hidden rounded-tr-[15px]">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  className="object-cover object-[70%_center]"
                  sizes="100vw"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-[60%]"
                  style={{
                    backgroundImage:
                      "linear-gradient(269.87deg, rgba(246, 246, 246, 0) 0.12%, rgb(246, 246, 246) 84.67%)",
                  }}
                />
              </div>

              <div className="flex flex-col gap-3 text-left">
                <p className="text-xs font-bold uppercase leading-normal tracking-[1px] text-[#d91a20]">
                  {active.eyebrow}
                </p>
                <h2 className="text-[28px] font-bold leading-9 tracking-[-0.5px] text-[#111]">
                  {active.title}
                </h2>
                {active.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm font-normal leading-[22px] text-[#555]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <Link
                href="/#enquiry"
                className="inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#e50818] bg-white px-5 text-sm font-bold text-[#e50818] transition-colors hover:bg-[#fff5f5]"
              >
                Enquire Now
                <span className="relative size-[18px] shrink-0 overflow-clip">
                  <img
                    src="/images/extended-service/cta-arrow.svg"
                    alt="Arrow icon"
                    width={18}
                    height={18}
                    className="size-full object-contain"
                  />
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <section className="flex flex-col gap-5 border-t border-[#e3e4e7] bg-white px-5 pb-12 pt-8">
          <h2 className="text-[22px] font-bold leading-7 text-[#111]">
            Frequently Asked Questions
          </h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active.id}-faq-mobile`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="flex w-full flex-col gap-3"
            >
              {active.faqs.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  index={index}
                  mobile
                  open={openFaq === index}
                  onToggle={() =>
                    setOpenFaq((current) =>
                      current === index ? null : index,
                    )
                  }
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </section>

      {/* Desktop — fixed 1920 canvas; DesignScale shrinks for iMac/laptop. */}
      <section className="relative hidden flex-col bg-[#f6f6f6] pt-[128px] lg:flex lg:h-[980px] lg:overflow-hidden">
        <div className="relative z-10 mx-auto w-full max-w-[1740px] shrink-0 px-[80px]">
          <motion.header
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex max-w-[1590px] flex-col gap-2.5"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[50px] font-medium tracking-[-0.95px] text-[#17171b]"
            >
              Extended Service
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-[1757px] text-[22px] font-light leading-normal text-[#17171b]"
            >
              {PAGE_INTRO}
            </motion.p>
          </motion.header>
        </div>

        <div className="relative mt-[40px] flex min-h-0 flex-1">
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-0 overflow-hidden ${
              hasBakedFade ? "w-[min(52vw,900px)]" : "w-[860px]"
            }`}
          >
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
                  className={
                    hasBakedFade
                      ? "object-cover object-[72%_center]"
                      : "object-cover object-right object-top"
                  }
                  sizes="900px"
                />
                {/* Soft left fade into section bg — always applied so baked PNGs
                    still seal cleanly against #f6f6f6 (racking / cold-storage). */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: hasBakedFade
                      ? "linear-gradient(90deg, #f6f6f6 0%, #f6f6f6 8%, rgba(246,246,246,0.97) 22%, rgba(246,246,246,0.7) 40%, rgba(246,246,246,0.28) 58%, rgba(246,246,246,0) 74%)"
                      : "linear-gradient(90deg, #f6f6f6 0%, rgba(246,246,246,0.92) 12%, rgba(246,246,246,0.4) 32%, rgba(246,246,246,0) 52%)",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1740px] flex-1 flex-row items-stretch gap-[70px] px-[80px] pb-8">
            <div className="flex w-[376px] shrink-0 flex-col gap-5">
              <ServiceSwitcher activeId={activeId} onSelect={selectService} />

              <Link
                href="/#enquiry"
                className="inline-flex h-[62px] w-full items-center justify-center gap-3 rounded-full border-2 border-[#e50818] bg-white px-5 py-4 text-[20px] font-bold leading-[31px] text-[#e50818] transition-colors hover:bg-[#fff5f5]"
              >
                Enquire Now
                <span className="relative size-6 shrink-0 overflow-clip">
                  <img
                    src="/images/extended-service/cta-arrow.svg"
                    alt="Arrow icon"
                    width={25}
                    height={25}
                    className="size-full object-contain"
                  />
                </span>
              </Link>
            </div>

            <div className="relative z-10 min-h-0 min-w-0 flex-1">
              <div
                ref={scrollContainerRef}
                className="relative z-10 h-full overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                <div className="flex min-h-full flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.28, ease: EASE }}
                      className="flex w-full max-w-[625px] flex-col items-start gap-5 text-left"
                    >
                      <p className="w-full text-[14px] font-bold uppercase leading-normal tracking-normal text-[#e50818]">
                        {active.eyebrow}
                      </p>
                      <h2 className="w-full whitespace-nowrap text-[40px] font-medium leading-normal text-[#17171b]">
                        {active.title}
                      </h2>
                      <p className="w-full whitespace-pre-wrap text-[22px] font-normal leading-normal text-[#555]">
                        {active.paragraphs.join("\n\n")}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <h2 className="mt-auto pt-16 text-[40px] font-bold leading-[65px] tracking-[-1.33px] text-[#111]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${active.id}-faq`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28, ease: EASE }}
                    className={`mt-5 flex w-full flex-col gap-5 pb-6 ${
                      active.id === "racking" ? "max-w-[640px]" : "max-w-[701px]"
                    }`}
                  >
                    {active.faqs.map((item, index) => (
                      <FaqItem
                        key={item.question}
                        item={item}
                        index={index}
                        open={openFaq === index}
                        onToggle={() =>
                          setOpenFaq((current) =>
                            current === index ? null : index,
                          )
                        }
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

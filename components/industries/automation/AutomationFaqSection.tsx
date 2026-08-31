import Image from "next/image";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question:
      "What is a turnkey automation manufacturing facility and how is it different from a regular industrial shed?",
    answer:
      "A turnkey automation facility integrates structural steel, civil works, ESD-controlled flooring, smart factory infrastructure, HVAC, and MEP into one coordinated build engineered around precision and uptime, not just floor space.",
  },
  {
    question:
      "What should I look for in an automation plant construction company?",
    answer:
      "Look for in-house design and fabrication capability, experience with ESD-controlled and vibration-isolated flooring, MEP integration under one contract, and a track record of on-time delivery. Mekark offers all of these, backed by in-house engineering across Tamil Nadu and South India.",
  },
  {
    question:
      "How long does it take to construct an automation manufacturing plant in South India?",
    answer:
      "Mekark's in-house process typically delivers an automation facility in 12–20 weeks from design approval, up to 30–40% faster than conventional construction.",
  },
  {
    question:
      "How much does it cost to build an automation manufacturing plant in South India?",
    answer:
      "Costs vary by precision requirements, ESD classification, and facility size. Get a free budget estimate within 24 hours of your consultation.",
  },
  {
    question: "Do you provide turnkey EPC solutions for automation facilities?",
    answer:
      "Yes. Mekark is one of the few turnkey EPC automation facility construction companies in South India, offering design, fabrication, MEP, and commissioning under one roof.",
  },
  {
    question:
      "Can Mekark design and build ESD-controlled facilities for robotics and electronics assembly?",
    answer:
      "Yes. We design and build static-dissipative flooring, vibration-isolated slabs, and cleanroom-adjacent environments for robotics, PCB, and control panel assembly, fully integrated with the wider facility.",
  },
  {
    question:
      "Can existing automation manufacturing facilities be expanded or upgraded instead of rebuilt?",
    answer:
      "Yes. We offer facility expansion and upgrade services, reconfiguring ESD zones, flooring, and utility capacity to extend usable production life.",
  },
  {
    question:
      "Which parts of South India does Mekark execute automation facility projects in?",
    answer:
      "Mekark executes automation manufacturing facility projects across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, including Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, and Kochi.",
  },
  {
    question:
      "What industries does Mekark's automation facility construction serve?",
    answer:
      "We serve industrial robotics, control panel and PLC assembly, CNC and precision machinery manufacturing, sensor and PCB assembly, industrial automation equipment manufacturing, and testing and R&D laboratories.",
  },
  {
    question:
      "Is Mekark's automation facility construction Industry 4.0-ready?",
    answer:
      "Yes. Every facility is designed using STAAD Pro, TEKLA, and Autodesk, with structured cabling and IoT-ready infrastructure built in for smart factory and Industry 4.0 integration.",
  },
];

const faqColumns = [faqs.slice(0, 5), faqs.slice(5)];

function FaqCard({
  item,
  index,
  defaultOpen = false,
}: {
  item: FaqItem;
  index: number;
  defaultOpen?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <details
      className="group w-full rounded-[20.78px] border-[1.039px] border-[#e3e4e7] bg-white"
      open={defaultOpen}
    >
      <summary className="flex min-h-[72px] cursor-pointer list-none items-center gap-4 px-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e60f1a] sm:min-h-[99.749px] sm:gap-5 sm:px-[25.975px] sm:py-[20.78px] [&::-webkit-details-marker]:hidden">
        <span className="grid min-w-0 flex-1 grid-cols-[22px_minmax(0,1fr)] items-start gap-3 tracking-[-0.4675px] sm:gap-[16.44px]">
          <span className="pt-0.5 font-[family-name:var(--font-montserrat)] text-base font-bold leading-[16.624px] text-[#e60f1a] sm:pt-[5px]">
            {number}
          </span>
          <span className="font-[family-name:var(--font-manrope)] text-base font-semibold leading-snug text-[#101116] sm:text-[18.667px] sm:leading-[26.667px]">
            {item.question}
          </span>
        </span>

        <span className="relative size-[16.624px] shrink-0 transition-transform duration-200 group-open:rotate-180">
          <Image
            src="/images/industries/automation/faq/chevron-down.svg"
            alt=""
            fill
            sizes="17px"
            aria-hidden
          />
        </span>
      </summary>

      <div className="px-4 pb-4 sm:px-[25.975px] sm:pb-[25.975px]">
        <p className="font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#53555b] sm:pl-[38.44px] sm:pr-[36px] sm:text-base sm:leading-[26px]">
          {item.answer}
        </p>
      </div>
    </details>
  );
}

export default function AutomationFaqSection() {
  return (
    <section className="bg-white px-[clamp(24px,5.556vw,106.667px)] py-16 lg:py-[93.333px]">
      <div className="mx-auto flex w-full max-w-[1706.667px] flex-col items-center gap-10 lg:gap-[66.667px]">
        <div className="flex min-h-[66px] w-full max-w-[1480px] items-center justify-center">
          <h2 className="text-center font-[family-name:var(--font-manrope)] text-[clamp(2rem,3vw,53.333px)] font-bold leading-[1.225] tracking-[-1.3333px] text-[#111]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-8 min-[1024px]:grid-cols-2 min-[1024px]:gap-10 min-[1900px]:w-[1706.667px] min-[1900px]:grid-cols-[repeat(2,790.667px)] min-[1900px]:justify-center min-[1900px]:self-start">
          {faqColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex min-w-0 flex-col gap-[13.333px]"
            >
              {column.map((item, itemIndex) => {
                const index = columnIndex * 5 + itemIndex;

                return (
                  <FaqCard
                    key={item.question}
                    item={item}
                    index={index}
                    defaultOpen={index === 0}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

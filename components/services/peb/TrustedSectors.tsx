"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const logoReveal = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

type Client = {
  name: string;
  logo: string;
  logoClassName: string;
};

const clients: Client[] = [
  {
    name: "Tata",
    logo: "/images/services/peb/trusted-sectors/tata.png",
    logoClassName:
      "h-[clamp(3.25rem,4.2vw,5.1rem)] w-[clamp(4.25rem,5.4vw,6.5rem)]",
  },
  {
    name: "Bosch",
    logo: "/images/services/peb/trusted-sectors/bosch.png",
    logoClassName: "size-[clamp(3.75rem,5.1vw,6.1rem)]",
  },
  {
    name: "Hyundai",
    logo: "/images/services/peb/trusted-sectors/hyundai.png",
    logoClassName: "size-[clamp(4.5rem,6.25vw,7.5rem)]",
  },
  {
    name: "Voltas",
    logo: "/images/services/peb/trusted-sectors/voltas.png",
    logoClassName: "size-[clamp(4.5rem,6.25vw,7.5rem)]",
  },
  {
    name: "JK Tyre",
    logo: "/images/services/peb/trusted-sectors/jk-tyre.png",
    logoClassName:
      "h-[clamp(2.85rem,3.8vw,4.55rem)] w-[clamp(5.25rem,7vw,8.4rem)]",
  },
  {
    name: "TVS",
    logo: "/images/services/peb/trusted-sectors/tvs.png",
    logoClassName: "size-[clamp(4.5rem,6.25vw,7.5rem)]",
  },
  {
    name: "Q Med Hospital",
    logo: "/images/services/peb/trusted-sectors/q-med-hospital.png",
    logoClassName: "size-[clamp(3.5rem,4.75vw,5.75rem)]",
  },
];

export default function TrustedSectors() {
  return (
    <section
      className="flex w-full items-center bg-[#FDEBEB] px-4 py-8 text-[#111111] sm:px-10 sm:py-11 lg:px-[5.556%] lg:py-[4.653%]"
      aria-labelledby="trusted-sectors-title"
    >
      <motion.div
        className="mx-auto flex w-full max-w-[1706.67px] flex-col items-center rounded-[1.25rem] bg-[#FCFCFC] px-4 py-6 shadow-[0_0_40px_rgba(0,0,0,0.10)] sm:rounded-[clamp(1.5rem,2.083vw,2.5rem)] sm:px-10 sm:py-8 lg:min-h-[clamp(17rem,19.86vw,23.833rem)] lg:px-[3.36%] lg:py-[2.266%]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: easeOut }}
      >
        <motion.h2
          id="trusted-sectors-title"
          className="max-w-[1022.67px] text-balance text-center font-[family-name:var(--font-manrope)] text-[clamp(1.5rem,5.5vw,2.5rem)] font-bold leading-[1.2] sm:text-[clamp(1.75rem,2.083vw,2.5rem)] sm:leading-[clamp(2rem,2.361vw,2.833rem)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          <span className="block text-[#111111]">Trusted Across</span>
          <span className="block text-[#E50818]">
            Industrial &amp; Commercial Sectors
          </span>
        </motion.h2>

        <motion.div
          className="mt-6 grid w-full grid-cols-2 gap-3 sm:mt-[clamp(1.5rem,2.292vw,2.75rem)] sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7 lg:gap-[clamp(1rem,1.771vw,2.125rem)]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {clients.map((client) => (
            <motion.article
              key={client.name}
              className="flex h-[clamp(6.75rem,7.8vw,9.25rem)] items-center justify-center overflow-hidden rounded-[clamp(0.625rem,0.778vw,0.934rem)] border border-black/5 bg-white px-3 py-3 sm:px-4"
              aria-label={client.name}
              variants={logoReveal}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div
                className={`relative max-h-full max-w-full ${client.logoClassName}`}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                  sizes="140px"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-5 flex w-full items-center justify-center gap-3 px-1 sm:mt-[clamp(1.25rem,1.563vw,1.875rem)] sm:gap-[clamp(0.75rem,1.042vw,1.25rem)]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.55, ease: easeOut, delay: 0.2 }}
        >
          <span
            className="hidden h-px w-[clamp(3.5rem,4.931vw,5.917rem)] bg-black sm:block"
            aria-hidden="true"
          />
          <div className="flex max-w-full items-center gap-[0.417rem]">
            <Image
              src="/images/services/peb/trusted-sectors/shield-check.svg"
              alt=""
              width={32}
              height={32}
              className="size-[clamp(1.5rem,1.667vw,2rem)] shrink-0"
            />
            <p className="text-center font-[family-name:var(--font-manrope)] text-[clamp(0.8125rem,3.5vw,1.167rem)] font-light leading-[1.4] tracking-[0.04em] text-[#101116] sm:text-[clamp(0.875rem,0.972vw,1.167rem)] sm:leading-[clamp(1.25rem,1.389vw,1.667rem)] sm:tracking-[0.083rem]">
              Built on Trust. Delivering Excellence.
            </p>
          </div>
          <span
            className="hidden h-px w-[clamp(3.5rem,4.931vw,5.917rem)] bg-black sm:block"
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

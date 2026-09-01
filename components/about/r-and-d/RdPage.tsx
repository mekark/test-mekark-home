"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const TRACKS = [
  {
    id: "engineering",
    title: "Engineering-led",
    description:
      "Developing pre-cast and pre-fabricated systems that reduce on-site construction time, improve consistency, and minimise the delays that come with conventional building methods.",
    image: "/images/about/r-and-d/engineering-led.png",
    imageAlt:
      "Site engineer in safety gear holding blueprints and a radio outside a modern building",
    icon: "/images/about/r-and-d/icon-engineering.svg",
    iconAlt: "Drafting compass",
    iconWidth: 34,
    iconHeight: 56,
    reverse: false,
  },
  {
    id: "client",
    title: "Client-led",
    description:
      "in-depth, segment-wise research into how MNCs and international clients work, their standards, workflows, and expectations, so we can adapt our processes to deliver a seamless experience regardless of geography.",
    image: "/images/about/r-and-d/client-led.png",
    imageAlt: "Two professionals shaking hands over project documents",
    icon: "/images/about/r-and-d/icon-client.svg",
    iconAlt: "Globe",
    iconWidth: 41,
    iconHeight: 41,
    reverse: true,
  },
] as const;

export function RdPage() {
  return (
    <div className="bg-white font-[family-name:var(--font-manrope)] text-[#1a1a1a]">
      {/* Hero */}
      <section
        aria-label="Research and development"
        className="relative w-full overflow-hidden pt-[60px]"
      >
        <div className="mx-auto w-full max-w-[1920px] px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-[80px] lg:pb-20 lg:pt-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto flex max-w-[1100px] flex-col items-center text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(1.5rem,2.7vw,34px)] font-bold leading-none tracking-normal"
            >
              Innovating for Speed, Designing for Fit
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-[760px] text-[clamp(0.875rem,1.15vw,16px)] font-normal leading-snug text-[#676767] sm:mt-4 sm:leading-[1.45]"
            >
              Advancing pre-cast and pre-fab methods to eliminate delays, while
              researching client working cultures to deliver a truly
              global-ready experience.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative mx-auto mt-8 aspect-[1670/827] w-full max-w-[1760px] overflow-hidden rounded-[25px] sm:mt-10 lg:mt-12"
          >
            <Image
              src="/images/about/r-and-d/hero.png"
              alt="Mekark engineer reviewing blueprints beside a building model"
              fill
              priority
              sizes="(max-width: 1920px) 100vw, 1760px"
              className="object-cover object-[center_42%]"
            />
          </motion.div>
        </div>
      </section>

      {/* Core focus tracks */}
      <section
        aria-label="Core focus area"
        className="relative w-full overflow-hidden bg-white"
      >
        <div className="mx-auto w-full max-w-[1920px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-[80px] lg:pl-[150px] lg:pb-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mx-auto flex max-w-[900px] flex-col items-center text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-[clamp(0.90rem,1.5vw,22px)] font-medium leading-none tracking-normal text-mekark-red"
            >
              Core Focus Area
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-[clamp(1.35rem,2.8vw,34px)] font-bold leading-none tracking-normal sm:mt-4"
            >
              Our R&amp;D efforts run on two tracks.
            </motion.h2>
          </motion.div>

          <div className="mx-auto mt-12 flex w-full max-w-[1380px] flex-col gap-14 sm:mt-14 sm:gap-16 lg:mt-16 lg:gap-[72px]">
            {TRACKS.map((track) => (
              <motion.article
                key={track.id}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className={`flex flex-col items-center gap-8 lg:items-center lg:gap-20 xl:gap-24 ${
                  track.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <motion.div
                  variants={fadeUp}
                  className="relative aspect-[718/481] w-full max-w-[620px] overflow-hidden rounded-[25px] lg:w-[46%] lg:max-w-[640px] lg:flex-none"
                >
                  <Image
                    src={track.image}
                    alt={track.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="object-cover object-[center_32%]"
                  />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className={`flex w-full max-w-[500px] flex-col gap-4 lg:flex-1 lg:max-w-[520px] ${
                    track.reverse
                      ? "items-start lg:items-end"
                      : "items-start"
                  }`}
                >
                  <Image
                    src={track.icon}
                    alt=""
                    width={track.iconWidth}
                    height={track.iconHeight}
                    className={`h-auto object-contain ${
                      track.id === "engineering"
                        ? "w-[28px] sm:w-[34px]"
                        : "w-[32px] sm:w-[38px]"
                    } ${
                      track.reverse
                        ? "ml-[18px] sm:ml-[22px] lg:ml-0 lg:mr-[22px]"
                        : "ml-[18px] sm:ml-[22px]"
                    }`}
                    aria-hidden
                  />

                  <div
                    className={`flex w-full max-w-[500px] items-stretch gap-5 ${
                      track.reverse ? "lg:flex-row-reverse lg:text-right" : "text-left"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`w-[3px] shrink-0 self-stretch rounded-full bg-mekark-red sm:w-[4px] ${
                        track.reverse
                          ? "translate-x-3 sm:translate-x-3.5 lg:translate-x-1.5"
                          : "translate-x-2 sm:translate-x-2.5 lg:-translate-x-1.5"
                      }`}
                    />
                    <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
                      <h3 className="text-[clamp(1.2rem,2.1vw,28px)] font-semibold leading-none tracking-normal">
                        {track.title}
                      </h3>
                      <p className="text-[clamp(1rem,1.5vw,22px)] font-normal leading-snug tracking-normal text-[#4a4a4a] sm:leading-[1.35]">
                        {track.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom banner */}
      <section
        aria-label="R and D summary"
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(96.33deg, #8B0C11 6.54%, #ED1D23 108.89%)",
        }}
      >
        <div className="mx-auto flex min-h-[140px] w-full max-w-[1920px] items-center justify-center px-5 py-10 sm:min-h-[180px] sm:px-8 sm:py-12 lg:min-h-[207px] lg:px-[80px]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="max-w-[1400px] text-center text-[clamp(1.25rem,3vw,39px)] font-extrabold leading-none tracking-normal text-white"
          >
            Together, these efforts help us build not just faster, but smarter.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

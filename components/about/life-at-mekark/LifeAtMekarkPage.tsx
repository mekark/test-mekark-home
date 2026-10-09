import Image from "next/image";
import Link from "next/link";
import { VideoCard } from "@/components/about/life-at-mekark/VideoCard";
import { Reveal, RevealGroup } from "@/components/about/life-at-mekark/Reveal";
import { CollageGrid } from "@/components/about/life-at-mekark/CollageGrid";

const IMG = "/images/about/life-at-mekark";
const MEKARK_REEL_URL = "https://www.instagram.com/reel/DQBMJsgkYEG/";
const ZOHO_FOUNDER_REEL_URL =
  "https://www.instagram.com/reel/DcyW4mFRDPA/?stkn=MTVzZmZ4dnpla3hrMw%3D%3D";
const MEKARK_REEL_PREVIEW = `${IMG}/reel-1-preview.mp4`;

const CULTURE_VALUES = [
  {
    title: "People First",
    copy: "Great work starts with great people. We create a supportive culture where everyone feels valued and empowered.",
    icon: `${IMG}/icon-people-first.svg`,
    borderColor: "border-[#dba014]",
  },
  {
    title: "Build & Learn",
    copy: "Every project is a chance to explore, experiment, and learn. We turn challenges into opportunities to grow and build better.",
    icon: `${IMG}/icon-build-learn.svg`,
    borderColor: "border-[#1475db]",
  },
  {
    title: "Own Your Impact",
    copy: "Take ownership, make bold decisions, and turn your ideas into action. At Mekark, every contribution has the power to make a difference.",
    icon: `${IMG}/icon-own-impact.svg`,
    borderColor: "border-[#2a9f1d]",
  },
  {
    title: "Celebrate Together",
    copy: "Every win matters at Mekark. We celebrate the little moments, big milestones, and everything we achieve together.",
    icon: `${IMG}/icon-celebrate.svg`,
    borderColor: "border-[#c31b7d]",
  },
] as const;

function SectionHeading({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[850px] flex-col items-center gap-2.5 text-center">
      <h2 className="font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,3.5vw,40px)] font-bold leading-[1.4] text-[#1a1a1a]">
        {title}
      </h2>
      <p className="font-[family-name:var(--font-manrope)] text-sm leading-normal text-[#191919] sm:text-[clamp(1rem,1.4vw,18px)]">
        {children}
      </p>
    </div>
  );
}

export function LifeAtMekarkPage() {
  return (
    <main className="overflow-hidden bg-white text-[#191919]">
      {/* Hero */}
      <section className="relative isolate pt-[60px]">
        <div className="mx-auto max-w-[850px] px-5 pb-8 pt-10 text-center sm:px-8 sm:pb-10 sm:pt-14 lg:px-10">
          <RevealGroup immediate className="flex flex-col items-center gap-2.5">
            <Reveal as="h1" delay={0.1}
              className="font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-[1.4] text-[#1a1a1a] sm:text-[clamp(1.85rem,4vw,40px)]"
            >
              Life At Mekark
            </Reveal>
            <Reveal as="p" delay={0.22} className="font-[family-name:var(--font-manrope)] text-sm leading-normal text-[#191919] sm:text-[clamp(1rem,1.4vw,18px)]">
              Behind every project, a team that believes in it.
              <br className="hidden sm:inline" />
              <span className="sm:ml-1">
                A glimpse into the people, moments, and everyday hustle that make
                Mekark what it is.
              </span>
            </Reveal>
          </RevealGroup>
        </div>

        <RevealGroup>
          <Reveal className="mx-auto px-5 pb-8 sm:px-8 sm:pb-16 lg:px-10 lg:pb-24">
            <CollageGrid />
          </Reveal>
        </RevealGroup>
      </section>

      {/* @Mekark */}
      <section className="max-md:[content-visibility:auto] max-md:[contain-intrinsic-size:auto_900px] bg-white px-5 pb-5 pt-8 sm:px-8 sm:pb-6 sm:pt-20 lg:px-10 lg:pb-8 lg:pt-24">
        <RevealGroup className="mx-auto max-w-[1280px]">
          <Reveal delay={0.1} className="mb-10 sm:mb-14">
            <SectionHeading title="@Mekark">
              Follow our journey beyond the workplace, explore team moments,
              celebrations, milestones, and everyday life at Mekark across our
              social media channels.
            </SectionHeading>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <Reveal delay={0.22}><VideoCard
              priority
              src={`${IMG}/video-1.webp`}
              alt="Mekark office entrance with illuminated logo"
              label="Play Mekark Instagram reel"
              href={MEKARK_REEL_URL}
              previewSrc={MEKARK_REEL_PREVIEW}
              imgClassName="absolute top-[-37.71%] left-[-0.08%] h-[160.73%] w-full max-w-none object-cover"
            /></Reveal>
            <Reveal delay={0.34}><VideoCard
              src={`${IMG}/video-2-zoho-founder.webp`}
              alt="Zoho co-founder speaking about the rise of Mekark"
              label="Watch the Zoho co-founder reel on Instagram"
              href={ZOHO_FOUNDER_REEL_URL}
              imgClassName="absolute left-0 top-0 h-[160.73%] w-full max-w-none object-cover"
            /></Reveal>
          </div>
        </RevealGroup>
      </section>

      {/* Culture */}
      <section className="max-md:[content-visibility:auto] max-md:[contain-intrinsic-size:auto_900px] bg-white px-5 pb-16 pt-5 sm:px-8 sm:pb-20 sm:pt-6 lg:px-10 lg:pb-24 lg:pt-8">
        <RevealGroup className="mx-auto max-w-[1370px]">
          <Reveal delay={0.1} className="mb-10 sm:mb-14">
            <SectionHeading title="What Makes Our Culture Special?">
              More than a workplace, Mekark is where people and ideas come
              together.
              <br className="hidden sm:inline" />
              We grow, create, and celebrate together.
            </SectionHeading>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[60px]">
            {CULTURE_VALUES.map((value, index) => (
              <Reveal as="article" delay={0.22 + index * 0.12}
                key={value.title}
                className={`flex flex-col gap-2.5 rounded-[25px] border-l-4 bg-[#f4f4f4] p-5 shadow-[-2px_2px_3px_rgba(30,30,30,0.15)] ${value.borderColor}`}
              >
                <div className="relative size-[50px] shrink-0 overflow-hidden">
                  <Image
                    src={value.icon}
                    alt={`${value.title} icon`}
                    fill
                    aria-hidden
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[#3c3938]">
                    {value.title}
                  </h3>
                  <p className="font-[family-name:var(--font-manrope)] text-sm leading-normal text-[#555] sm:text-base">
                    {value.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.7} className="mt-14 flex justify-center sm:mt-16 lg:mt-20">
            <Link
              href="/resources/careers"
              className="group inline-flex items-center gap-2.5 rounded-[10px] bg-[#ed1c24] px-[50px] py-[15px] font-[family-name:var(--font-manrope)] text-[clamp(1.125rem,2vw,24px)] font-bold text-white shadow-[-2px_2px_3px_rgba(237,28,36,0.15)] transition-transform hover:-translate-y-0.5"
            >
              Work With Us
              <span className="relative size-5 shrink-0 overflow-hidden sm:translate-x-1 min-[1201px]:size-6 min-[1920px]:size-7">
                <Image
                  src={`${IMG}/arrow-icon.svg`}
                  alt=""
                  fill
                  aria-hidden
                  className="object-contain"
                />
              </span>
            </Link>
          </Reveal>
        </RevealGroup>
      </section>
    </main>
  );
}

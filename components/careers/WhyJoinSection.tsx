import { AssetIcon } from "./AssetIcon";

const reasons = [
  {
    icon: "/assets/careers/icons/skyline.svg",
    title: ["Real Project", "Exposure"],
    body: ["Work on live industrial", "projects across multiple", "sectors in India."],
  },
  {
    icon: "/assets/careers/icons/team.svg",
    title: ["Multi-Disciplinary", "Team"],
    body: [
      "Collaborate with experts",
      "across engineering,",
      "design, manufacturing,",
      "and management.",
    ],
  },
  {
    icon: "/assets/careers/icons/target.svg",
    title: ["Built With", "Purpose"],
    body: [
      "Every project we deliver",
      "supports business",
      "growth, safety, and",
      "communities.",
    ],
  },
  {
    icon: "/assets/careers/icons/growth.svg",
    title: ["Grow Your", "Career"],
    body: [
      "Continuous learning,",
      "mentorship, and",
      "opportunities to take on",
      "more responsibility.",
    ],
  },
  {
    icon: "/assets/careers/icons/shield.svg",
    title: ["Performance", "Culture"],
    body: [
      "We value accountability,",
      "quality, speed,",
      "communication, and",
      "practical problem-",
      "solving.",
    ],
  },
  {
    icon: "/assets/careers/icons/impact.svg",
    title: ["Make an", "Impact"],
    body: [
      "Your work directly",
      "contributes to industries,",
      "people, and the nation.",
    ],
  },
];

export function WhyJoinSection() {
  return (
    <section className="border-y border-whitesmoke bg-[#fafafa] px-5 py-12 sm:px-4 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mx-auto mb-10 w-fit text-center sm:mb-[58px]">
          <h2 className="font-manrope text-[28px] font-bold leading-[36px] text-gray sm:text-[36px] sm:leading-[44px]">
            Why join{" "}
            <span className="relative inline-block pb-3 text-crimson">
              Mekark?
              <span className="absolute bottom-0 left-1/2 h-[3px] w-14 -translate-x-1/2 bg-crimson" />
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {reasons.map((reason) => (
            <article
              key={reason.icon}
              className="box-border flex min-h-[240px] w-full flex-col items-center gap-3 rounded-[12px] border-[0.9px] border-solid border-whitesmoke bg-white px-5 pt-7 pb-6 text-center font-inter text-gray shadow-[0px_3.72px_14.89px_rgba(0,0,0,0.03)] sm:min-h-[280px]"
            >
              <AssetIcon src={reason.icon} alt="" size={52} />
              <div className="flex w-full flex-col items-center pt-1">
                <h3 className="text-[16px] font-semibold leading-[22px]">
                  <span className="xl:hidden">{reason.title.join(" ")}</span>
                  <span className="hidden xl:block">
                    {reason.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </h3>
              </div>
              <div className="flex w-full flex-col items-center text-[13px] font-medium leading-[22px] text-slategray">
                <p className="xl:hidden">{reason.body.join(" ")}</p>
                <p className="hidden xl:block">
                  {reason.body.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

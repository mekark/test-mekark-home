import { AssetIcon } from "./AssetIcon";
import styles from "./WhyJoinSection.module.css";

const reasons = [
  {
    icon: "/images/mobile/why-join-icon/1.png",
    title: ["Real Project", "Exposure"],
    body: ["Work on live industrial", "projects across multiple", "sectors in India."],
  },
  {
    icon: "/images/mobile/why-join-icon/2.png",
    title: ["Multi-Disciplinary", "Team"],
    body: [
      "Collaborate with experts",
      "across engineering,",
      "design, manufacturing,",
      "and management.",
    ],
  },
  {
    icon: "/images/mobile/why-join-icon/3.png",
    title: ["Built With", "Purpose"],
    body: [
      "Every project we deliver",
      "supports business",
      "growth, safety, and",
      "communities.",
    ],
  },
  {
    icon: "/images/mobile/why-join-icon/4.png",
    title: ["Grow Your", "Career"],
    body: [
      "Continuous learning,",
      "mentorship, and",
      "opportunities to take on",
      "more responsibility.",
    ],
  },
  {
    icon: "/images/mobile/why-join-icon/5.png",
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
    icon: "/images/mobile/why-join-icon/lucide_biceps-flexed.png",
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
    <>
      {/* Mobile — Figma why join */}
      <section
        className={`${styles.mobileWhyJoin} border-y border-whitesmoke bg-[#fafafa] px-5 py-10`}
      >
        <div className="mx-auto w-full max-w-[323px]">
          <div className="mx-auto mb-8 w-[237px] text-center">
            <h2 className="font-manrope text-[28px] font-bold leading-8 tracking-normal text-[#111827]">
              Why join{" "}
              <span className="relative inline-block pb-2 font-manrope text-[28px] font-bold leading-8 text-[#e31b23]">
                Mekark?
                <span className="absolute bottom-0 left-1/2 h-0.5 w-14 -translate-x-1/2 bg-[#e31b23]" />
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {reasons.map((reason) => (
              <article
                key={reason.icon}
                className="box-border flex w-full max-w-[323px] flex-col items-center gap-2.5 rounded-[11.17px] border-[0.93px] border-solid border-[#f3f4f6] bg-white px-5 py-3.5 text-center shadow-[0px_3.72px_14.89px_0px_#00000008]"
              >
                <AssetIcon
                  src={reason.icon}
                  alt={`${reason.title.join(" ")} icon`}
                  size={30}
                />
                <h3 className="w-full max-w-[242px] font-manrope text-[18px] font-normal leading-[17.45px] tracking-normal text-[#111827]">
                  {reason.title.join(" ")}
                </h3>
                <p className="w-full max-w-[264px] font-manrope text-[14px] font-normal leading-[19.66px] tracking-normal text-[#6b7280]">
                  {reason.body.join(" ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Normal / desktop view — unchanged */}
      <section
        className={`${styles.desktopWhyJoin} border-y border-whitesmoke bg-[#fafafa] px-5 py-12 sm:px-4 sm:py-20 lg:px-8`}
      >
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
                className="box-border flex min-h-[240px] w-full flex-col items-center gap-3 rounded-[12px] border-[0.9px] border-solid border-whitesmoke bg-white px-5 pt-7 pb-6 text-center font-manrope text-gray shadow-[0px_3.72px_14.89px_rgba(0,0,0,0.03)] sm:min-h-[280px]"
              >
                <AssetIcon
                  src={reason.icon}
                  alt={`${reason.title.join(" ")} icon`}
                  size={52}
                />
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
    </>
  );
}

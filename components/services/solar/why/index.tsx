import type { NextPage } from "next";
import Image from "next/image";
import {
  MOBILE_FEATURE_NUMBER_CLASS,
  MOBILE_FEATURE_TITLE_CLASS,
  PEB_WHY_CHOOSE_DESCRIPTION_CLASS,
} from "@/components/services/serviceMobileCivilTemplate";
import styles from "./index.module.css";
import macStyles from "./whyMac.module.css";

const SOLAR_WHY_CHOOSE_MOBILE_BG =
  "linear-gradient(269.79deg, rgb(255, 255, 255) 35.03%, rgba(255, 255, 255, 0) 99.35%), linear-gradient(90deg, rgb(230, 230, 230), rgb(230, 230, 230))";

const SOLAR_WHY_CHOOSE_HERO_FADE =
  "linear-gradient(180.23deg, rgba(220, 220, 220, 0) 0.54%, rgba(240, 240, 240, 0.762) 50.05%, rgb(248, 248, 248) 84.11%)";

const SOLAR_WHY_CHOOSE_PORTRAIT_FADE =
  "linear-gradient(180deg, rgba(248,248,248,0) 0%, rgba(248,248,248,0.45) 42%, #f8f8f8 100%)";

const features = [
  {
    num: "01",
    title: "Turnkey Solar EPC",
    body: "We handle design, supply, installation, and commissioning one contract, one accountable team, zero vendor coordination.",
  },
  {
    num: "02",
    title: "In-House Engineering Team",
    body: "175+ engineers design every system for structural compatibility, load requirements, and maximum energy output.",
  },
  {
    num: "03",
    title: "South India Regional Expertise",
    body: "Active project experience across Tamil Nadu, Chennai, Bangalore, Hyderabad, Karnataka, and Andhra Pradesh.",
  },
  {
    num: "04",
    title: "ISO-Certified Processes",
    body: "Consistent quality, safety compliance, and documentation across every commercial solar project.",
  },
  {
    num: "05",
    title: "Long-Term Support and AMC",
    body: "We stay with you after commissioning, offering Annual Maintenance Contracts, performance monitoring, and preventive servicing to protect your investment and keep your system running at peak output.",
  },
  {
    num: "06",
    title: "18+ Years of Experience:",
    body: "From factories and warehouses to multi-storey commercial and institutional buildings, we turn every rooftop into a source of clean, cost-saving power.",
  },
] as const;

function MobilePortrait() {
  return (
    <div className="relative -mb-[36px] mx-auto h-[304px] w-full max-w-[390px] isolate overflow-hidden px-[15px]">
      <div
        className="pointer-events-none absolute left-[15px] top-[8px] z-0 h-[197px] w-[min(360px,calc(100%-30px))] overflow-hidden"
        aria-hidden
      >
        <div className="relative h-full w-full blur-[2.667px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/solar/why/image-25.webp"
            alt=""
            className="pointer-events-none absolute left-[1.99%] top-[-0.06%] h-full w-[97.54%] max-w-none object-cover"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-[15px] bottom-0 top-[8px] z-[1] flex items-end justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/solar/why/engineers.webp"
          alt="Mekark engineering team on site"
          className="h-[min(292px,104%)] w-auto max-w-[366px] object-contain object-bottom"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[52%]"
        style={{ backgroundImage: SOLAR_WHY_CHOOSE_PORTRAIT_FADE }}
        aria-hidden
      />
    </div>
  );
}

function MobileFeatureItem({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <article className="grid w-full grid-cols-[66px_1px_1fr] items-start gap-x-2 py-4">
      <span
        className={`justify-self-start pt-4 whitespace-nowrap ${MOBILE_FEATURE_NUMBER_CLASS}`}
      >
        {num}
      </span>
      <span
        className="min-h-[92px] w-px self-stretch bg-[rgba(204,16,32,0.4)]"
        aria-hidden
      />
      <div className="flex min-w-0 flex-col gap-2 pt-4 text-left">
        <h3 className={`${MOBILE_FEATURE_TITLE_CLASS} leading-[23px]`}>{title}</h3>
        <p className="font-manrope text-sm font-normal leading-normal text-[#555]">
          {body}
        </p>
      </div>
    </article>
  );
}

function WhyChooseMekarkMobile() {
  return (
    <div
      className="relative isolate overflow-hidden pb-0 lg:hidden"
      style={{ backgroundImage: SOLAR_WHY_CHOOSE_MOBILE_BG }}
    >
      <div className="relative mx-auto flex w-full max-w-[390px] flex-col items-center overflow-hidden pt-[26px]">
        <header className="flex w-full max-w-[350px] flex-col items-center gap-[14px] px-6">
          <h2
            id="solar-why-choose-title"
            className="w-full text-center font-manrope text-[28px] font-bold leading-[35px] text-[#111]"
          >
            <span className="block">Why Industrial Clients</span>
            <span className="block whitespace-nowrap text-[#e50818]">
              Choose Mekark for Solar
            </span>
          </h2>
          <p className={PEB_WHY_CHOOSE_DESCRIPTION_CLASS}>
            As a trusted industrial construction company and commercial solar
            contractor, Mekark brings manufacturing capacity and engineering
            depth that most solar vendors don&apos;t have in-house.
          </p>
        </header>

        <MobilePortrait />
      </div>

      <div className="relative z-10 w-full">
        <div className="relative overflow-hidden bg-[#f8f8f8] px-6 pb-16 pt-8">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[264px] -translate-y-[16px]"
            style={{ backgroundImage: SOLAR_WHY_CHOOSE_HERO_FADE }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-[-61px] h-[275px] w-[513px] max-w-none"
            aria-hidden
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/solar/why/copy-1.webp"
              alt=""
              className="size-full object-cover object-bottom"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-full max-w-[350px] flex-col">
            {features.map((item) => (
              <MobileFeatureItem key={`m-${item.num}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const WhyChooseMekark: NextPage = () => {
  return (
    <>
      <WhyChooseMekarkMobile />

      <div
        className={`${styles.whyChooseMekark} ${macStyles.whyChooseMekark} !hidden lg:!block`}
      >
        <div className={`${styles.copy1Parent} ${macStyles.copy1Parent}`}>
          <Image
            className={`${styles.copy1Icon} ${macStyles.copy1Icon}`}
            width={1920}
            height={1032}
            sizes="100vw"
            src="/images/services/solar/why/copy-1.webp"
            alt="Solar EPC project site background"
          />
          <div
            className={`${styles.whyIndustrialClientsChooseParent} ${macStyles.whyIndustrialClientsChooseParent}`}
          >
            <b
              className={`${styles.whyIndustrialClientsContainer} ${macStyles.whyIndustrialClientsContainer}`}
            >
              <span className={styles.whyIndustrialClientsContainer2}>
                <span>{`Why Industrial Clients `}</span>
                <span className={styles.chooseMekarkFor}>
                  Choose Mekark for Solar
                </span>
              </span>
            </b>
            <div
              className={`${styles.asATrusted} ${macStyles.asATrusted} service-section-description`}
            >
              As a trusted industrial construction company and commercial solar
              contractor, Mekark brings
              <br />
              manufacturing capacity and engineering depth that most solar
              vendors don&apos;t have in-house.
            </div>
          </div>
          <div className={`${styles.frameParent} ${macStyles.frameParent}`}>
            <div
              className={`${styles.leftColumnParent} ${macStyles.leftColumnParent}`}
            >
              <div className={`${styles.leftColumn} ${macStyles.leftColumn}`}>
                <div className={`${styles.div} ${macStyles.div}`}>
                  <div className={`${styles.container} ${macStyles.container}`}>
                    <div className={`${styles.div2} ${macStyles.div2}`}>01</div>
                  </div>
                  <div
                    className={`${styles.marginalignStretch} ${macStyles.marginalignStretch}`}
                  >
                    <div className={`${styles.margin} ${macStyles.margin}`}>
                      <div
                        className={`${styles.verticalDivider} ${macStyles.verticalDivider}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.turnkeySolarEpcParent} ${macStyles.turnkeySolarEpcParent}`}
                  >
                    <b
                      className={`${styles.turnkeySolarEpc} ${macStyles.turnkeySolarEpc}`}
                    >
                      {features[0].title}
                    </b>
                    <div
                      className={`${styles.weHandleDesign} ${macStyles.weHandleDesign}`}
                    >
                      {features[0].body}
                    </div>
                  </div>
                </div>
                <div className={`${styles.div3} ${macStyles.div3}`}>
                  <div className={`${styles.div2} ${macStyles.div2}`}>03</div>
                  <div
                    className={`${styles.marginalignStretch2} ${macStyles.marginalignStretch2}`}
                  >
                    <div className={`${styles.margin} ${macStyles.margin}`}>
                      <div
                        className={`${styles.verticalDivider} ${macStyles.verticalDivider}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.container2} ${macStyles.container2}`}
                  >
                    <div
                      className={`${styles.southIndiaRegionalExpertiseParent} ${macStyles.southIndiaRegionalExpertiseParent}`}
                    >
                      <b
                        className={`${styles.southIndiaRegional} ${macStyles.southIndiaRegional}`}
                      >
                        {features[2].title}
                      </b>
                      <div
                        className={`${styles.weHandleDesign} ${macStyles.weHandleDesign}`}
                      >
                        {features[2].body}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.div3} ${macStyles.div3}`}>
                  <div className={`${styles.div6} ${macStyles.div6}`}>05</div>
                  <div
                    className={`${styles.marginalignStretch3} ${macStyles.marginalignStretch3}`}
                  >
                    <div className={`${styles.margin} ${macStyles.margin}`}>
                      <div
                        className={`${styles.verticalDivider} ${macStyles.verticalDivider}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.container3} ${macStyles.container3}`}
                  >
                    <div
                      className={`${styles.longTermSupportAndAmcParent} ${macStyles.longTermSupportAndAmcParent}`}
                    >
                      <b
                        className={`${styles.longTermSupportAnd} ${macStyles.longTermSupportAnd}`}
                      >
                        {features[4].title}
                      </b>
                      <div
                        className={`${styles.weHandleDesign} ${macStyles.weHandleDesign}`}
                      >
                        {features[4].body}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.rightColumn} ${macStyles.rightColumn}`}>
                <div className={`${styles.div} ${macStyles.div}`}>
                  <div
                    className={`${styles.container4} ${macStyles.container4}`}
                  >
                    <div className={`${styles.div2} ${macStyles.div2}`}>02</div>
                  </div>
                  <div
                    className={`${styles.marginalignStretch4} ${macStyles.marginalignStretch4}`}
                  >
                    <div className={`${styles.margin} ${macStyles.margin}`}>
                      <div
                        className={`${styles.verticalDivider} ${macStyles.verticalDivider}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.container5} ${macStyles.container5}`}
                  >
                    <div
                      className={`${styles.inHouseEngineeringTeamParent} ${macStyles.inHouseEngineeringTeamParent}`}
                    >
                      <b
                        className={`${styles.longTermSupportAnd} ${macStyles.longTermSupportAnd}`}
                      >
                        {features[1].title}
                      </b>
                      <div
                        className={`${styles.xEngineersDesign} ${macStyles.xEngineersDesign}`}
                      >
                        {features[1].body}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.div3} ${macStyles.div3}`}>
                  <div className={`${styles.div6} ${macStyles.div6}`}>04</div>
                  <div
                    className={`${styles.marginalignStretch5} ${macStyles.marginalignStretch5}`}
                  >
                    <div className={`${styles.margin2} ${macStyles.margin2}`}>
                      <div
                        className={`${styles.verticalDivider} ${macStyles.verticalDivider}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.container6} ${macStyles.container6}`}
                  >
                    <div
                      className={`${styles.isoCertifiedProcessesParent} ${macStyles.isoCertifiedProcessesParent}`}
                    >
                      <b
                        className={`${styles.turnkeySolarEpc} ${macStyles.turnkeySolarEpc}`}
                      >
                        {features[3].title}
                      </b>
                      <div
                        className={`${styles.weHandleDesign} ${macStyles.weHandleDesign}`}
                      >
                        {features[3].body}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.div3} ${macStyles.div3}`}>
                  <div className={`${styles.div2} ${macStyles.div2}`}>06</div>
                  <div
                    className={`${styles.marginalignStretch2} ${macStyles.marginalignStretch2}`}
                  >
                    <div className={`${styles.margin2} ${macStyles.margin2}`}>
                      <div
                        className={`${styles.verticalDivider} ${macStyles.verticalDivider}`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.container7} ${macStyles.container7}`}
                  >
                    <div
                      className={`${styles.xYearsOfExperienceParent} ${macStyles.xYearsOfExperienceParent}`}
                    >
                      <b
                        className={`${styles.turnkeySolarEpc} ${macStyles.turnkeySolarEpc}`}
                      >
                        {features[5].title}
                      </b>
                      <div
                        className={`${styles.weHandleDesign} ${macStyles.weHandleDesign}`}
                      >
                        {features[5].body}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.image25Parent} ${macStyles.image25Parent}`}
            >
              <Image
                className={`${styles.image25Icon} ${macStyles.image25Icon}`}
                width={597}
                height={388}
                sizes="(max-width: 1199px) 55vw, 31vw"
                src="/images/services/solar/why/image-25.webp"
                alt="Commercial rooftop solar installation overview"
              />
              <Image
                className={`${styles.chatgptImageAug3202604} ${macStyles.chatgptImageAug3202604}`}
                width={673}
                height={669}
                sizes="(max-width: 1199px) 100vw, 70vw"
                src="/images/services/solar/why/engineers.webp"
                alt="Mekark engineering team on site"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseMekark;

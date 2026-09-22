"use client";

import { IndustryMobileCtaBanner } from "@/components/industries/shared/IndustryMobileCtaBanner";
import { logisticsCtaWorkerAssets } from "@/components/industries/shared/logisticsCtaWorkerAssets";
import { FmcgCtaBanner } from "./FmcgCtaBanner";

export function CtaBanner() {
  return (
    <>
      <div className="min-[1201px]:hidden">
        <IndustryMobileCtaBanner
          title={
            <>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                Planning an FMCG
              </span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                Manufacturing Facility
              </span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                in South India?
              </span>
            </>
          }
          subtitle={
            <>
              Every week your production line isn&apos;t running is lost market
              share and a delayed product launch. Mekark&apos;s team will assess
              your process requirements, hygiene class, warehousing needs, and
              utility load, and deliver a transparent budgetary estimate within
              24 hours. No obligation, just honest expert advice.
            </>
          }
          buttonText="Talk to Our Expert"
          workerAlt="Mekark warehouse construction expert"
          assets={logisticsCtaWorkerAssets}
        />
      </div>

      <FmcgCtaBanner />
    </>
  );
}

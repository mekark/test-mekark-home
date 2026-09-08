import Image from "next/image";
import macStyles from "./processMac.module.css";

export function ProcessConnector() {
  return (
    <div
      className={`relative hidden h-[24px] w-[67px] shrink-0 -translate-x-2 self-center min-[1201px]:block ${macStyles.connector}`}
      aria-hidden
    >
      <Image
        src="/images/industries/fmcg/project-execution-process/connector-arrow.svg"
        alt=""
        fill
        className="object-contain"
      />
    </div>
  );
}

import Image from "next/image";

export function ProcessConnector() {
  return (
    <div
      className="relative hidden h-[24px] w-[67px] shrink-0 lg:block"
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

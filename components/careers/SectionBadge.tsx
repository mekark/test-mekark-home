type SectionBadgeProps = {
  label: string;
};

export function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(219,28,34,0.2)] bg-[rgba(219,28,34,0.05)] px-3.5 py-1.5">
      <span className="size-2 shrink-0 rounded-full bg-[#e40015]" />
      <span className="font-inter text-[13px] font-medium capitalize leading-[18px] tracking-[0.53px] text-[#e9000e] sm:text-[14px] sm:whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

import { CircularProgress } from "@/components/ui/CircularProgress";

export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] flex-1 items-center justify-center py-24"
      aria-busy="true"
      aria-live="polite"
    >
      <CircularProgress size={56} strokeWidth={4} />
    </div>
  );
}

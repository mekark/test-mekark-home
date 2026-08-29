type CircularProgressProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function CircularProgress({
  size = 48,
  strokeWidth = 3,
  className = "",
}: CircularProgressProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`inline-block animate-spin rounded-full border-solid border-mekark-red/20 border-t-mekark-red ${className}`}
      style={{ width: size, height: size, borderWidth: strokeWidth }}
    />
  );
}

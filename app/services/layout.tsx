import { montserrat } from "@/lib/fonts";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={montserrat.variable}>{children}</div>;
}

import { montserrat } from "@/lib/fonts";

export default function IndustriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={montserrat.variable}>{children}</div>;
}

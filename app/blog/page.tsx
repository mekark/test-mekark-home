import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({
  title: "Mekark Blog | Industrial Construction & PEB Insights",
  description:
    "Explore Mekark's blog for industrial construction insights, PEB guides, project updates, engineering trends and industry stories.",
  canonicalUrl: "https://blog.mekark.com/",
});

export default function BlogPage() {
  redirect("https://blog.mekark.com/");
}

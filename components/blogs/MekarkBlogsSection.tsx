"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  aboutBadgeDot,
  aboutBadgeReveal,
  blogCardReveal,
  blogGridStagger,
  blogHeaderReveal,
  blogHeadlineReveal,
  blogSectionStagger,
} from "@/lib/motion-variants";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";

const BLOG_BASE_URL = "https://blog.mekark.com";

const VIEWPORT = { once: true, margin: "-80px" as const };

const BLOG_POSTS = [
  {
    href: `${BLOG_BASE_URL}/blog/peb-vs-conventional-construction-in-chennai-which-is-right-for-your-industrial-project`,
    badge: "PEB",
    category: "PEB",
    title:
      "PEB vs Conventional Construction in Chennai: Which Is Right for Your Industrial Project?",
    excerpt:
      "The choice of construction methodology can be the difference between success and failure when it comes to meeting deadlines and budget requirements. For the factory owners, warehouse developers and industrial planning professionals in Chennai and elsewhere in Tamil Nadu, the PEB vs. conventional construction dilemma is basically about two choices: PEB or traditional brick and…",
    image: "https://cms.mekark.com/wp-content/uploads/2026/08/HERO.png",
    author: "admin",
    readTime: "7m",
  },
  {
    href: `${BLOG_BASE_URL}/blog/how-peb-structures-reduce-construction-time-by-50`,
    badge: "PEB",
    category: "PEB",
    title: "What is a Pre-Engineered Building (PEB)?",
    excerpt:
      "Introduction If you are planning to set up a warehouse, factory, or industrial shed, you have likely heard the term Pre-Engineered Building (PEB). We, as a well-known PEB company of India, have noticed a rising trend among industries that are opting for PEB construction due to its rapidity, cost-effectiveness, and scalability. In case you wish…",
    image: "https://cms.mekark.com/wp-content/uploads/2026/06/Banner.jpg.jpeg",
    author: "admin",
    readTime: "5m",
  },
] as const;

function ReadTimeIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3">
      <circle
        cx="8"
        cy="8"
        r="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M8 4.8V8l2.2 1.3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function BlogCard({
  post,
  index,
}: {
  post: (typeof BLOG_POSTS)[number];
  index: number;
}) {
  return (
    <motion.a
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={blogCardReveal(index)}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className="flex flex-col overflow-hidden rounded-[24px] border border-black/[0.08] bg-white font-[family-name:var(--font-manrope)] shadow-[4px_4px_9px_0px_rgba(0,0,0,0.05)] max-lg:rounded-[20px]"
    >
      <div className="relative h-[192px] w-full shrink-0 bg-[#f3f4f6] max-lg:h-[178px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
        />
        <span className="absolute left-2.5 top-2.5 rounded-full border border-[#ed2024]/20 bg-white/90 px-2.5 py-1 text-[10px] font-bold leading-[14px] text-[#ed2024] backdrop-blur-[3px]">
          {post.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 max-lg:p-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.95px] text-[#ed2024] max-lg:text-[10px] max-lg:tracking-[1px]">
          {post.category}
        </span>
        <h3 className="mt-2 text-[15px] font-bold leading-5 text-[#1a1a1a] max-lg:text-lg max-lg:font-bold max-lg:leading-[30px]">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#6a6a6a] max-lg:text-sm max-lg:leading-[22px] max-lg:text-[#666]">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 max-lg:mt-3 max-lg:pt-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fef2f2] text-[11px] font-bold text-[#ed2024]">
              {post.author.charAt(0)}
            </span>
            <span className="text-xs font-semibold text-[#6a6a6a] max-lg:text-sm max-lg:font-normal max-lg:text-[#666]">
              {post.author}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#8a8a8a] max-lg:text-sm max-lg:text-[#666]">
            <ReadTimeIcon />
            {post.readTime}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function MekarkBlogsSection() {
  return (
    <section className="w-full bg-[#ececec] font-[family-name:var(--font-manrope)]">
      <motion.div
        variants={blogSectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={`${SECTION_CONTAINER_CLASS} max-lg:py-8 py-12 lg:py-[70px] xl:py-[53px] 2xl:py-[70px]`}
      >
        <motion.div
          variants={blogHeaderReveal}
          className="flex flex-col items-center gap-2 text-center max-lg:gap-3"
        >
          <motion.div
            variants={aboutBadgeReveal}
            className="inline-flex items-center gap-1.5 rounded-full border border-crimson-100 bg-crimson-200 px-2.5 py-1.5 sm:gap-[7px] sm:px-[11.5px] sm:py-[6px]"
          >
            <motion.div
              variants={aboutBadgeDot}
              className="size-1.5 rounded-full bg-red-200 sm:size-[7px]"
              aria-hidden
            />
            <span className="text-[10px] font-medium capitalize tracking-[0.5px] text-red-100 sm:text-xs sm:tracking-[0.53px]">
              Mekark Blogs
            </span>
          </motion.div>

          <motion.h2
            variants={blogHeadlineReveal}
            className="max-w-[760px] text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-[-1.3px] text-[#1a1a1a] max-lg:max-w-none max-lg:text-[28px] max-lg:leading-[30px] max-lg:tracking-normal lg:text-[40px] lg:leading-[52px] xl:text-[36px] xl:leading-[46px] 2xl:text-[40px] 2xl:leading-[52px]"
          >
            <span className="max-lg:block">Engineering Insights, Project Updates</span>{" "}
            <span className="text-[#ed2024] max-lg:block">And Industry Stories</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={blogGridStagger}
          className="mt-8 grid grid-cols-1 gap-[30px] max-lg:mt-6 max-lg:gap-6 sm:grid-cols-2 sm:gap-x-8 lg:mt-[30px] lg:gap-x-[42px] lg:gap-y-[30px]"
        >
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.href} post={post} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

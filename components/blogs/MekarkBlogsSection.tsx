"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  aboutBadgeDot,
  aboutBadgeReveal,
  blogCardReveal,
  blogGridStagger,
  blogHeaderReveal,
  blogHeadlineReveal,
  blogSectionStagger,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

/** First row + peek of second row (matches Figma fade) */
const COLLAPSED_HEIGHT_CLASS =
  "max-h-[640px] sm:max-h-[520px] lg:max-h-[400px]";

const BLOG_POSTS = [
  {
    badge: "Tutorial",
    category: "Tutorials",
    title: ["Getting Started with Mekark Edge Nodes", "in Under 10 Minutes"],
    excerpt:
      "A step-by-step walkthrough to deploy your first edge node, configure health checks, and route traffic…",
    image: "/images/blogs/edge-nodes.png",
  },
  {
    badge: "Case Study",
    category: "Case Studies",
    title: ["How Veltro Bank Scaled to 2M", "Transactions/sec with Mekark"],
    excerpt:
      "Veltro Bank's engineering team shares how they replaced legacy middleware with Mekark pipelines —…",
    image: "/images/blogs/veltro-bank.png",
  },
  {
    badge: "Engineering",
    category: "Engineering",
    title: ["Inside Mekark's New Orchestration", "Engine: A Technical Deep Dive"],
    excerpt:
      "The orchestration engine rewrite replaced a monolithic scheduler with a distributed DAG runner.…",
    image: "/images/blogs/orchestration-engine.png",
  },
  {
    badge: "Tutorial",
    category: "Tutorials",
    title: ["Getting Started with Mekark Edge Nodes", "in Under 10 Minutes"],
    excerpt:
      "A step-by-step walkthrough to deploy your first edge node, configure health checks, and route traffic…",
    image: "/images/blogs/edge-nodes.png",
  },
  {
    badge: "Case Study",
    category: "Case Studies",
    title: ["How Veltro Bank Scaled to 2M", "Transactions/sec with Mekark"],
    excerpt:
      "Veltro Bank's engineering team shares how they replaced legacy middleware with Mekark pipelines —…",
    image: "/images/blogs/veltro-bank.png",
  },
  {
    badge: "Engineering",
    category: "Engineering",
    title: ["Inside Mekark's New Orchestration", "Engine: A Technical Deep Dive"],
    excerpt:
      "The orchestration engine rewrite replaced a monolithic scheduler with a distributed DAG runner.…",
    image: "/images/blogs/orchestration-engine.png",
  },
] as const;

function BlogCard({
  post,
  index,
}: {
  post: (typeof BLOG_POSTS)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={blogCardReveal(index)}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className="flex flex-col overflow-hidden rounded-[24px] border border-black/[0.08] bg-white shadow-[4px_4px_9px_0px_rgba(0,0,0,0.05)]"
    >
      <div className="relative h-[167px] w-full shrink-0 bg-[#f3f4f6]">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 343px"
        />
        <span className="absolute left-2.5 top-2.5 rounded-full border border-[#ed2024]/20 bg-white/90 px-2.5 py-1 text-[10px] font-bold leading-[14px] text-[#ed2024] backdrop-blur-[3px]">
          {post.badge}
        </span>
      </div>

      <div className="flex flex-col p-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.95px] text-[#ed2024]">
          {post.category}
        </span>
        <h3 className="mt-2 text-[15px] font-bold leading-5 text-[#1a1a1a]">
          {post.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#6a6a6a]">
          {post.excerpt}
        </p>
      </div>
    </motion.article>
  );
}

export function MekarkBlogsSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-[#ececec]">
      <motion.div
        variants={blogSectionStagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 lg:px-20 lg:py-[70px]"
      >
        <motion.div
          variants={blogHeaderReveal}
          className="flex flex-col items-center gap-2 text-center"
        >
          <motion.div
            variants={aboutBadgeReveal}
            className="inline-flex items-center gap-[7px] rounded-full border border-crimson-100 bg-crimson-200 px-[11.5px] py-[6px]"
          >
            <motion.div
              variants={aboutBadgeDot}
              className="size-[7px] rounded-full bg-red-200"
              aria-hidden
            />
            <span className="font-inter text-xs font-medium capitalize tracking-[0.53px] text-red-100">
              Mekark Blogs
            </span>
          </motion.div>

          <motion.h2
            variants={blogHeadlineReveal}
            className="max-w-[760px] text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-tight tracking-[-1.3px] lg:text-[40px] lg:leading-[52px]"
          >
            <span className="text-[#1a1a1a]">Stories, releases, </span>
            <span className="text-[#ed2024]">&amp; deep dives.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={blogHeadlineReveal}
          className="relative mt-8 lg:mt-[30px]"
        >
          <div
            className={`relative transition-[max-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              expanded ? "max-h-none" : `overflow-hidden ${COLLAPSED_HEIGHT_CLASS}`
            }`}
          >
            <motion.div
              variants={blogGridStagger}
              className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-[42px] lg:gap-y-[30px]"
            >
              {BLOG_POSTS.map((post, index) => (
                <BlogCard key={`${post.category}-${index}`} post={post} index={index} />
              ))}
            </motion.div>
          </div>

          <AnimatePresence>
            {!expanded && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[294px] bg-gradient-to-b from-transparent via-[#ececec]/80 via-[68%] to-[#ececec]"
                  aria-hidden
                />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-x-0 bottom-[70px] flex justify-center"
                >
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    className="min-h-11 rounded-[9px] bg-[#ed1c24] px-6 py-3 text-sm font-bold text-white shadow-[0px_9px_13px_-3px_rgba(237,28,36,0.2),0px_3px_5px_-3px_rgba(237,28,36,0.2)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Show More
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

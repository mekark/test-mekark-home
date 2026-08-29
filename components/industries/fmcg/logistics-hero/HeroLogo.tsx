"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroLogo() {
  return (
    <motion.div
      className="absolute left-0 top-0 z-20 w-full px-6 py-3 sm:px-12 lg:px-[100px] lg:py-4"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href="/" aria-label="Mekark home" className="inline-block">
        <Image
          src="/LogoMekark.png"
          alt="Mekark"
          width={140}
          height={38}
          priority
          className="h-auto w-[90px] sm:w-[110px] lg:w-[140px]"
        />
      </Link>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import { SocialLinks } from "./SocialLinks";

export function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section id="home" className="section-offset hero-shell relative flex min-h-screen items-center overflow-hidden px-5 py-28 lg:px-8">
      <div className="hero-sphere" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(196,79,255,0.20),transparent_34rem)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center">
        <div className="mx-auto max-w-6xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400 md:text-sm md:tracking-[0.35em]"
          >
            {profile.role}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-heading hero-name mx-auto font-semibold leading-[1.02] tracking-tight"
          >
            Hi, I&apos;m {profile.shortName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-zinc-200 md:text-2xl"
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a href="#projects" className="accent-button">
              View Projects <ArrowUpRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="glass-button">
              Contact Me
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex justify-center"
          >
            <SocialLinks social={profile.social} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

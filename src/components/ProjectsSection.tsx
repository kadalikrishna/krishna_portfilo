import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import type { Project } from "../types/portfolio";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { projects } = usePortfolio();
  const [selected, setSelected] = useState<Project | null>(null);
  const sortedProjects = [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight));
  const isHtmlPreview = selected?.image?.toLowerCase().endsWith(".html");

  return (
    <section className="section-offset overflow-hidden px-5 pb-14 pt-28 lg:px-8" id="projects">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Projects</p>
        <h2 className="hero-heading max-w-5xl text-5xl font-semibold leading-none md:text-7xl">
          Here&apos;s what I built.
        </h2>
        <div className="mt-14 flex items-stretch gap-5 overflow-x-auto pb-4">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/55 px-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.article
              className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/15 bg-[#101010]/88 p-5 shadow-2xl shadow-black/70 backdrop-blur-xl md:p-7"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#050505]">
                <div className="aspect-video max-h-[300px] md:max-h-[340px]">
                  {isHtmlPreview && selected.image ? (
                    <iframe
                      src={selected.image}
                      title={`${selected.title} preview`}
                      className="h-full w-full border-0"
                      loading="eager"
                    />
                  ) : selected.image ? (
                    <img src={selected.image} alt={`${selected.title} preview`} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-end bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.12),transparent_12rem),linear-gradient(135deg,#080808,#151515)] p-6">
                      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,.22)_1px,transparent_2px)] [background-size:28px_28px] opacity-20" />
                      <h3 className="relative max-w-lg text-4xl font-semibold leading-none text-zinc-100 md:text-5xl">
                        {selected.title}
                      </h3>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                    {selected.highlight ? "Featured / " : ""}
                    {selected.subtitle}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-zinc-100 md:text-5xl">{selected.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-zinc-300 transition hover:bg-white/[0.1] hover:text-white"
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-6 text-lg leading-8 text-zinc-300">{selected.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selected.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300">
                  {selected.role}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-sm text-zinc-300">
                  {selected.year}
                </span>
                {selected.link ? (
                  <a href={selected.link} target="_blank" rel="noreferrer" className="accent-button">
                    Live Project <ArrowUpRight className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

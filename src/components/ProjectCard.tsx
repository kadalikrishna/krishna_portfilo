import { motion } from "framer-motion";
import type { Project } from "../types/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const isHtmlPreview = project.image?.toLowerCase().endsWith(".html");

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: index * 0.025 }}
      className="group flex h-[520px] min-w-[310px] max-w-[310px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.025] text-left shadow-2xl shadow-black/45 transition duration-200 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] md:min-w-[370px] md:max-w-[370px]"
      style={{ zIndex: index + 1 }}
    >
      <div className="project-preview relative h-[220px] shrink-0 overflow-hidden bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,.12),transparent_8rem),#070707] md:h-[225px]">
        <span className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-black/45 px-3 py-1 font-mono text-xs text-white/70 backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
        {isHtmlPreview && project.image ? (
          <div className="project-html-preview h-full overflow-hidden shadow-2xl shadow-black/40">
            <iframe
              src={project.image}
              title={`${project.title} preview`}
              className="pointer-events-none h-full w-full border-0"
              loading="lazy"
            />
          </div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover shadow-2xl shadow-black/40 transition duration-300 group-hover:scale-[1.015]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-end bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.12),transparent_12rem),linear-gradient(135deg,#080808,#151515)] p-6 shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,.22)_1px,transparent_2px)] [background-size:28px_28px] opacity-20" />
            <h3 className="relative max-w-sm text-3xl font-semibold leading-none text-zinc-100">
              {project.title}
            </h3>
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0C0C0C]/55 via-[#0C0C0C]/8 to-transparent" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-6">
        <p className="h-8 line-clamp-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          {project.highlight ? "Featured / " : ""}
          {project.subtitle}
        </p>
        <h3 className="mt-3 min-h-[58px] line-clamp-2 text-[1.55rem] font-semibold leading-[1.08] text-zinc-100 md:text-[1.65rem]">{project.title}</h3>
        <p className="mt-3 min-h-[72px] line-clamp-3 text-sm leading-6 text-zinc-400">{project.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-zinc-400">
            {project.year}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-zinc-100 transition group-hover:border-white/25 group-hover:bg-white/[0.08]">
            View details
          </span>
        </div>
      </div>
    </motion.button>
  );
}


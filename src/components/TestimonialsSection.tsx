import { AnimatePresence, motion } from "framer-motion";
import { Award, BrainCircuit, HandHeart, Newspaper, Rocket, Trophy, Users, X } from "lucide-react";
import { useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import type { Achievement } from "../types/portfolio";

const iconForAchievement = (id: string) => {
  if (id.includes("quiz")) return Trophy;
  if (id.includes("coordinator")) return Users;
  if (id.includes("news")) return Newspaper;
  if (id.includes("hackathon")) return Rocket;
  if (id.includes("atl")) return BrainCircuit;
  return HandHeart;
};

export function TestimonialsSection() {
  const { achievements } = usePortfolio();
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <section className="section-offset overflow-hidden bg-[#070707] px-5 pb-36 pt-40 lg:px-8" id="achievements">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between gap-6">
          <div>
            <p className="section-kicker">Achievements</p>
            <h2 className="hero-heading text-5xl font-semibold leading-none md:text-7xl">Highlights Beyond Academics.</h2>
          </div>
          <div className="hidden gap-3 text-zinc-500 md:flex">
            <Award className="h-7 w-7" />
            <Trophy className="h-7 w-7" />
            <Rocket className="h-7 w-7" />
          </div>
        </div>

        <div className="achievement-strip flex gap-6 overflow-x-auto pb-4 md:gap-7">
          {achievements.map((achievement) => {
            const Icon = iconForAchievement(achievement.id);
            const previewImage = achievement.images[0];

            return (
              <button
                key={achievement.id}
                type="button"
                onClick={() => setSelected(achievement)}
                className="achievement-card group flex h-[520px] min-w-[310px] max-w-[310px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.025] text-left shadow-2xl shadow-black/45 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] md:min-w-[370px] md:max-w-[370px]"
              >
                <div className="relative h-[235px] shrink-0 overflow-hidden bg-[#050505]">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt={achievement.title}
                      className="h-full w-full object-cover shadow-2xl shadow-black/40 transition duration-500 group-hover:scale-[1.015]"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="grid h-full place-items-center rounded-2xl bg-white/[0.04]">
                      <Icon className="h-10 w-10 text-zinc-500" />
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0C0C0C]/45 via-transparent to-transparent" />
                </div>

                <div className="flex min-h-0 flex-1 flex-col px-6 pb-6 pt-5">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-zinc-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="line-clamp-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{achievement.role}</p>
                  <h3 className="mt-3 line-clamp-2 text-2xl font-semibold leading-tight text-zinc-100 md:text-[1.7rem]">{achievement.title}</h3>
                  <p className="mt-3 line-clamp-2 text-[15px] leading-6 text-zinc-300">{achievement.summary}</p>
                  <span className="mt-auto w-fit rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-zinc-100 transition group-hover:border-white/25 group-hover:bg-white/[0.08]">
                    View gallery
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/70 px-4 py-5 md:px-5 md:backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.article
              className="achievement-modal max-h-[88vh] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-3xl border border-white/15 bg-[#101010]/95 p-4 shadow-2xl shadow-black/70 md:bg-[#101010]/90 md:p-7 md:backdrop-blur-xl"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">{selected.role}</p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-zinc-100 md:text-5xl">{selected.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-zinc-300 transition hover:bg-white/[0.1] hover:text-white"
                  aria-label="Close achievement details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-6 max-w-4xl text-left text-base leading-7 text-zinc-300 md:text-lg md:leading-8">{selected.description}</p>

              <div className="mt-8 grid items-start gap-5 md:grid-cols-2">
                {selected.images.map((image) => (
                  <figure key={image} className={selected.images.length === 1 ? "md:col-span-2" : ""}>
                    <img
                      src={image}
                      alt={selected.title}
                      className="h-auto w-full rounded-2xl object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}








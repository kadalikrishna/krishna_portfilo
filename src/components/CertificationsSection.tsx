import { AnimatePresence, motion } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import type { Certification } from "../types/portfolio";

export function CertificationsSection() {
  const { certifications } = usePortfolio();
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <section className="section-offset px-5 py-28 lg:px-8" id="certifications">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Certifications</p>
        <h2 className="hero-heading max-w-5xl text-5xl font-semibold leading-none md:text-7xl">
          Verified learning and credentials.
        </h2>

        <div className="mt-14 flex items-stretch gap-5 overflow-x-auto pb-4">
          {certifications.length ? (
            certifications.map((certificate) => (
              <button
                key={certificate.id}
                type="button"
                onClick={() => setSelected(certificate)}
                className="group flex h-[456px] min-w-[260px] max-w-[260px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] text-left transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="relative h-[195px] shrink-0 overflow-hidden bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,.1),transparent_8rem),#070707] p-3">
                  {certificate.image ? (
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className="h-full w-full rounded-2xl bg-white object-contain shadow-2xl shadow-black/40 transition duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="grid h-full place-items-center rounded-2xl bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,.12),transparent_9rem),linear-gradient(135deg,#080808,#151515)]">
                      {certificate.badgeImage ? (
                        <img
                          src={certificate.badgeImage}
                          alt={`${certificate.title} badge`}
                          className="h-20 w-20 rounded-2xl border border-white/20 bg-white object-cover shadow-xl shadow-black/50"
                        />
                      ) : (
                        <Award className="h-10 w-10 text-zinc-500" />
                      )}
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/35 via-transparent to-transparent" />
                  {certificate.badgeImage && certificate.image ? (
                    <img
                      src={certificate.badgeImage}
                      alt=""
                      aria-hidden="true"
                      className="absolute bottom-3 right-3 h-16 w-16 rounded-2xl border border-white/25 bg-white object-cover shadow-xl shadow-black/50"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{certificate.issuer}</p>
                  <h3 className="mt-3 line-clamp-3 text-xl font-semibold leading-tight text-zinc-100">{certificate.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">{certificate.summary}</p>
                  {certificate.date ? <p className="mt-auto pt-4 font-mono text-xs text-zinc-500">{certificate.date}</p> : null}
                </div>
              </button>
            ))
          ) : (
            <div className="min-w-[260px] max-w-[260px] overflow-hidden rounded-[1.75rem] border border-dashed border-white/10 bg-white/[0.025]">
              <div className="grid aspect-[4/3] place-items-center bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,.12),transparent_9rem),linear-gradient(135deg,#080808,#151515)]">
                <Award className="h-10 w-10 text-zinc-500" />
              </div>
              <div className="min-h-[172px] p-5">
                <h3 className="text-xl font-semibold text-zinc-100">Certificate title</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Send certificate image, title, description, and verify link. I will add it here.
                </p>
              </div>
            </div>
          )}
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
              className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 bg-[#101010]/88 p-5 shadow-2xl shadow-black/70 backdrop-blur-xl md:p-7"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              {selected.modalImage ? (
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-white">
                  <img src={selected.modalImage} alt={`${selected.title} certificate`} className="max-h-[48vh] w-full object-contain" />
                </div>
              ) : null}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">{selected.issuer}</p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-zinc-100 md:text-4xl">{selected.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-zinc-300 transition hover:bg-white/[0.1] hover:text-white"
                  aria-label="Close certificate details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-6 text-lg leading-8 text-zinc-300">{selected.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {selected.date ? (
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-sm text-zinc-300">
                    {selected.date}
                  </span>
                ) : null}
                {selected.verifyUrl ? (
                  <a href={selected.verifyUrl} target="_blank" rel="noreferrer" className="accent-button">
                    Verify Certificate <ExternalLink className="h-5 w-5" />
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

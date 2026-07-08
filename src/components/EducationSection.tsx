import { GraduationCap } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import { HorizontalScrollRow } from "./HorizontalScrollRow";

export function EducationSection() {
  const { education } = usePortfolio();

  return (
    <section className="section-offset px-5 py-28 lg:px-8" id="education">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Education</p>
        <h2 className="hero-heading max-w-5xl text-5xl font-semibold leading-none md:text-7xl">
          Learning path and academic foundation.
        </h2>

        <HorizontalScrollRow className="mt-14 flex gap-5 overflow-x-auto pb-4 pr-14" ariaLabel="Scroll education to the right">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.period}`}
              className="relative min-w-[300px] max-w-[300px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:min-w-[410px] md:max-w-[410px] md:p-8"
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="min-w-0">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-zinc-200">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-zinc-100 md:text-3xl">
                    {item.program}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-zinc-400 md:text-lg">{item.institution}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200">
                      CGPA: {item.cgpa}
                    </span>
                    {item.coursework ? (
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200">
                        Coursework: {item.coursework}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="mt-auto w-fit pt-8">
                  <span className="inline-flex rounded-full border border-white/10 bg-[#0C0C0C]/70 px-4 py-2 font-mono text-sm text-zinc-300">
                  {item.period}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
}

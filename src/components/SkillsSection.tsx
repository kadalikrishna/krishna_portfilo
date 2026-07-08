import { usePortfolio } from "../hooks/usePortfolio";
import { HorizontalScrollRow } from "./HorizontalScrollRow";

export function SkillsSection() {
  const { skills } = usePortfolio();

  return (
    <section className="section-offset px-5 pb-28 pt-14 lg:px-8" id="skills">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">Skills</p>
        <h2 className="hero-heading max-w-4xl text-5xl font-semibold leading-none md:text-7xl">
          Creating reliable and useful applications.
        </h2>
        <HorizontalScrollRow className="mt-12 flex gap-4 overflow-x-auto pb-4 pr-14" ariaLabel="Scroll skills to the right">
          {skills.categories.map((category) => (
            <article
              key={category.name}
              className="min-w-[280px] max-w-[280px] shrink-0 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:min-w-[320px] md:max-w-[320px]"
            >
              <h3 className="text-2xl font-semibold text-zinc-100">{category.name}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
}

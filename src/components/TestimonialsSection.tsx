import { useRef, useState } from "react";
import { Award, BrainCircuit, HandHeart, Sparkles } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";

export function TestimonialsSection() {
  const { achievements } = usePortfolio();
  const [activeAchievementId, setActiveAchievementId] = useState<string | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const openAchievement = (achievementId: string, card: HTMLButtonElement) => {
    const willOpen = activeAchievementId !== achievementId;

    setActiveAchievementId(willOpen ? achievementId : null);

    if (!willOpen) {
      return;
    }

    window.setTimeout(() => {
      rowRef.current?.scrollTo({
        left: Math.max(card.offsetLeft - 16, 0),
        behavior: "smooth",
      });
    }, 250);
  };

  return (
    <section className="section-offset overflow-hidden bg-[#070707] px-5 py-28 lg:px-8" id="achievements">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <p className="section-kicker">Achievements</p>
            <h2 className="hero-heading text-5xl font-semibold leading-none md:text-7xl">Highlights Beyond Academics.</h2>
          </div>
          <div className="hidden gap-3 text-zinc-500 md:flex">
            <Sparkles className="h-7 w-7" />
            <HandHeart className="h-7 w-7" />
            <Award className="h-7 w-7" />
          </div>
        </div>

        {achievements.length ? (
          <div ref={rowRef} className="overflow-x-auto pb-4">
            <div className="flex min-w-max items-start">
              {achievements.map((achievement, index) => {
                const isActive = achievement.id === activeAchievementId;
                const Icon = achievement.id.includes("atl") ? BrainCircuit : HandHeart;
                const joinedCardShape =
                  achievements.length === 1
                    ? "rounded-[1.75rem]"
                    : index === 0
                      ? "rounded-l-[1.75rem] rounded-r-none"
                      : index === achievements.length - 1
                        ? "rounded-l-none rounded-r-[1.75rem]"
                        : "rounded-none";
                const cardShape = isActive ? "rounded-[1.75rem]" : joinedCardShape;

                return (
                  <div key={achievement.id} className="relative flex items-stretch">
                    <button
                      type="button"
                      aria-expanded={isActive}
                      onClick={(event) => openAchievement(achievement.id, event.currentTarget)}
                      className={`relative z-10 min-h-[430px] w-[330px] border p-6 text-left transition duration-500 md:w-[430px] md:p-8 ${cardShape} ${
                        isActive
                          ? "border-white/15 bg-[#111111] shadow-2xl shadow-black/40"
                          : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.055]"
                      }`}
                    >
                      <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-zinc-100">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">{achievement.role}</span>
                      <span className="mt-4 block text-4xl font-semibold leading-tight text-zinc-100 md:text-5xl">{achievement.title}</span>
                      <span className="mt-5 block text-xl leading-8 text-zinc-200">{achievement.summary}</span>
                      <span className="mt-5 block text-base leading-8 text-zinc-400">{achievement.description}</span>
                    </button>

                    <div className={`relative z-0 flex gap-5 transition-all duration-700 ease-out ${isActive ? "w-[1780px] translate-x-0 opacity-100" : "w-0 -translate-x-[92%] overflow-hidden opacity-0"}`}>
                      {achievement.images.map((image, index) => (
                        <figure
                          key={image}
                          className="group h-[430px] min-w-[330px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] md:min-w-[340px]"
                          style={{ transitionDelay: isActive ? `${index * 70}ms` : "0ms" }}
                        >
                          <div className="relative h-full overflow-hidden bg-[#050505]">
                            <img
                              src={image}
                              alt=""
                              aria-hidden="true"
                              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-xl"
                            />
                            <img
                              src={image}
                              alt={achievement.title}
                              className="relative z-10 h-full w-full object-contain"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/50 via-transparent to-transparent" />
                          </div>
                        </figure>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

import { usePortfolio } from "../hooks/usePortfolio";

export function AboutSection() {
  const { profile } = usePortfolio();

  return (
    <section id="about" className="section-offset px-5 py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="hero-heading text-[2.65rem] font-semibold leading-none md:text-7xl">
            {profile.aboutHeading}
          </h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
          <p className="text-lg leading-8 text-zinc-300 [overflow-wrap:normal] [word-break:normal] md:text-xl md:leading-9">
            {profile.bio}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="metric-card">
              <span>{profile.yearsOfExperience}</span>
              <p>Completed</p>
            </div>
            <div className="metric-card">
              <span>{profile.location}</span>
              <p>Location</p>
            </div>
            <div className="metric-card">
              <span>{profile.specialization}</span>
              <p>Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



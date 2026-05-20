import { Copy } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import { SocialLinks } from "./SocialLinks";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const { profile } = usePortfolio();

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.social.email ?? "");
  };

  return (
    <footer id="contact" className="section-offset relative overflow-hidden px-5 py-16 lg:px-8">
      <img
        src="/images/contact-background.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
      />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0C0C0C] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C0C0C] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/72 to-[#0C0C0C]/88" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]/85" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="hero-heading text-4xl font-semibold">{profile.name}</h2>
          <p className="mt-4 text-zinc-400">{profile.specialization}</p>
          <p className="mt-2 text-zinc-500">{profile.location}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Navigate</h3>
          <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-zinc-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Reach out</h3>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {profile.social.email ? (
              <button type="button" onClick={copyEmail} className="glass-button">
                <Copy className="h-4 w-4" /> Copy Email
              </button>
            ) : null}
            {profile.social.phone ? <a href={`tel:${profile.social.phone}`} className="glass-button">{profile.social.phone}</a> : null}
          </div>
          <div className="mt-5">
            <SocialLinks social={profile.social} compact />
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 pt-6 text-sm text-zinc-500 md:flex-row">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, TypeScript, Vite, Tailwind, and motion.</p>
      </div>
    </footer>
  );
}





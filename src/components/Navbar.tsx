import { Linkedin } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const { profile } = usePortfolio();
  const linkedinHref = profile.social.linkedin || "#home";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/88 to-transparent backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 overflow-hidden px-4 py-4 sm:px-5 lg:px-8">
        <a
          href={linkedinHref}
          target={profile.social.linkedin ? "_blank" : undefined}
          rel={profile.social.linkedin ? "noreferrer" : undefined}
          aria-label="Open LinkedIn profile"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-zinc-100 shadow-[0_0_32px_rgba(187,204,215,0.12)] backdrop-blur transition hover:border-white/35 hover:bg-white/[0.1] sm:px-4"
        >
          <Linkedin className="h-4 w-4" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <div className="site-nav-scroll flex max-w-[calc(100vw-86px)] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.04] p-1 sm:max-w-[min(78vw,820px)]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold text-zinc-400 transition hover:bg-white/10 hover:text-white sm:px-4"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}





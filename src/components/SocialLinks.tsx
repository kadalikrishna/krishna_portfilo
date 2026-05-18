import { Github, Globe, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import type { SocialLinks as SocialLinksType } from "../types/portfolio";

type SocialLinksProps = {
  social: SocialLinksType;
  compact?: boolean;
};

const socialConfig = [
  { key: "github", label: "GitHub", icon: Github, prefix: "" },
  { key: "instagram", label: "Instagram", icon: Instagram, prefix: "" },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, prefix: "" },
  { key: "email", label: "Email", icon: Mail, prefix: "mailto:" },
  { key: "phone", label: "Phone", icon: Phone, prefix: "tel:" },
  { key: "website", label: "Website", icon: Globe, prefix: "" },
] as const;

export function SocialLinks({ social, compact = false }: SocialLinksProps) {
  const links = socialConfig.flatMap((item) => {
    const value = social[item.key];
    return value ? [{ ...item, value }] : [];
  });

  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ key, label, icon: Icon, prefix, value }) => (
        <a
          key={key}
          href={`${prefix}${value}`}
          target={key === "email" || key === "phone" ? undefined : "_blank"}
          rel={key === "email" || key === "phone" ? undefined : "noreferrer"}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.08]"
        >
          <Icon className={compact ? "h-4 w-4" : "h-5 w-5"} />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}

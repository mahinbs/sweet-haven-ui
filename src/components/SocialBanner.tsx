import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export const SocialBanner = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <div className="w-full bg-[#FF0000] py-0.5 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-1.5 px-6">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-6 w-6 items-center justify-center rounded bg-white text-[#FF0000] transition-transform duration-200 hover:scale-110 hover:bg-white/90"
            aria-label={social.label}
          >
            <social.icon className="h-3 w-3" />
          </a>
        ))}
      </div>
    </div>
  );
};


export type Lab = {
  title: string;
  area: "Red" | "Blue" | "Other";
  tags: string[];
  blurb: string;
  link?: string;
  featured?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
};

export type Education = {
  school: string;
  degree: string;
  period?: string;
};

export type Social = {
  platform: string;
  url: string;
  username?: string;
};

export interface SiteConfig {
  name: string;
  role: string;
  email: string;
  headline: string;
  summary: string;
  avatar?: string;
  socials: {
    github?: string;
    linkedin?: string;
    tryhackme?: string;
    twitter?: string;
  };
  skills: {
    red: string[];
    blue: string[];
    core: string[];
  };
  labs: Lab[];
  experience: Experience[];
  education: Education[];
  certifications: {
    name: string;
    issuer: string;
    date?: string;
    link?: string;
  }[];
  nav: {
    label: string;
    href: string;
  }[];
  seo: {
    title: string;
    description: string;
    url: string;
    keywords: string[];
  };
  features: {
    blog: boolean;
    cv: boolean;
    contact: boolean;
  };
}

const config: SiteConfig = {
  name: "Trinh Lam Quoc Vinh",
  role: "Cybersecurity Student — Red/Blue Team Explorer",
  email: "trinhlamquocvinh.forwork@gmail.com",
  headline: "Breaking to defend. Shipping secure.",
  summary:
    "Gen‑Z defender‑attacker hybrid, focused on practical labs. I break things to understand them and then build guardrails so teams ship safely. Currently exploring offensive security techniques and defensive countermeasures through hands-on lab work.",
  avatar: "/avatar.jpg",
  socials: {
    github: "https://github.com/QuocVinhTrinhLam",
    linkedin: "https://www.linkedin.com/in/qu%E1%BB%91c-vinh-tr%E1%BB%8Bnh-l%C3%A2m-877015345/",
    tryhackme: "https://tryhackme.com/p/sjke",
  },
  skills: {
    red: [
      "Advanced Client‑Side Attacks",
      "El Bandito",
      "Include",
      "XSS/SSTI/XXE",
      "HTTP Request Smuggling",
      "Web Application Penetration Testing",
      "OWASP Top 10",
    ],
    blue: [
      "TShark",
      "Friday Overtime", 
      "Summit",
      "Snort (Live Attack)",
      "Zeek",
      "Network Monitoring",
      "Incident Response",
      "SIEM Analysis",
    ],
    core: [
      "Linux Administration",
      "Network Security",
      "Wireshark",
      "Nmap",
      "Python Scripting",
      "Bash Scripting",
      "Git Version Control",
      "Docker",
      "Vulnerability Assessment",
    ],
  },
  labs: [
    {
      title: "Advanced Client‑Side Attack",
      area: "Red",
      tags: ["web", "client", "xss"],
      blurb: "Deep dive into client-side attack vectors including CSP bypass, DOM clobbering, and advanced XSS techniques. Explored real-world scenarios and bypass methods.",
      featured: true,
    },
    {
      title: "El Bandito",
      area: "Red", 
      tags: ["web", "auth"],
      blurb: "Comprehensive web application security challenge focusing on authentication bypass, authorization flaws, and configuration mismanagement exploitation.",
      featured: true,
    },
    {
      title: "Include",
      area: "Red",
      tags: ["LFI", "RFI", "web"],
      blurb: "Local and remote file inclusion vulnerability research. Mapped attack surfaces, crafted payloads, and demonstrated impact through practical exploitation.",
    },
    {
      title: "TShark Deep‑Dive",
      area: "Blue",
      tags: ["pcap", "network", "analysis"],
      blurb: "Command-line packet analysis workflows for security triage and threat hunting. Developed efficient filtering and analysis methodologies.",
      featured: true,
    },
    {
      title: "Snort — Live Attack",
      area: "Blue",
      tags: ["IDS", "rules", "detection"],
      blurb: "Hands-on detection engineering with Snort IDS. Created custom rules, tuned detection logic, and analyzed live attack patterns in controlled environment.",
    },
    {
      title: "Zeek Pipelines",
      area: "Blue",
      tags: ["network", "dfir", "monitoring"],
      blurb: "Protocol-level network telemetry collection and analysis. Built automated log processing pipelines for security monitoring and incident response.",
    },
    {
      title: "Friday Overtime",
      area: "Blue",
      tags: ["dfir", "investigation"],
      blurb: "Digital forensics and incident response scenario. Analyzed compromised systems, traced attack vectors, and documented findings for remediation.",
    },
    {
      title: "Summit",
      area: "Blue", 
      tags: ["cloud", "security"],
      blurb: "Cloud security assessment and monitoring lab. Explored AWS security services, configured logging, and implemented detection mechanisms.",
    },
  ],
  experience: [
    {
      company: "Self-Directed Learning",
      role: "Cybersecurity Lab Researcher",
      period: "2023 - Present",
      description: "Conducting independent research through practical lab exercises, focusing on both offensive and defensive security techniques. Documenting findings and building expertise in real-world attack and defense scenarios.",
      tech: ["Python", "Linux", "Wireshark", "Burp Suite", "Metasploit", "Splunk"],
    },
  ],
  education: [
    {
      school: "University of Transport Ho Chi Minh City",
      degree: "B.Sc. Information Technology — Cybersecurity Focus",
      period: "2023 - Present",
    },
  ],
  certifications: [
    {
      name: "TryHackMe Path Completion",
      issuer: "TryHackMe",
      link: "https://tryhackme.com/p/sjke",
    },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Labs", href: "/labs" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  seo: {
    title: "Trinh Lam Quoc Vinh — Cybersecurity Portfolio",
    description: "Cybersecurity student exploring Red & Blue Team techniques. Hands-on labs in web security, network analysis, detection engineering, and incident response.",
    url: "https://your-domain.vercel.app",
    keywords: [
      "cybersecurity",
      "red team",
      "blue team", 
      "penetration testing",
      "network security",
      "web security",
      "incident response",
      "vietnam cybersecurity",
    ],
  },
  features: {
    blog: true,
    cv: true,
    contact: true,
  },
};

export default config;

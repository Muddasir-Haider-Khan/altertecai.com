// lib/team.ts
export type Social = { label: "linkedin" | "github" | "website"; url: string };
export type TeamMember = {
  name: string;
  role: string;
  tagline?: string;
  image: string;          // public path e.g. /team/Zia khan.webp
  imageAlt?: string;
  socials: Social[];
};

export const TEAM: TeamMember[] = [
  {
    name: "Zia Khan",
    role: "CEO Panaversity",
    tagline: "Nation-Transforming Social Entrepreneur",
    image: "/team/Zia khan.webp",
    imageAlt: "Zia Khan portrait",
    socials: [
      { label: "linkedin", url: "https://www.linkedin.com/in/ziaukhan/" },
      { label: "github",   url: "https://github.com/ziaukhan" }
    ]
  },
  {
    name: "Zeeshan Hanif",
    role: "Board of Directors, Panaversity",
    tagline: "Web 3.0 and AI Integration Consultant",
    image: "/team/Zeeshan_Hanif.webp",
    socials: [
      { label: "linkedin", url: "https://www.linkedin.com/in/zeeshanhanif/" },
      { label: "github",   url: "https://github.com/zeeshanhanif" }
    ]
  },
  {
    name: "Daniyal Nagori",
    role: "Board of Directors, Panaversity",
    tagline: "Cloud and AI Integration Consultant",
    image: "/team/Daniyal.webp",
    socials: [
      { label: "linkedin", url: "https://www.linkedin.com/in/daniyalnagori/" },
      { label: "github",   url: "https://github.com/daniyalnagori" }
    ]
  },
  // ...add the remaining members here using the same pattern
];

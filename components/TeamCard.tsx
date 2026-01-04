// components/TeamCard.tsx
import Image from "next/image";
import { TeamMember } from "@/lib/team";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";

const socialIcon = (label: string) => {
  switch (label) {
    case "linkedin": return LinkedInIcon;
    case "github":   return GitHubIcon;
    default:         return (props: any) => <span {...props}>🌐</span>;
  }
};

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="w-[280px]">
      <div className="relative flex items-center justify-center">
        {/* decorative bg */}
        <Image
          src="/team/picbg.svg"
          alt=""
          width={500}
          height={500}
          className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 object-cover"
          priority
        />
        {/* main photo */}
        <Image
          src={member.image}
          alt={member.imageAlt ?? member.name}
          width={500}
          height={500}
          className="relative z-10 w-4/5 h-auto rounded-lg"
          priority
        />
      </div>

      <div className="flex min-h-[180px] flex-col justify-between overflow-hidden rounded-xl bg-background p-4 text-center shadow-xl">
        <div>
          <h2 className="text-lg font-medium leading-6">{member.name}</h2>
          <h3 className="text-sm font-medium leading-4 opacity-75">{member.role}</h3>
        </div>
        {member.tagline && (
          <p className="text-sm leading-4">{member.tagline}</p>
        )}
        <div className="flex items-center justify-center space-x-3">
          {member.socials.map((s) => {
            const Icon = socialIcon(s.label);
            return (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} profile of ${member.name}`}
                className="text-gray-500 hover:text-gray-900"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// app/team/page.tsx
import TeamCard from "@/components/TeamCard";
import { TEAM } from "@/lib/team";

export default function TeamPage() {
  return (
    <section className="container mx-auto mt-8 px-2 xs:px-4 sm:px-6 md:px-7 lg:px-4 xl:px-32">
      <div className="flex flex-wrap justify-center gap-y-5">
        {TEAM.map((m) => (
          <div key={m.name} className="mb-8 flex w-full justify-center px-4 sm:w-1/2 lg:w-1/3">
            <TeamCard member={m} />
          </div>
        ))}
      </div>
    </section>
  );
}

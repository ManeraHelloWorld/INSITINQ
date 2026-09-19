import Image from "next/image";
import { teamIconSrc } from "@/lib/content";
import type { TeamMember } from "@/types";

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  const iconSrc = teamIconSrc[member.icon];

  return (
    <article className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-surface">
        {member.photoSrc ? (
          <Image
            src={member.photoSrc}
            alt={`${member.firstName} ${member.lastName}`}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted">
            TODO: photo
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-sans text-base font-semibold leading-snug text-white sm:text-lg">
          {member.firstName} {member.lastName}
        </h3>
        <Image
          src={iconSrc}
          alt=""
          width={22}
          height={22}
          className="mt-1 h-5 w-5 shrink-0 object-contain"
          aria-hidden
        />
      </div>

      <p className="text-sm leading-relaxed text-muted">{member.bio}</p>
    </article>
  );
}

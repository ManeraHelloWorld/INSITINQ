import Image from "next/image";
import {
  BriefcaseBusiness,
  FolderKanban,
  Monitor,
  Route,
  Scale,
  Wallet,
} from "lucide-react";
import type { TeamMember } from "@/types";

const icons = {
  strategy: Route,
  tech: Monitor,
  ops: BriefcaseBusiness,
  finance: Wallet,
  mgmt: Scale,
  commerce: FolderKanban,
} as const;

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  const Icon = icons[member.icon];

  return (
    <article className="flex flex-col gap-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-surface">
        {member.photoSrc ? (
          <Image
            src={member.photoSrc}
            alt={`${member.lastName} ${member.firstName}`}
            fill
            className="object-cover grayscale"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted">
            TODO: photo
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold leading-tight text-white">
          {member.lastName}
          <br />
          {member.firstName}
        </h3>
        <Icon className="mt-1 h-5 w-5 shrink-0 text-white" aria-hidden />
      </div>

      <p className="text-sm leading-relaxed text-muted">{member.bio}</p>
    </article>
  );
}

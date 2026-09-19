import type { Metadata } from "next";
import { TeamGrid } from "@/components/sections/TeamGrid";

export const metadata: Metadata = {
  title: "Команда",
};

export default function TeamPage() {
  return <TeamGrid />;
}

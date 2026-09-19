import type { Metadata } from "next";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";

export const metadata: Metadata = {
  title: "Отрасли",
};

export default function IndustriesPage() {
  return <IndustriesGrid />;
}

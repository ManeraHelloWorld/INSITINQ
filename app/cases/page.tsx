import type { Metadata } from "next";
import { CasesContent } from "@/components/sections/CasesContent";

export const metadata: Metadata = {
  title: "Кейсы",
};

export default function CasesPage() {
  return <CasesContent />;
}

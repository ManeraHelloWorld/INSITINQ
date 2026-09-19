import type { Metadata } from "next";
import { DemoGrid } from "@/components/sections/DemoGrid";

export const metadata: Metadata = {
  title: "Демо",
};

export default function DemoPage() {
  return <DemoGrid />;
}

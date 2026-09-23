import type { Metadata } from "next";
import { ContactsContent } from "@/components/sections/ContactsContent";

export const metadata: Metadata = {
  title: "Контакты",
};

export default function ContactsPage() {
  return <ContactsContent />;
}

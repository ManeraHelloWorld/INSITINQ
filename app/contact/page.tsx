import { redirect } from "next/navigation";

/** Legacy path — canonical route is /contacts */
export default function ContactRedirectPage() {
  redirect("/contacts");
}

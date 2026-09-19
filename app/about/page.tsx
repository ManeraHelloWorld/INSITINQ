import { redirect } from "next/navigation";

/** Отдельной страницы нет — только якорь «О нас» на главной */
export default function AboutRedirectPage() {
  redirect("/#about");
}

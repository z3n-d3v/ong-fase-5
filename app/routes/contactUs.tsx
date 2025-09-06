import type { Route } from "./+types/home";
import { ContactUsPage } from "../contactUs/contactUs";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Integra Website" },
    { name: "description", content: "Página de Fale Conosco." },
  ];
}

export default function ContactUs() {
  return <ContactUsPage />;
}

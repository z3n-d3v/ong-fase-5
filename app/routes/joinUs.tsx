import type { Route } from "./+types/home";
import { JoinUs } from "~/joinUs/JoinUs";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Integra Website" },
    { name: "description", content: "Crie seu cadastro." },
  ];
}

export default function ContactUs() {
  return <JoinUs />;
}

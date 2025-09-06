import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Integra Website" },
    { name: "description", content: "Página principal do website da ONG." },
  ];
}

export default function Home() {
  return <Welcome />;
}

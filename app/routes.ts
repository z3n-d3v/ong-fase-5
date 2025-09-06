import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/contact-us", "./routes/contactUs.tsx"),
  route("/join-us", "./routes/joinUs.tsx"),
] satisfies RouteConfig;

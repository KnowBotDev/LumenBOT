import { createFileRoute } from "@tanstack/solid-router";
import { LandingPage } from "../components/landing/LandingPage";
import { lumenBotHomeHead } from "../lib/site-metadata";
import { LUMENBOT_SOFTWARE_APPLICATION } from "../lib/software-application";

export const Route = createFileRoute("/")({
  head: () => lumenBotHomeHead(LUMENBOT_SOFTWARE_APPLICATION),
  component: LandingPage,
});

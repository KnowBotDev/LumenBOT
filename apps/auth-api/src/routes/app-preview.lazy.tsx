import { DEFAULT_APP_LANGUAGE } from "@lumenbot/contracts/app-language";
import { loadLocale, resolveLocale } from "@lumenbot/i18n";
import { createLazyFileRoute } from "@tanstack/solid-router";
import { createSignal, lazy, onSettled, Show } from "solid-js";
import "../../../../src/renderer/src/preview/preview.css";

// The demo follows the visitor's language. Its catalogs load with the code, so the demo does not
// start in English; if they fail, the demo shows English.
const LumenBOTPlayground = lazy(() =>
  Promise.all([
    import("@lumenbot/renderer-preview"),
    loadLocale(resolveLocale(DEFAULT_APP_LANGUAGE, navigator.language)).catch(() => undefined),
  ]).then(([module]) => ({ default: module.LumenBOTPlayground })),
);

export const Route = createLazyFileRoute("/app-preview")({ component: AppPreviewPage });

export function AppPreviewPage() {
  const [mounted, setMounted] = createSignal(false);
  onSettled(() => {
    setMounted(true);
  });

  return (
    <div id="root" class="lumenbot-playground-root" data-preview-variant="landing">
      <Show
        when={mounted()}
        fallback={<div class="lumenbot-playground-loading" role="status" aria-label="Loading LumenBOT preview" />}
      >
        <LumenBOTPlayground variant="landing" />
      </Show>
    </div>
  );
}

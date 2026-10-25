import type { LumenBOTDesktopApi } from "@lumenbot/contracts/ipc";

/**
 * What onboarding reaches in main: the saved setup, and the preview of an invite before the user
 * joins.
 */
export interface OnboardingPort {
  getSetupState: LumenBOTDesktopApi["getSetupState"];
  saveSetup: LumenBOTDesktopApi["saveSetup"];
  servers: Pick<LumenBOTDesktopApi["servers"], "previewInvite">;
}

/** Read on each call: tests and stories replace `window.lumenbot` per case. */
export function onboardingPort(): OnboardingPort {
  return window.lumenbot;
}

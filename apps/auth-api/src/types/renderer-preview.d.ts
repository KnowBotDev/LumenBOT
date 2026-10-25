declare module "@lumenbot/renderer-preview" {
  import type { JSX } from "@solidjs/web";

  export interface LumenBOTPlaygroundProps {
    variant?: "default" | "landing";
    theme?: "dark" | "light";
  }

  export function LumenBOTPlayground(props: LumenBOTPlaygroundProps): JSX.Element;
}

// window.lumenbot belongs in the application adapter.
export const documentation = "window.lumenbot";
export const viewport = () => window.innerWidth;
export const platformAction = (props: { lumenbot: () => void }) => props.lumenbot();

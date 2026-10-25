import { createFileRoute } from "@tanstack/solid-router";
import { ContactPage } from "../components/contact/ContactPage";
import { CONTACT_ROUTE } from "../lib/contact";
import { LUMENBOT_SOCIAL_IMAGE_ALT, LUMENBOT_SOCIAL_IMAGE_URL, LUMENBOT_X_HANDLE } from "../lib/site-metadata";

const CONTACT_TITLE = "Contact the LumenBOT team";
const CONTACT_DESCRIPTION =
  "Send the LumenBOT team a message about a custom setup, a partnership or the press. A person reads each message.";

export const Route = createFileRoute("/contact")({
  head: ({ match }) => {
    const url = new URL(CONTACT_ROUTE, match.context.siteUrl).toString();
    return {
      meta: [
        { title: CONTACT_TITLE },
        { name: "description", content: CONTACT_DESCRIPTION },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "LumenBOT" },
        { property: "og:locale", content: "en_US" },
        { property: "og:url", content: url },
        { property: "og:title", content: CONTACT_TITLE },
        { property: "og:description", content: CONTACT_DESCRIPTION },
        { property: "og:image", content: LUMENBOT_SOCIAL_IMAGE_URL },
        { property: "og:image:alt", content: LUMENBOT_SOCIAL_IMAGE_ALT },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: LUMENBOT_X_HANDLE },
        { name: "twitter:title", content: CONTACT_TITLE },
        { name: "twitter:description", content: CONTACT_DESCRIPTION },
        { name: "twitter:image", content: LUMENBOT_SOCIAL_IMAGE_URL },
        { name: "twitter:image:alt", content: LUMENBOT_SOCIAL_IMAGE_ALT },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ContactPage,
});

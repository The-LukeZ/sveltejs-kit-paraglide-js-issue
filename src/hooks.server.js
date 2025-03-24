import { paraglideMiddleware } from "$lib/paraglide/server";

// creating a handle to use the paraglide middleware
/** @type {import("@sveltejs/kit").Handle} */
const paraglideHandle = async ({ event, resolve }) =>
  paraglideMiddleware(
    event.request,
    ({ request: localizedRequest, locale }) => {
      event.request = localizedRequest;
      console.log("loading route with locale", locale);
      return resolve(event, {
        transformPageChunk: ({ html }) => {
          return html.replace("%lang%", locale);
        },
      });
    }
  );

export const handle = paraglideHandle;

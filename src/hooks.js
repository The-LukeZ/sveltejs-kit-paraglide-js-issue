import { deLocalizeUrl } from "$lib/paraglide/runtime";

/** @type {import("@sveltejs/kit").Reroute} */
export const reroute = async (request) => {
  return deLocalizeUrl(request.url).pathname;
};

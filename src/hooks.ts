import { deLocalizeUrl } from "$lib/paraglide/runtime";
import type { Reroute } from "@sveltejs/kit";

export const reroute: Reroute = async (request) => {
  return deLocalizeUrl(request.url).pathname;
};

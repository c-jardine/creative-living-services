import { NextRouter } from "next/router";

export function getNavLinkColor(router: NextRouter, url: string) {
  return router.asPath === url ? "blue.600" : "gray.600";
}

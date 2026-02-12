import createMiddleware from "next-intl/middleware";

import { defaultLocale, localePrefix, locales } from "./i18n/config";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(en|ro|ru|ua)/:path*"],
};

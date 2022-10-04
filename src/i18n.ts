import { createI18n } from "vue-i18n";

import en from "@/locales/en";
import pl from "@/locales/pl";

export default createI18n({
  locale: "en-GB",
  fallbackLocale: "en-GB",
  legacy: true,
  allowComposition: true,
  messages: {
    'en-GB': en,
    pl: pl,
  },
  datetimeFormats: {
    'en-GB': {
      long: {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
      },
      weekdayShort: {
        weekday: "short",
      },
    },
    pl: {
      long: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        weekday: "long",
      },
      weekdayShort: {
        weekday: "short",
      },
    },
  },
});

import { createI18n } from "vue-i18n";

import en from "@/locales/en";
import pl from "@/locales/pl";

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  legacy: true,
  allowComposition: true,
  messages: {
    en,
    pl,
  },
  datetimeFormats: {
    en: {
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

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
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
      },
    },
    pl: {
      currency: {
        style: "currency",
        currency: "PLN",
      },
    },
  },
});

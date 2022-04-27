import i18next from "i18next";
import I18NextChainedBackend from "i18next-chained-backend";
import enTranslation from "../locales/english/translations.json";
import frTranslation from "../locales/francais/translations.json";

const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

i18next.use(I18NextChainedBackend).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
});

export default (lng: string) => i18next.getFixedT(lng || systemLocale);

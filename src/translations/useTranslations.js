import { useLanguage } from "./LanguageContext";
import translationsHome from "./translationsHome.json";
import translationsWhat from "./translationsWhat.json";
import translationsContact from "./translationsContact.json";
import translationsComponents from "./translationsComponents.json";
import translationsAbout from "./translationsAbout.json";

const translations = {
  home: translationsHome,
  what: translationsWhat,
  contact: translationsContact,
  components: translationsComponents,
  about: translationsAbout,
};

export const useTranslations = (key) => {
  const { isPolish } = useLanguage();
  const language = isPolish ? "pl" : "en";

  if (!translations[key]) {
    console.warn(`Brak tłumaczeń dla klucza: ${key}`);
    return {};
  }

  return translations[key][language];
};

import { DEFAULT_LANGUAGE, LANG_KEY } from "@/configs/config";
import { LANGUAGES } from "@/constants/constants";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export function useLanguage() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || DEFAULT_LANGUAGE);

  useEffect(() => {
    const storedLang =
      typeof window !== "undefined" ? localStorage.getItem(LANG_KEY) : null;
    if (storedLang && storedLang !== lang) {
      setLang(storedLang);
      i18n.changeLanguage(storedLang);
    }
  }, []);

  const changeLanguage = (newLang: string) => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem(LANG_KEY, newLang);
    }
  };

  return { lang, changeLanguage, LANGUAGES };
}

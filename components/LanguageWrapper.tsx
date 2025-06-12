// components/LanguageWrapper.tsx
'use client';

import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageWrapper() {
  const { lang } = useLanguage();

  useEffect(() => {
    // Cập nhật <html lang="..."> sau khi lấy từ localStorage
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return null;
}

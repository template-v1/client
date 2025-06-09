import { Language } from "@/enums/enums";
import { useTranslation } from "react-i18next";

// language options for the dropdown
export const LANGUAGES = [
  { code: Language.EN, label: 'English' },
  { code: Language.VI, label: 'Tiếng Việt' },
];


// navigation links for the header
export const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/services', label: 'SERVICES' },
  { href: '/blog', label: 'BLOG' },
  { href: '/contact', label: 'CONTACT' },
];

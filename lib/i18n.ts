// lib/i18n.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_en from '@/public/locales/en/common.json';
import common_vi from '@/public/locales/vi/common.json';

// Khởi tạo i18next với react-i18next plugin
i18next.use(initReactI18next).init({
  lng: 'en', // Ngôn ngữ mặc định khi load trang
  fallbackLng: 'en', // Ngôn ngữ fallback nếu key dịch không tìm thấy
  resources: {
    en: { common: common_en },
    vi: { common: common_vi },
  },
  ns: ['common'],     // namespaces được dùng
  defaultNS: 'common', // namespace mặc định
  interpolation: {
    escapeValue: false, // react đã escape sẵn, không cần escape lại
  },
  react: {
    useSuspense: false, // tránh lỗi suspense khi server-side render
  },
});

export default i18next;

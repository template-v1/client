// app/providers.tsx
'use client';

import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from '@/lib/i18n';

export function I18nProvider({ children }: { children: ReactNode }) {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

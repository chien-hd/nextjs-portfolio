'use client';

import { ReactNode } from 'react';
import { CookiesProvider } from 'react-cookie';

const AppCookieProvider = ({ children }: { children: ReactNode }) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

export default AppCookieProvider;

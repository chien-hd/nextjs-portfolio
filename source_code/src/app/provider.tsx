import AppCookieProvider from '@/providers/cookie-provider';
import AppQueryProvider from '@/providers/query-provider';
import React, { ReactNode } from 'react';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppQueryProvider>
      <AppCookieProvider>{children}</AppCookieProvider>
    </AppQueryProvider>
  );
};

export default AppProvider;

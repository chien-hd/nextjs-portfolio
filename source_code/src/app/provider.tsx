import AppQueryProvider from '@/providers/query-provider';
import React, { ReactNode } from 'react';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return <AppQueryProvider>{children}</AppQueryProvider>;
};

export default AppProvider;

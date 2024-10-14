import { queryClient } from '@/config/query-client.config';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

const AppQueryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppQueryProvider;

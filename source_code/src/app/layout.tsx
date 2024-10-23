import type { Metadata } from 'next';
import './globals.css';
import AppProvider from './provider';
import CSidebar from '@/components/layout/sidebar';

export const metadata: Metadata = {
  title: 'Next.js Portfolio',
  description: 'Hồ Duy Chiến',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AppProvider>
          <CSidebar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import AppProvider from './provider';

export const metadata: Metadata = {
  title: 'Next.js Portfolio',
  description: 'Hồ Duy Chiến',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Metahubs — Month-end, handled | AI employees for finance & accounting',
  description: 'Metahubs works inside your accounting stack, prepares the close from start to finish, and hands every entry to your team for sign-off. Plans from $900/month.',
  icons: {
    icon: '/assets/Logo.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

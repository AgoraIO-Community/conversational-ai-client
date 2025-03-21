import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Converse with AI',
  description:
    'A conversational AI web-app powered by OpenAI and Agora built with v0, and next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

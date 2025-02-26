import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Poorvith@Portfolio',
  description: 'Software Engineer Portfolio',
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
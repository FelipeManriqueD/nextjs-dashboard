import { montserratt } from './ui/fonts';
import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserratt.className} antialiased`}>{children}</body>
    </html>
  );
}

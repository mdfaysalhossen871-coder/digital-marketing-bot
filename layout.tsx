import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Digital Marketing Bot', description: 'AI marketing dashboard' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="bn"><body>{children}</body></html>;
}

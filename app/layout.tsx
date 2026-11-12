import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Daniel Orina — Creative Developer & Digital Engineer', description: 'Portfolio of Daniel Orina: full-stack engineering, Flutter apps, enterprise automation, digital products and visual design.', openGraph: { title: 'Daniel Orina — Selected Work', description: 'Engineering systems. Designing experiences. Building what comes next.', type: 'website' } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }

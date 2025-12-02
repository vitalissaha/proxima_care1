import './globals.css';
import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const manrope = Manrope({ subsets: ['latin'], weight: ['300','400','500','600','700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','600','700'], style: ['normal','italic'], variable: '--font-playfair' });

export const metadata: Metadata = {
	title: 'Proxima Care — L’art de prendre soin',
	description: 'Proxima Care — Centre de soins et de bien-être holistique. Massages thérapeutiques, relaxation, accompagnement postural.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
		<html lang="fr">
			<body className={`${manrope.className} ${playfair.variable} min-h-screen flex flex-col`}>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
      </body>
    </html>
  );
}

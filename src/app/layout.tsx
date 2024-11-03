import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/personalized/ScrollToTop';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Telmo Alexander',
	description: 'Portafolio profesional de Ingeniero de software.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased relative  min-h-screen`}
			>
				{/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_0%_-200px,#d5c5ff,transparent)] opacity-15 pointer-events-none " /> */}
				<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_100%_-200px,#d5c5ff,transparent)] opacity-25 pointer-events-none  z-10" />

				{children}
				<ScrollToTop />
				<Toaster richColors closeButton />
			</body>
		</html>
	);
}

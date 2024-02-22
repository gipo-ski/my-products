import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from './footer'
import Nav from './nav'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home Page",
	description: "Welcome to a GIPOSKI built Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}

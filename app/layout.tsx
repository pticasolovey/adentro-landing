import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import { classNames } from '@/utils/classNames';

const Header = dynamic(() => import('@/components/header/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer/Footer'), { ssr: false });

import './globals.scss';

const font = Noto_Sans({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Adentro',
	description: 'Efficiency comes with automation',
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html lang='en'>
			<body
				className={classNames(font.className, 'min-h-[100dvh] h-full w-full flex flex-col text-[#1A1365]')}
				suppressHydrationWarning
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;

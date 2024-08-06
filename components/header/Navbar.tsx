import { FC } from 'react';
import { urlFor } from '@/sanity/lib/image';
import { Navigation } from '@/interfaces/sanityInterface';

import Logo from './Logo';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';

interface NavbarProps {
	handleOpen: () => void;
	navigation: Navigation[];
}

const Navbar: FC<NavbarProps> = ({ handleOpen, navigation }) => {
	const logoNavItem = navigation.find(({ href }) => href === '#hero');
	const logo = logoNavItem && urlFor(logoNavItem.image);
	const logoSRC = logo ? logo.url() : '';

	return (
		<nav className='relative w-full h-full flex justify-center items-center'>
			<button onClick={handleOpen} className='md:hidden absolute left-4'>
				<MdMenu size={30} color='#1A1365' />
			</button>

			<div className='md:hidden absolute left-1/2 -translate-x-1/2'>{logoSRC && <Logo imageSRC={logoSRC} />}</div>

			<ul className='hidden md:flex align-center gap-12 lg:gap-24 px-4 text-sm leading-8 text-[#1A1365]'>
				{navigation.map(({ _key, href, image, label }) => {
					const isLogo = href === '#hero';
					const imageSRC = image ? urlFor(image).url() : '';

					return (
						<li key={_key}>
							<Link href={href}>{isLogo ? <Logo imageSRC={imageSRC} /> : label}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

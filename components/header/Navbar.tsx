import { FC } from 'react';
import Link from 'next/link';

import { MdMenu } from 'react-icons/md';
import Logo from './Logo';

interface NavbarProps {
	handleOpen: () => void;
}

const Navbar: FC<NavbarProps> = ({ handleOpen }) => {
	return (
		<nav className='relative w-full h-full flex justify-center items-center'>
			<button onClick={handleOpen} className='md:hidden absolute left-4'>
				<MdMenu size={30} color='#1A1365' />
			</button>

			<div className='md:hidden absolute left-1/2 -translate-x-1/2'>
				<Logo />
			</div>

			<ul className='hidden md:flex align-center gap-12 lg:gap-24 px-4 text-sm leading-8 text-[#1A1365]'>
				<li>
					<Link href='#approach'>Approach</Link>
				</li>

				<li>
					<Link href='#services'>Services</Link>
				</li>

				<li className='flex items-center'>
					<Link href='#hero'>
						<Logo />
					</Link>
				</li>

				<li>
					<Link href='#culture'>Culture</Link>
				</li>

				<li>
					<Link href='#contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

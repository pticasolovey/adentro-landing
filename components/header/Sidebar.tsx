import { FC } from 'react';
import { classNames } from '@/utils/classNames';
import { NAVIGATION } from '@/constants/navigation';

import Link from 'next/link';
import { MdClose } from 'react-icons/md';

interface SidebarProps {
	isOpen: boolean;
	handleClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, handleClose }) => {
	return (
		<aside
			className={classNames(
				'fixed top-0 left-0 transform',
				'h-full w-full md:hidden bg-white',
				isOpen ? 'translate-x-0' : '-translate-x-full',
				'transition-transform duration-300 ease-in-out'
			)}
		>
			<div className='p-4'>
				<button onClick={handleClose} className='mb-4'>
					<MdClose size={30} color='#1A1365' />
				</button>

				<nav className='space-y-4'>
					<ul className='flex flex-col gap-4'>
						{NAVIGATION.map(({ href, label }) => (
							<li key={label} className='text-2xl text-[#1A1365]'>
								<Link href={href}>{label}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;

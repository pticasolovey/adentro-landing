'use client';

import { FC, useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => setIsOpen(!isOpen);

	return (
		<header className='w-full h-16 py-4'>
			<Navbar handleOpen={handleToggle} />
			<Sidebar isOpen={isOpen} handleClose={handleToggle} />
		</header>
	);
};

export default Header;
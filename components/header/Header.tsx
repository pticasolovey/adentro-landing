'use client';

import { FC, useState, useEffect } from 'react';
import { fetchData } from '@/utils/fetchData';
import { Navigation } from '@/interfaces/sanityInterface';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const query = `
	*[_type == 'header'] {
       navigation
    }
`;

const Header: FC = () => {
	const [navigationData, setNavigationData] = useState<Navigation[]>([]);

	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => setIsOpen(!isOpen);

	useEffect(() => {
		fetchData(query).then((response) => setNavigationData(response[0].navigation));
	}, []);

	return (
		<header className='fixed w-full h-16 py-4 bg-white z-20'>
			<Navbar handleOpen={handleToggle} navigation={navigationData} />
			<Sidebar isOpen={isOpen} handleClose={handleToggle} navigation={navigationData} />
		</header>
	);
};

export default Header;

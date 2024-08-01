import { FC } from 'react';
import { classNames } from '@/utils/classNames';

const Footer: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='py-10'>
			<ul
				className={classNames(
					'justify-center md:items-center space-x-4 md:space-x-1',
					'w-full flex flex-wrap px-4',
					'text-sm leading-8 text-[#1A1365]'
				)}
			>
				<li>© {currentYear} adentro AG</li>
				<li className='hidden md:block'>|</li>
				<li>Sihlbruggstrasse 109</li>
				<li className='hidden md:block'>|</li>
				<li>CH 6340 Baar ZG</li>
				<li className='hidden md:block'>|</li>
				<li>Switzerland</li>
			</ul>
		</footer>
	);
};

export default Footer;

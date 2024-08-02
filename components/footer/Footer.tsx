import { FC } from 'react';
import { classNames } from '@/utils/classNames';

import Image from 'next/image';
import background from '@/assets/background_footer.svg';

const Footer: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='relative py-10'>
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

			<div className='absolute left-0 bottom-0 -z-10'>
				<Image src={background} alt='background' className='h-full w-full' />
			</div>
		</footer>
	);
};

export default Footer;

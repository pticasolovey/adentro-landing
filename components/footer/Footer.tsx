import { FC } from 'react';
import { urlFor } from '@/sanity/lib/image';

import { fetchData } from '@/utils/fetchData';
import { classNames } from '@/utils/classNames';

import Image from 'next/image';
import background from '@/assets/background_footer.svg';

const query = `
	*[_type == 'footer'] {
  		list,
		background
	}
`;

const Footer: FC = async () => {
	const data = await fetchData(query);
	const backgroundSRC = urlFor(data[0].background).url();

	return (
		<footer className='relative py-10'>
			<ul
				className={classNames(
					'justify-center md:items-center space-x-4 md:space-x-1',
					'w-full flex flex-wrap px-4',
					'text-sm leading-8 text-[#1A1365]'
				)}
			>
				<li>{data[0].list[0]}</li>
				<Divider />
				<li>{data[0].list[1]}</li>
				<Divider />
				<li>{data[0].list[2]}</li>
				<Divider />
				<li>{data[0].list[3]}</li>
			</ul>

			<div className='absolute left-0 bottom-0 -z-10'>
				<Image src={backgroundSRC || background} alt='background' width={509} height={599} />
			</div>
		</footer>
	);
};

const Divider: FC = () => <li className='hidden md:block'>|</li>;

export default Footer;

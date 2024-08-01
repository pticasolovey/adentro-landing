import { FC } from 'react';
import Image from 'next/image';

interface ServicesCardItemProps {
	imageSRC: string;
	title: string | null;
	description: string | null;
}

const ServicesCardItem: FC<ServicesCardItemProps> = ({ imageSRC, title, description }) => {
	return (
		<div className='flex flex-col gap-8 p-8 rounded-[3px] border border-[#1A1365] border-opacity-35'>
			<Image src={imageSRC} width={58} height={58} alt='icon' />
			<h6 className='text-xl font-medium'>{title}</h6>
			<p className='leading-7'>{description}</p>
		</div>
	);
};

export default ServicesCardItem;

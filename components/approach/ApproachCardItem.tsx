import { FC } from 'react';
import Image from 'next/image';

interface ApproachCardItemProps {
	imageSRC: string;
	title: string;
	description: string;
}

const ApproachCardItem: FC<ApproachCardItemProps> = ({ imageSRC, title, description }) => {
	return (
		<div className='flex items-start justify-between gap-8'>
			<Image src={imageSRC} width={88} height={88} alt='icon' />

			<div className='flex flex-col gap-5'>
				<h6 className='text-2xl font-medium'>{title}</h6>
				<p className='leading-7'>{description}</p>
			</div>
		</div>
	);
};

export default ApproachCardItem;

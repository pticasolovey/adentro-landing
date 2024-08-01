import { FC } from 'react';
import { classNames } from '@/utils/classNames';
import Image from 'next/image';

interface ModulesCardItemProps {
	id: number;
	imageSRC: string;
	title: string | null;
	description: string | null;
}

const ModulesCardItem: FC<ModulesCardItemProps> = ({ id, imageSRC, title, description }) => {
	return (
		<>
			{id === 6 ? (
				<div className={classNames('flex items-center justify-center', 'py-5 px-4 md:py-10 ')}>
					<div className='w-[196px] h-[196px]'>
						<Image src={imageSRC} alt='decoration' className='w-full h-full object-contain' />
					</div>
				</div>
			) : (
				<div
					className={classNames(
						'flex flex-col gap-6',
						'py-5 px-9 md:py-12 rounded-[3px] ',
						'border border-[#1A1365] border-opacity-35'
					)}
				>
					<Image src={imageSRC} width={58} height={58} alt='icon' />
					<h6 className='text-2xl font-medium'>{title}</h6>
					<p className='leading-7'>{description}</p>
				</div>
			)}
		</>
	);
};

export default ModulesCardItem;

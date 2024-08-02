import { FC } from 'react';
import { classNames } from '@/utils/classNames';
import { modulesCardsList } from '@/constants/modules';

import Image from 'next/image';
import ModulesCardItem from './ModulesCardItem';
import circleDecorationImage from '@/assets/circle_decoration.svg';

const ModulesCardsList: FC = () => {
	return (
		<div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-5 mt-16'>
			{modulesCardsList.map(({ id, imageSRC, title, description }) => (
				<ModulesCardItem key={id} imageSRC={imageSRC} title={title} description={description} />
			))}

			<div
				className={classNames(
					'flex items-center justify-end',
					'w-full py-5 px-9 md:py-12',
					modulesCardsList.length % 2 === 0 ? 'lg:col-span-2' : 'lg:absolute bottom-0'
				)}
			>
				<div className='w-full lg:w-1/2 flex items-center justify-center'>
					<div className='w-[196px] h-[196px]'>
						<Image src={circleDecorationImage} alt='decoration' className='w-full h-full object-contain' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModulesCardsList;

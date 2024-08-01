import { FC } from 'react';
import { expertiseCardsList } from '@/constants/expertise';
import ExpertiseCardItem from './ExpertiseCardItem';

const ExpertiseCardsList: FC = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20'>
			{expertiseCardsList.map(({ id, imageSRC, width, height }) => (
				<ExpertiseCardItem key={id} imageSRC={imageSRC} width={width} height={height} />
			))}
		</div>
	);
};

export default ExpertiseCardsList;

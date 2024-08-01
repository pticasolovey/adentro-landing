import { FC } from 'react';
import { approachCards } from '@/constants/approach';
import ApproachCardItem from './ApproachCardItem';

const ApproachCardList: FC = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mt-12 lg:mt-24'>
			{approachCards.map(({ id, imageSRC, title, description }) => (
				<ApproachCardItem key={id} imageSRC={imageSRC} title={title} description={description} />
			))}
		</div>
	);
};

export default ApproachCardList;

import { FC } from 'react';
import { servicesCardsList } from '@/constants/services';
import ServicesCardItem from './ServicesCardItem';

const ServicesCardsList: FC = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16'>
			{servicesCardsList.map(({ id, imageSRC, title, description }) => (
				<ServicesCardItem key={id} imageSRC={imageSRC} title={title} description={description} />
			))}
		</div>
	);
};

export default ServicesCardsList;

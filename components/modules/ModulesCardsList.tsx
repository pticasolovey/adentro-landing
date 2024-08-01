import { FC } from 'react';
import { modulesCardsList } from '@/constants/modules';
import ModulesCardItem from './ModulesCardItem';

const ModulesCardsList: FC = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-5 mt-16'>
			{modulesCardsList.map(({ id, imageSRC, title, description }) => (
				<ModulesCardItem key={id} id={id} imageSRC={imageSRC} title={title} description={description} />
			))}
		</div>
	);
};

export default ModulesCardsList;

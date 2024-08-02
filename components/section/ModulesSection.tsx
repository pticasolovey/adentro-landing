import { FC } from 'react';
import SectionWrapper from './SectionWrapper';
import ModulesCardsList from '../modules/ModulesCardsList';

const ModulesSection: FC = () => {
	return (
		<SectionWrapper sectionId='culture'>
			<div className='relative'>
				<div className='flex flex-col gap-2 sm:gap-4 text-center'>
					<h2 className='text-4xl sm:text-5xl lg:text-7xl font-semibold'>GenAI Modules</h2>
					<span className='text-3xl sm:text-4xl lg:text-5xl font-light'>in security and process automation</span>
				</div>

				<p className='max-w-[740px] w-full mt-12 sm:mt-16 lg:mt-[120px] text-lg sm:text-xl lg:text-2xl font-medium'>
					Our GenAI modules are at the forefront of security and process automation, providing innovative solutions
					tailored to your needs. Key features include:
				</p>

				<ModulesCardsList />
			</div>
		</SectionWrapper>
	);
};

export default ModulesSection;

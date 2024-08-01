import { FC, Fragment } from 'react';
import SectionWrapper from './SectionWrapper';
import ModulesCardsList from '../modules/ModulesCardsList';

const ModulesSection: FC = () => {
	return (
		<SectionWrapper sectionId='culture'>
			<Fragment>
				<div className='flex flex-col gap-4 text-center'>
					<h2 className='text-5xl lg:text-7xl font-semibold'>GenAI Modules</h2>
					<span className='text-4xl lg:text-5xl font-light'>in security and process automation</span>
				</div>

				<p className='max-w-[740px] w-full mt-16 lg:mt-[120px] text-xl lg:text-2xl font-medium'>
					Our GenAI modules are at the forefront of security and process automation, providing innovative solutions
					tailored to your needs. Key features include:
				</p>

				<ModulesCardsList />
			</Fragment>
		</SectionWrapper>
	);
};

export default ModulesSection;

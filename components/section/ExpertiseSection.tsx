import { FC, Fragment } from 'react';
import SectionWrapper from './SectionWrapper';
import ExpertiseCardsList from '../expertise/ExpertiseCardsList';

const ExpertiseSection: FC = () => {
	return (
		<SectionWrapper>
			<Fragment>
				<h4 className='text-2xl xs:text-3xl sm:text-[42px] sm:leading-[50px] font-semibold'>
					Our expertise in automation
				</h4>

				<p className='max-w-[530px] w-full mt-6 leading-7'>
					We specialize in developing sophisticated automation frameworks using the latest GenAI technologies,
					seamlessly integrating Splunk and Elastic.
				</p>

				<div className='mt-12 md:mt-24 md:pl-16 lg:pl-48'>
					<ExpertiseCardsList />

					<p className='max-w-[530px] w-full mt-12 md:mt-24 leading-7'>
						Our solutions empower businesses to streamline their security operations, enhance efficiency, and ensure
						robust compliance with ever-evolving regulatory requirements.
					</p>
				</div>
			</Fragment>
		</SectionWrapper>
	);
};

export default ExpertiseSection;

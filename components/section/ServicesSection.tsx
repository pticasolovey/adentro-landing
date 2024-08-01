import { FC, Fragment } from 'react';
import SectionWrapper from './SectionWrapper';
import ServicesCardsList from '../services/ServicesCardsList';

const ServicesSection: FC = () => {
	return (
		<SectionWrapper sectionId='services'>
			<Fragment>
				<div className='flex flex-col gap-4 text-center'>
					<h2 className='text-5xl lg:text-7xl font-semibold'>Elastic Search and LLM</h2>
					<span className='text-4xl lg:text-5xl font-light'>— a powerful combination</span>
				</div>

				<p className='max-w-[740px] w-full mt-16 lg:mt-[120px] text-xl lg:text-2xl font-medium'>
					Elastic Search&apos;s robust data indexing and search capabilities combined with the analytical power of Large
					Language Models (LLM) offer unparalleled insights into your security data. This combination allows for:
				</p>

				<ServicesCardsList />
			</Fragment>
		</SectionWrapper>
	);
};

export default ServicesSection;
``;

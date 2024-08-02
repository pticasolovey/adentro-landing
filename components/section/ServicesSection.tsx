import { FC } from 'react';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import ServicesCardsList from '../services/ServicesCardsList';

import background from '@/assets/background_services.svg';
import { classNames } from '@/utils/classNames';

const ServicesSection: FC = () => {
	return (
		<SectionWrapper sectionId='services'>
			<div className='relative'>
				<div className='flex flex-col gap-2 sm:gap-4 text-center'>
					<h2 className='text-4xl sm:text-5xl lg:text-7xl font-semibold'>Elastic Search and LLM</h2>
					<span className='text-3xl sm:text-4xl lg:text-5xl font-light'>— a powerful combination</span>
				</div>

				<p className='max-w-[740px] w-full mt-12 sm:mt-16 lg:mt-[120px] text-lg sm:text-xl lg:text-2xl font-medium'>
					Elastic Search&apos;s robust data indexing and search capabilities combined with the analytical power of Large
					Language Models (LLM) offer unparalleled insights into your security data. This combination allows for:
				</p>

				<ServicesCardsList />

				<div
					className={classNames(
						'absolute top-[12%] xs:top-[-5%] sm:top-[-10%] md:top-[-20%] xl:top-[-20%]',
						'right-[10%] xs:right-0 sm:right-[-5%] lg:right-[20%] xl:right-[25%] -z-10'
					)}
				>
					<Image src={background} alt='background' />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default ServicesSection;
``;

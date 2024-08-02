import { FC } from 'react';
import { classNames } from '@/utils/classNames';

import Image from 'next/image';
import CTAButton from '../CTAButton';
import SectionWrapper from './SectionWrapper';

import flagIcon from '@/assets/flag-icon.svg';
import background from '@/assets/background_hero.svg';

const HeroSection: FC = () => {
	return (
		<SectionWrapper sectionId='hero' styles='mt-4'>
			<div className='relative md:h-[60vh] flex flex-col items-center justify-center gap-10 text-center'>
				<div
					className={classNames(
						'flex flex-col',
						'font-medium text-5xl sm:text-7xl md:text-[92px]',
						'leading-[60px] sm:leading-[80px] md:leading-[106px]'
					)}
				>
					<h1>Efficiency comes with</h1>
					<p className='text-gradient'>automation</p>
				</div>

				<p className='max-w-[850px] w-full leading-7'>
					In today&apos;s dynamic digital landscape, efficient security operations are crucial for organizational
					success and resilience. Cutting-edge automation transforms compliance governance and risk assessment.
				</p>

				<div className='flex flex-col items-center gap-3 font-medium'>
					<CTAButton />

					<div className='flex gap-1'>
						<p className='text-sm'>Pushing the limits since 2013</p>
						<Image src={flagIcon} alt='flag icon' />
					</div>
				</div>

				<div
					className={classNames(
						'h-full absolute left-[25%] -z-10',
						'top-[15%] sm:top-[25%] md:top-[20%] lg:top-[15%] xl:top-[5%] xxl:top-0'
					)}
				>
					<Image src={background} alt='background' className='h-full w-full' />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default HeroSection;

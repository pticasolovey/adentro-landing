import { FC } from 'react';
import { classNames } from '@/utils/classNames';

import Image from 'next/image';
import flagIcon from '@/assets/flag-icon.svg';
import background from '@/assets/background_hero.svg';
import SectionWrapper from './SectionWrapper';

const HeroSection: FC = () => {
	return (
		<SectionWrapper sectionId='hero' styles='mt-4'>
			<div className='relative md:h-[60vh] flex flex-col items-center justify-center gap-10 text-center'>
				<div
					className={classNames(
						'flex flex-col',
						'font-medium text-6xl sm:text-7xl md:text-[92px]',
						'leading-[70px] sm:leading-[80px] md:leading-[106px]'
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
					<button className='w-[200px] text-lg text-white py-5 px-[50px] rounded-[3px] bg-[#7774AA]'>
						Get started
					</button>

					<div className='flex gap-1'>
						<p className='text-sm'>Pushing the limits since 2013</p>
						<Image src={flagIcon} alt='flag icon' />
					</div>
				</div>

				<div className='h-full absolute top-0 left-[25%] -z-10'>
					<Image src={background} alt='background' />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default HeroSection;

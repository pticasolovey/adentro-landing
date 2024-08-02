import { FC } from 'react';
import SectionWrapper from './SectionWrapper';

import Image from 'next/image';
import circleDecorationImage from '@/assets/circle_decoration.svg';

const TaglineSection: FC = () => {
	return (
		<SectionWrapper>
			<div className='relative xs:h-[300px] md:h-[400px] lg:h-[500px] flex items-center'>
				<p className='max-w-[900px] w-full text-2xl sm:text-3xl lg:text-4xl'>
					Partner with us to revolutionize your security operations, achieve unparalleled efficiency, and maintain
					unwavering compliance in an increasingly complex digital world.
				</p>

				<div className='absolute h-full right-[20%]'>
					<Image src={circleDecorationImage} alt='decoration' width={400} height={400} className='w-full h-full' />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default TaglineSection;

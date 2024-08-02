import { FC } from 'react';
import Link from 'next/link';
import SectionWrapper from './SectionWrapper';

const ContactSection: FC = () => {
	return (
		<SectionWrapper sectionId='contact'>
			<div className='flex flex-col items-center justify-center gap-6 sm:gap-10 text-center font-medium'>
				<h2 className='text-4xl sm:text-5xl md:text-6xl leading-[50px] sm:leading-[60px] md:leading-[70px]'>
					Let&apos;s make <br /> the connection!
				</h2>

				<Link href='mailto:email@email.com' className='text-gradient-underline text-2xl underline'>
					email@email.com
				</Link>
			</div>
		</SectionWrapper>
	);
};

export default ContactSection;

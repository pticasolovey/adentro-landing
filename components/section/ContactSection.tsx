import { FC } from 'react';
import Link from 'next/link';
import SectionWrapper from './SectionWrapper';

const ContactSection: FC = () => {
	return (
		<SectionWrapper sectionId='contact'>
			<div className='relative flex flex-col items-center justify-center gap-10 text-center font-medium'>
				<h2 className='text-5xl sm:text-6xl md:text-7xl leading-[60px] sm:leading-[80px]'>
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

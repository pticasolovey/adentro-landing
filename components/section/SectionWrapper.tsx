import { classNames } from '@/utils/classNames';
import { ReactNode, FC } from 'react';

interface SectionWrapperProps {
	children: ReactNode;
	sectionId?: string;
	styles?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, sectionId, styles }) => {
	return (
		<section
			id={sectionId}
			className={classNames('max-w-[1300px] w-full py-[60px] md:py-[80px] lg:py-[100px] px-10 mx-auto', styles!)}
		>
			{children}
		</section>
	);
};

export default SectionWrapper;

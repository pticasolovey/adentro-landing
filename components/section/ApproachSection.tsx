import { FC, Fragment } from 'react';

import SectionWrapper from './SectionWrapper';
import ApproachCardList from '../approach/ApproachCardList';

const ApproachSection: FC = () => {
	return (
		<SectionWrapper sectionId='approach'>
			<Fragment>
				<h4 className='text-2xl xs:text-3xl sm:text-[42px] sm:leading-[50px] font-semibold'>Why choose us?</h4>
				<ApproachCardList />
			</Fragment>
		</SectionWrapper>
	);
};

export default ApproachSection;

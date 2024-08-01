import { FC, Fragment } from 'react';

import SectionWrapper from './SectionWrapper';
import ApproachCardList from '../approach/ApproachCardList';

const ApproachSection: FC = () => {
	return (
		<SectionWrapper sectionId='approach'>
			<Fragment>
				<h4 className='text-[42px] font-semibold'>Why choose us?</h4>
				<ApproachCardList />
			</Fragment>
		</SectionWrapper>
	);
};

export default ApproachSection;

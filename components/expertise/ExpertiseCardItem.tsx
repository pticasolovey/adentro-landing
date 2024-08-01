import { FC } from 'react';
import Image from 'next/image';

interface ExpertiseCardItemProps {
	imageSRC: string;
	width: number;
	height: number;
}

const ExpertiseCardItem: FC<ExpertiseCardItemProps> = ({ imageSRC, width, height }) => {
	return (
		<div className='logo-item flex justify-center items-center'>
			<Image src={imageSRC} width={width} height={height} alt='partners' />
		</div>
	);
};

export default ExpertiseCardItem;

'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

const CTAButton: FC = () => {
	const router = useRouter();

	return (
		<button
			className='w-[200px] text-lg text-white py-5 px-[50px] rounded-[3px] bg-[#7774AA]'
			onClick={() => router.push('#contact')}
		>
			Get started
		</button>
	);
};

export default CTAButton;

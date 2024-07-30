import { FC } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.svg';

const Logo: FC = () => {
	return <Image src={logo} alt='logo' width={155} height={25} />;
};

export default Logo;

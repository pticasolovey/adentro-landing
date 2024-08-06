import { FC } from 'react';
import Image from 'next/image';
// import logo from '@/assets/logo.svg';

interface LogoProps {
	imageSRC: any;
}

const Logo: FC<LogoProps> = ({ imageSRC }) => {
	return <Image src={imageSRC} alt='logo' width={155} height={25} />;
};

export default Logo;

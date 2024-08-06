import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/section/HeroSection'), { ssr: false });
const ExpertiseSection = dynamic(() => import('@/components/section/ExpertiseSection'), { ssr: false });
const ApproachSection = dynamic(() => import('@/components/section/ApproachSection'), { ssr: false });
const ServicesSection = dynamic(() => import('@/components/section/ServicesSection'), { ssr: false });
const ModulesSection = dynamic(() => import('@/components/section/ModulesSection'), { ssr: false });
const TaglineSection = dynamic(() => import('@/components/section/TaglineSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/section/ContactSection'), { ssr: false });

export const runtime = 'edge';

const Home = async () => {
	return (
		<main className='flex flex-col flex-1'>
			<HeroSection />
			<ExpertiseSection />
			<ApproachSection />
			<ServicesSection />
			<ModulesSection />
			<TaglineSection />
			<ContactSection />
		</main>
	);
};

export default Home;

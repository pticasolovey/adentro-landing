import HeroSection from '@/components/section/HeroSection';
import ExpertiseSection from '@/components/section/ExpertiseSection';
import ApproachSection from '@/components/section/ApproachSection';
import ServicesSection from '@/components/section/ServicesSection';
import ModulesSection from '@/components/section/ModulesSection';
import TaglineSection from '@/components/section/TaglineSection';
import ContactSection from '@/components/section/ContactSection';

export const runtime = 'edge';

const Home = () => {
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

'use client';
import { Footer } from '../personalized/Footer';
import { Header } from '../personalized/Header';
import Particles from '../personalized/Particles';
import { SectionContact } from './SectionContact';
import { SectionEducation } from './SectionEducation';
import { SectionExperience } from './SectionExperience';
import { SectionHero } from './SectionHero';
import { SectionProjects } from './SectionProjects';

export const SectionView = () => {
	return (
		<div className="flex-1 bg-neutral-950 relative">
			<Particles
				className="absolute inset-0 z-0 "
				quantity={50}
				ease={40}
				size={0.05}
				staticity={70}
				color="#ffffff"
			/>
			<div className="container space-y-20 lg:space-y-40 pb-20 relative z-10">
				<Header />
				<SectionHero />
				<SectionProjects />
				<SectionExperience />
				<SectionEducation />
				<SectionContact />
			</div>
			<Footer />
		</div>
	);
};

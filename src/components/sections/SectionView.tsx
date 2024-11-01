'use client';
import { Footer } from '../personalized/Footer';
import { Header } from '../personalized/Header';
import { SectionContact } from './SectionContact';
import { SectionEducation } from './SectionEducation';
import { SectionExperience } from './SectionExperience';
import { SectionHero } from './SectionHero';
import { SectionProjects } from './SectionProjects';

export const SectionView = () => {
	return (
		<div className="flex-1 bg-neutral-950">
			<div className="container space-y-40 pb-20">
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

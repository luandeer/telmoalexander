'use client';
import { Footer } from '../personalized/Footer';
import { Header } from '../personalized/Header';
import { SectionContact } from './SectionContact';
import { SectionAbout } from './SectionAbout';
import { SectionHero } from './SectionHero';
import { SectionProjects } from './SectionProjects';
import { SectionExperience } from './SectionExperience';

export const SectionView = () => {
	return (
		<div className="flex-1 bg-neutral-950 ">
			<div className="container space-y-20 lg:space-y-40 pb-20 ">
				<Header />
				<SectionHero />
				<SectionProjects />
				<SectionExperience />
				<SectionAbout />
				<SectionContact />
			</div>
			<Footer />
		</div>
	);
};

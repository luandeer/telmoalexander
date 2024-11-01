import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../personalized/CardProject';
import { Nextjs } from '../icons/Nextjs';
import { ReactJs } from '../icons/React';
import { TypeScript } from '../icons/TypeScript';
import { TailwindCss } from '../icons/Tailwind';

const projects = [
	{
		id: 1,
		name: 'Movie Bowser',
		description:
			'Desarrollado con Next.js, permite a los usuarios explorar una extensa base de datos de películas y series, utilizando la API de The Movie Database (TMDB).',
		imgSrc: '/myphoto.jpg',
		code: 'https://github.com/fbenjamin6/MovieBowser',
		website: 'https://movie-bowser.vercel.app/',
		techs: [
			{
				img: Nextjs,
				tag: 'NEXTJS',
				alt: 'Next.js tech logo',
			},
			{
				img: ReactJs,
				tag: 'REACT',
				alt: 'React tech logo',
			},
			{
				img: TypeScript,
				tag: 'TypeScript',
				alt: 'JavaScript tech logo',
			},
			{
				img: TailwindCss,
				tag: 'TAILWIND',
				alt: 'Tailwind CSS tech logo',
			},
		],
	},
	{
		id: 2,
		name: 'Memoween',
		description: 'asdsd',
		imgSrc: '/myphoto.jpg',
		code: 'https://github.com/fbenjamin6/Memoween',
		website: 'https://memoween.netlify.app/',
		techs: [
			{
				img: ReactJs,
				tag: 'REACT',
				alt: 'React tech logo',
			},
			{
				img: TypeScript,
				tag: 'JAVASCRIPT',
				alt: 'JavaScript tech logo',
			},
			{
				img: TailwindCss,
				tag: 'TAILWIND',
				alt: 'Tailwind CSS tech logo',
			},
		],
	},
	{
		id: 3,
		name: 'BudgetApp',
		description: 'asdsd',
		imgSrc: '/myphoto.jpg',
		code: 'https://github.com/fbenjamin6/BudgetApp',
		website: 'https://fbenjaminbudgetapp.netlify.app/',
		techs: [
			{
				img: TypeScript,
				tag: 'HTML',
				alt: 'HTML tech logo',
			},
			{
				img: TypeScript,
				tag: 'CSS',
				alt: 'CSS tech logo',
			},
			{
				img: TypeScript,
				tag: 'JAVASCRIPT',
				alt: 'JavaScript tech logo',
			},
			{
				img: TypeScript,
				tag: 'BOOTSTRAP',
				alt: 'Bootstrap tech logo',
			},
		],
	},
];

export function SectionProjects() {
	const { t } = useTranslation();

	return (
		<section
			id="projects"
			className="flex flex-col gap-7 lg:gap-11 pt-24 mb-28"
		>
			<div className="text-center space-y-2">
				<h3 className="text-3xl md:text-4xl max-md:mb-1 font-bold text-white">
					{t('Proyectos')}
				</h3>
				<p className=" text-gray-300 max-w-md mx-auto leading-tight">
					{t(
						'Explora mis proyectos, donde aplico tecnología moderna y buenas prácticas de desarrollo.'
					)}
				</p>
			</div>

			<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
				{projects.map(
					({ id, name, imgSrc, description, code, website, techs }) => {
						return (
							<ProjectCard
								key={id}
								name={name}
								description={description}
								imgSrc={imgSrc}
								code={code}
								website={website}
								techs={techs}
							/>
						);
					}
				)}
			</div>
		</section>
	);
}

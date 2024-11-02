import React from 'react';
import { TimelineLayoutExperience } from '../personalized/TimelineLayoutExperience';
import { timelineData } from '@/data/datatimeline';
import { Vercel } from '../icons/Vercel';
import { GitHub } from '../icons/GitHub';
import { Figma } from '../icons/Figma';
import { VisualStudioCode } from '../icons/VisualStudioCode';
import { Nextjs } from '../icons/Nextjs';
import { TypeScript } from '../icons/TypeScript';
import { ReactQuery } from '../icons/ReactQuery';
import { TailwindCss } from '../icons/Tailwind';

export const SectionExperience = () => {
	return (
		<section>
			<div className="text-center space-y-2 mb-12">
				<h3 className="text-3xl md:text-4xl max-md:mb-1 font-bold text-white">
					Acerca de mi
				</h3>
				<p className=" text-gray-300 max-w-md mx-auto leading-tight">
					Experiencia práctica en proyectos aplicando tecnología moderna,
					siempre enfocado en la calidad y mejora continua.
				</p>
			</div>
			<div className="flex items-start sm:flex-row flex-col gap-8">
				<div className="w-fit mx-auto space-y-10">
					<div className="flex flex-col gap-5 lg:gap-8 text-white">
						<h2 className="text font-semibold capitalize">
							About Me<span className="text-primary">.</span>
						</h2>
						<div className="relative">
							<p className=" text-base   max-w-md">
								My main purpose is to{' '}
								<strong className="text-neutral-1">
									enhance user experiences
								</strong>{' '}
								by creating websites adjusted to the device, capacities and
								needs of the user. Besides software engineer,
								<strong className="text-neutral-1">
									I love The Last of Us, Taylor Swift, friendship and coffee.
								</strong>
							</p>
						</div>
						<div className="flex flex-col gap-4">
							<h3 className="font-semibold text-2xl tracking-[0.96px]">
								Skills
							</h3>
							<div className="flex flex-wrap gap-4">
								<Nextjs />
								<TypeScript />
								<ReactQuery />
								<TailwindCss />
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<h3 className="font-semibold text-2xl tracking-[0.96px]">
								Tools
							</h3>
							<div className="flex flex-wrap gap-4">
								<VisualStudioCode />
								<Figma />
								<GitHub />
								<Vercel />
							</div>
						</div>
					</div>
				</div>
				<div className="w-fit mx-auto space-y-10">
					<h1 className="text-white font-medium text-lg">Experiencia:</h1>
					<TimelineLayoutExperience items={timelineData} />
				</div>
			</div>
		</section>
	);
};

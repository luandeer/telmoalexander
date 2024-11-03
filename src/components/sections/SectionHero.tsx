import Link from 'next/link';
import { ArrowAbajo } from '../icons/ArrowAbajo';
import { ScrollArrow } from '../icons/ScrollArrow';
import HeaderMarquee from '../personalized/carousel';
import Particles from '../personalized/Particles';
import { Hand } from 'lucide-react';

export const SectionHero = () => {
	return (
		<>
			<section className=" flex flex-col w-full h-full relative ">
				<Particles
					className="absolute inset-0 z-0 "
					quantity={50}
					ease={40}
					size={0.05}
					staticity={70}
					color="#ffffff"
				/>
				<div className="flex flex-col justify-center gap-8 h-full lg:flex-row lg:items-center lg:gap-11 text-white z-10 relative">
					<div className="flex flex-col gap-5 lg:w-1/2">
						<div className="space-y-2">
							<div className="flex items-center gap-2 text-gray-300 font-medium">
								<span className="relative flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-700 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
								</span>
								<span className="text-sm md:text-lg ">
									Frontend Developer & Software Engineer
								</span>
							</div>
							{/* <div className="h-px w-24 bg-gradient-to-r from-amber-300/50 to-transparent"></div> */}
						</div>

						<div className=" text-start text-4xl font-bold  drop-shadow-sm  md:text-6xl  text-gray-100 ">
							<div className="flex items-center justify-start gap-2 md:text-4xl font-normal">
								Hola <Hand className="animate-wave size-10 " />, soy
							</div>
							<h1>soy Alexander </h1>
						</div>
						<div className="flex items-center text-sm gap-2 ">
							<Link
								href="#projects"
								className="flex   max-w-fit items-center justify-center gap-1 rounded-xl border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
								onClick={(e) => {
									e.preventDefault();
									const section = document.getElementById('projects');
									if (section) {
										section.scrollIntoView({ behavior: 'smooth' });
									}
								}}
							>
								{' '}
								Ver Proyectos <ArrowAbajo />
							</Link>
							<Link
								href="#contact"
								className="border border-gray-100 rounded-xl px-4 py-1.5 hover:underline hover:underline-offset-4"
								onClick={(e) => {
									e.preventDefault();
									const section = document.getElementById('contact');
									if (section) {
										section.scrollIntoView({ behavior: 'smooth' });
									}
								}}
							>
								{' '}
								Contacto
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-6 lg:w-1/2">
						<div className="flex flex-col gap-5 relative ">
							<p className="md:text-lg text-gray-300 !leading-snug">
								Desarrollo soluciones escalables y de impacto que mejoran la
								experiencia digital, donde cada decisión en el proceso de
								desarrollo es una inversión hacia el futuro.{' '}
								<Link
									href="#contact"
									onClick={(e) => {
										e.preventDefault();
										const section = document.getElementById('contact');
										if (section) {
											section.scrollIntoView({ behavior: 'smooth' });
										}
									}}
								>
									{' '}
									<strong className="underline">¡Colaboremos juntos!</strong>
								</Link>
							</p>
						</div>

						<div className="flex flex-col gap-4">
							<div className="space-y-1">
								<div className="flex items-center gap-2 text-gray-300 font-medium">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-700 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
									</span>
									<span className="text-sm md:text-base ">
										Tecnologías que uso:
									</span>
								</div>
							</div>

							<HeaderMarquee />
						</div>
					</div>
				</div>
				<div className="flex justify-center pt-40">
					<div className="flex flex-col items-center gap-4 animate-levitate	">
						<Link
							href="#projects"
							className="w-fit -rotate-90 text-xl mb-2 text-white"
							onClick={(e) => {
								e.preventDefault();
								const section = document.getElementById('projects');
								if (section) {
									section.scrollIntoView({ behavior: 'smooth' });
								}
							}}
						>
							Más
						</Link>
						<ScrollArrow />
					</div>
				</div>
			</section>
		</>
	);
};

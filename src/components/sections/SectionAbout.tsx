import React from 'react';
import { TimelineLayoutExperience } from '../personalized/TimelineLayoutExperience';
import { Vercel } from '../icons/Vercel';
import { GitHub } from '../icons/GitHub';
import { Figma } from '../icons/Figma';
import { VisualStudioCode } from '../icons/VisualStudioCode';
import { Nextjs } from '../icons/Nextjs';
import { TypeScript } from '../icons/TypeScript';
import { ReactQuery } from '../icons/ReactQuery';
import { TailwindCss } from '../icons/Tailwind';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ReactJs } from '../icons/React';
import { Javascript } from '../icons/Javascript';
import { HtmlIcon } from '../icons/Html';
import { CssIcon } from '../icons/CssIcon';
import { Cloudinary } from '../icons/Cloudinary';
import { Prisma } from '../icons/Prisma';

export const SectionAbout = () => {
	return (
		<section>
			<div className="text-center space-y-2 mb-12">
				<h3 className="text-3xl md:text-4xl max-md:mb-1 font-bold text-white">
					Acerca de mi
				</h3>
				<p className=" text-gray-300 max-w-md mx-auto leading-tight">
					Conoce más sobre mí
				</p>
			</div>
			<div className="flex items-start flex-col gap-8 sm:gap-8 w-fit mx-auto">
				<div className=" space-y-10">
					<div className="flex flex-col gap-5  text-white">
						<div className="flex flex-col items-center gap-2">
							<Avatar className="mr-2">
								<AvatarImage src="/myphoto.jpg" alt="@shadcn" />
								<AvatarFallback className="animate-pulse bg-[#f2f2f2]" />
							</Avatar>
							<h2 className="text-white text-center font-medium text-lg flex flex-col ">
								Perez Reginaldo Telmo Alexander
								<span className="text-gray-300 text-xs">
									Frontend Developer & Software Engineer
								</span>
							</h2>
						</div>
						<p className=" text-sm text-gray-300  text-center max-w-xl mb-4">
							Mi objetivo es mejorar la <strong>experiencia del usuario</strong>{' '}
							y el <strong>desarrollo de software</strong> al diseñar soluciones
							que se adapten a las capacidades de cada usuario, asegurando que
							el producto final se implemente con éxito en su contexto. Además
							de mi trabajo, disfruto jugar al <strong>fútbol</strong> y
							escuchar música pop.
						</p>
						<div className="w-full  space-y-5 ">
							<h1 className="text-white font-semibold text-lg text-center">
								¿Donde Estudié?
							</h1>
							<div className="flex flex-col text-white">
								<div className="flex flex-col gap-4 mb-6 justify-center items-center text-center">
									<div className="flex flex-col gap-1">
										<h4 className="font-medium">Ingeniería de Software</h4>
										<div>
											<span className="text-sm font-medium text-gray-300 !leading-none">
												Universidad Nacional Mayor De San Marcos (UNMSM)
											</span>
											<p className="text-xs text-gray-300 ">
												(Egresado en el mes de agosto del 2024)
											</p>
										</div>
									</div>
									<div className="flex flex-col gap-1">
										<h4 className="font-medium">Junior Frontend Developer</h4>
										<div>
											<span className="text-sm font-medium text-gray-300 !leading-none">
												Programa One Oracle Next Education - Alura Latam
											</span>
											<p className="text-xs text-gray-300 ">
												(Graduado en el mes de agosto del 2023)
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-2 justify-center items-center">
							<h3 className="font-semibold text-lg">Skills</h3>
							<div className="flex flex-wrap gap-3">
								<Nextjs />
								<ReactJs />
								<TypeScript />
								<Javascript />
								<HtmlIcon />
								<CssIcon />
								<TailwindCss />
								<ReactQuery />
								<Prisma />
							</div>
						</div>
						<div className="flex flex-col gap-2 justify-center items-center">
							<h3 className="font-semibold text-lg">Tools</h3>
							<div className="flex flex-wrap gap-3">
								<VisualStudioCode />
								<Figma />
								<GitHub />
								<Vercel />
								<Cloudinary />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

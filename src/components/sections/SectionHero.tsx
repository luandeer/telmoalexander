import { Hand } from 'lucide-react';
import HeaderMarquee from '../personalized/carousel';
import { ScrollArrow } from '../icons/ScrollArrow';
import Link from 'next/link';
import { ArrowAbajo } from '../icons/ArrowAbajo';

export const SectionHero = () => {
	return (
		<>
			<section className=" flex flex-col w-full h-full ">
				<div className="flex flex-col justify-center gap-8 h-full lg:flex-row lg:items-center lg:gap-11 text-white">
					<div className="flex flex-col gap-5 lg:w-1/2">
						<div className="space-y-2">
							<div className="flex items-center gap-2 text-gray-300 font-medium">
								<span className="relative flex h-3 w-3">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-3 w-3 bg-amber-300"></span>
								</span>
								<span className="text-sm md:text-lg ">
									Frontend Developer & Software Engineer
								</span>
								{/* <Avatar className="mr-2">
									<AvatarImage src="/myphoto.jpg" alt="@shadcn" />
									<AvatarFallback className="animate-pulse bg-[#f2f2f2]" />
								</Avatar> */}
							</div>
							{/* <div className="h-px w-24 bg-gradient-to-r from-amber-300/50 to-transparent"></div> */}
						</div>

						<div className=" text-start text-4xl font-bold tracking-[-0.02em] drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem] text-gray-100 ">
							<div className="flex items-center justify-start gap-2 md:text-4xl font-normal">
								Hola <Hand className="animate-wave size-10 " />, soy
							</div>
							<h1>Telmo Alexander </h1>
						</div>
						<div className="flex items-center text-sm gap-2 ">
							<Link
								href="#projects"
								className="bg-white rounded-xl px-4 py-1.5 text-gray-700 flex items-center gap-2"
							>
								{' '}
								Ver Proyectos <ArrowAbajo />
							</Link>
							<Link
								href="#contact"
								className="border border-gray-100 rounded-xl px-4 py-1.5 "
							>
								{' '}
								Contacto
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-6 lg:w-1/2">
						<div className="flex flex-col gap-5 relative ">
							<p className="md:text-lg text-gray-300 leading-tight">
								Desarrollo soluciones escalables y de impacto que mejoran la
								experiencia digital, donde cada decisión en el proceso de
								desarrollo es una inversión hacia el futuro. ¡Colaboremos
								juntos!
							</p>
						</div>
						{/* <div className="flex gap-7">
							<GithubIcon />
							<LinkedinIcon />
						</div> */}
						<div className="flex flex-col gap-4">
							<div className="space-y-1">
								{/* <h1 className="font-medium text-gray-300">
									Tecnologías que uso:
								</h1> */}
								<div className="flex items-center gap-2 text-gray-300 font-medium">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
									</span>
									<span className="text-sm md:text-base ">
										Tecnologías que uso:
									</span>
									{/* <Avatar className="mr-2">
									<AvatarImage src="/myphoto.jpg" alt="@shadcn" />
									<AvatarFallback className="animate-pulse bg-[#f2f2f2]" />
								</Avatar> */}
								</div>
							</div>

							<HeaderMarquee />
						</div>
					</div>
				</div>
				<div className="flex justify-end lg:justify-center pt-40">
					<div className="flex flex-col items-center gap-4">
						<p className="w-fit -rotate-90 text-xl mb-2 text-white">Más</p>
						<ScrollArrow />
					</div>
				</div>
			</section>
		</>

		// <div className="flex items-center justify-center h-[calc(100vh-60px)]   relative w-full">
		// 	<div className=" flex items-center justify-center  bg-white">
		// 		<div className="flex flex-col md:flex-row items-center">
		// 			<div className="space-y-6">
		// 				<Avatar>
		// 					<AvatarImage src="/myphoto.jpg" alt="@shadcn" className="" />
		// 					<AvatarFallback className="animate-pulse bg-[#f2f2f2]" />
		// 				</Avatar>
		// 				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
		// 					Telmo Alexander Perez Reginaldo
		// 				</h1>
		// 				<h2 className="text-xl md:text-2xl text-blue-400 font-semibold">
		// 					Desarrollador de Software & Ingeniero de Software
		// 				</h2>
		// 			</div>
		// 			<div className="space-y-8">
		// 				<p className="text-lg text-gray-300 leading-relaxed">
		// 					Creando soluciones innovadoras y transformando desafíos complejos
		// 					en código elegante y eficiente. Especializado en desarrollo web,
		// 					aplicaciones móviles y sistemas distribuidos.
		// 				</p>
		// 				<div className="flex space-x-6">
		// 					<a
		// 						href="#"
		// 						className="text-gray-300 hover:text-white transition-colors"
		// 					>
		// 						<Github className="h-6 w-6" />
		// 						<span className="sr-only">GitHub</span>
		// 					</a>
		// 					<a
		// 						href="#"
		// 						className="text-gray-300 hover:text-white transition-colors"
		// 					>
		// 						<Linkedin className="h-6 w-6" />
		// 						<span className="sr-only">LinkedIn</span>
		// 					</a>
		// 					<a
		// 						href="#"
		// 						className="text-gray-300 hover:text-white transition-colors"
		// 					>
		// 						<Mail className="h-6 w-6" />
		// 						<span className="sr-only">Email</span>
		// 					</a>
		// 				</div>
		// 				<div className="flex flex-col sm:flex-row gap-4">
		// 					<Button
		// 						size="lg"
		// 						className="bg-blue-600 hover:bg-blue-700 text-white"
		// 					>
		// 						Ver Proyectos
		// 					</Button>
		// 					<Button
		// 						size="lg"
		// 						variant="outline"
		// 						className="text-gray-300 hover:text-white border-gray-600 hover:border-gray-300"
		// 					>
		// 						Contacto
		// 					</Button>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

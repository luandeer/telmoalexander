import { timelineDataEducation } from '@/data/datatimeline';
import { TimelineLayoutExperience } from '../personalized/TimelineLayoutExperience';

export const SectionExperience = () => {
	return (
		<section>
			<div className="text-center space-y-2 mb-12">
				<h3 className="text-3xl md:text-4xl max-md:mb-1 font-bold text-white">
					Experiencia
				</h3>
				<p className=" text-gray-300 max-w-md mx-auto leading-tight">
					Experiencia práctica en proyectos aplicando tecnología moderna,
					siempre enfocado en la calidad y mejora continua.
					{/* He aprendido y aplicado principios clave en desarrollo, diseño de
					software y calidad en cada proyecto. */}
				</p>
			</div>
			<div className="w-fit mx-auto">
				<TimelineLayoutExperience items={timelineDataEducation} />
			</div>
		</section>
	);
};

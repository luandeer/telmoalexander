import { timelineDataEducation } from '@/data/datatimeline';
import { TimelineLayoutEducation } from '../personalized/TimelineLayoutEducation';

export const SectionEducation = () => {
	return (
		<section>
			<div className="text-center space-y-2 mb-12">
				<h3 className="text-3xl md:text-4xl max-md:mb-1 font-bold text-white">
					Educación
				</h3>
				<p className=" text-gray-300 max-w-md mx-auto leading-tight">
					He aprendido y aplicado principios clave en desarrollo, diseño de
					software y calidad en cada proyecto.
				</p>
			</div>
			<div className="w-fit mx-auto">
				<TimelineLayoutEducation items={timelineDataEducation} />
			</div>
		</section>
	);
};

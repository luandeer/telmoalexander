import { Cloudinary } from '../icons/Cloudinary';
import { CssIcon } from '../icons/CssIcon';
import { Nextjs } from '../icons/Nextjs';
import { ReactJs } from '../icons/React';
import { TailwindCss } from '../icons/Tailwind';
import { TypeScript } from '../icons/TypeScript';
import { Vercel } from '../icons/Vercel';
import { ProjectCard } from '../personalized/CardProject';

const projects = [
	{
		id: 1,
		name: 'Jhigger',
		description:
			'Desarrollé un sitio web dinámico con una galería de imágenes conectada a una base de datos en Google Sheets, permitiendo una fácil actualización del contenido sin conocimientos técnicos. El proyecto destaca por su interfaz intuitiva y su capacidad para mostrar y organizar imágenes de forma fluida, optimizando la experiencia del usuario.',
		imgSrc: '/jhigger.webp',
		website: 'https://www.juegosjhigger.pe/',
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
			{
				img: Cloudinary,
				tag: 'TAILWIND',
				alt: 'Tailwind CSS tech logo',
			},
			{
				img: Vercel,
				tag: 'TAILWIND',
				alt: 'Tailwind CSS tech logo',
			},
		],
	},
	{
		id: 2,
		name: 'Catálogo Marus(Proyecto en desarrollo)',
		description:
			'Creé un catálogo virtual de productos con una base de datos centralizada, permitiendo a los usuarios explorar opciones de compra y realizar pedidos para domicilio. El sitio presenta una navegación sencilla, integrando opciones de búsqueda y detalles de cada producto para mejorar la experiencia de compra en línea.',
		imgSrc: '/marus.webp',
		website: 'https://marus.vercel.app/',
		techs: [
			{
				img: TypeScript,
				tag: 'JAVASCRIPT',
				alt: 'JavaScript tech logo',
			},
			{
				img: Nextjs,
				tag: 'NEXTJS',
				alt: 'Next.js tech logo',
			},
			{
				img: TailwindCss,
				tag: 'TAILWIND',
				alt: 'Tailwind CSS tech logo',
			},
			{
				img: Cloudinary,
				tag: 'TAILWIND',
				alt: 'Tailwind CSS tech logo',
			},
			{
				img: Vercel,
				tag: 'TAILWIND',
				alt: 'Tailwind CSS tech logo',
			},
		],
	},
	{
		id: 3,
		name: 'Sistema de Pedido',
		description:
			'Desarrollé un sistema de pedidos para la gestión interna de una pollería, que permite administrar solicitudes de consumo en mesas, para llevar y de delivery. Este sistema genera automáticamente órdenes de compra, optimizando el flujo de trabajo y facilitando la administración de pedidos. Con una interfaz intuitiva, mejora la eficiencia operativa, permitiendo un servicio más rápido y efectivo para los clientes.',
		imgSrc: '/sistemaMarus.webp',
		website: 'https://sistema-marus.vercel.app/',
		techs: [
			{
				img: TypeScript,
				tag: 'JAVASCRIPT',
				alt: 'JavaScript tech logo',
			},
			{
				img: Nextjs,
				tag: 'NEXTJS',
				alt: 'Next.js tech logo',
			},
			{
				img: TailwindCss,
				tag: 'TAILWIND',
				alt: 'Tailwind CSS tech logo',
			},
			{
				img: Cloudinary,
				tag: 'TAILWIND',
				alt: 'Tailwind CSS tech logo',
			},
		],
	},
	{
		id: 4,
		name: 'Portafolio v1',
		description: 'Version anterior de portafolio.',
		imgSrc: '/portafolio1.webp',
		code: 'https://github.com/luandeer/telmodev',
		website: 'https://telmodev.vercel.app/',
		techs: [
			{
				img: TypeScript,
				tag: 'JAVASCRIPT',
				alt: 'JavaScript tech logo',
			},
			{
				img: Nextjs,
				tag: 'NEXTJS',
				alt: 'Next.js tech logo',
			},
			{
				img: TailwindCss,
				tag: 'TAILWIND',
				alt: 'Tailwind CSS tech logo',
			},
		],
	},
];

export function SectionProjects() {
	return (
		<section
			id="projects"
			className="flex flex-col gap-7 lg:gap-11 pt-10 sm:pt-32"
		>
			<div className="text-center space-y-2">
				<h3 className="text-3xl md:text-4xl max-md:mb-1 font-bold text-white">
					Proyectos
				</h3>
				<p className=" text-gray-300 max-w-md mx-auto leading-tight">
					Explora mis proyectos, donde aplico tecnología moderna y buenas
					prácticas de desarrollo.
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

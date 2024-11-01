import Marquee from '../ui/marquee';
import { Figma } from '../icons/Figma';
import { ComponentType } from 'react';
import { TypeScript } from '../icons/TypeScript';
import { Nextjs } from '../icons/Nextjs';
import { GitHub } from '../icons/GitHub';
import { ReactQuery } from '../icons/ReactQuery';
import { TailwindCss } from '../icons/Tailwind';
import { Vercel } from '../icons/Vercel';
import { VisualStudioCode } from '../icons/VisualStudioCode';
import { ReactJs } from '../icons/React';
const firstRow = [
	{
		username: 'ReactJs',
		icon: ReactJs,
	},
	{
		username: 'Figma',
		icon: Figma,
	},
	{
		username: 'Typescript',
		icon: TypeScript,
	},
	{
		username: 'Next js',
		icon: Nextjs,
	},
	{
		username: 'GitHub',
		icon: GitHub,
	},
	{
		username: 'ReactQuery',
		icon: ReactQuery,
	},
	{
		username: 'Tailwind Css',
		icon: TailwindCss,
	},
	{
		username: 'Vercel',
		icon: Vercel,
	},
	{
		username: 'Visual Studio Code',
		icon: VisualStudioCode,
	},
];

function ReviewCard({
	username,
	icon,
}: {
	username: string;
	icon: ComponentType;
	url?: string;
}) {
	const Icon = icon;
	return (
		<div className="w-fit  overflow-hidden rounded-xl bg-gray-900 px-6 py-3 shadow">
			<div className="flex flex-row items-center gap-2">
				<Icon />
				<p className="text-sm font-medium dark:text-white/90">{username}</p>
			</div>
		</div>
	);
}

function HeaderMarquee() {
	return (
		<div className="relative  flex size-full w-full flex-col items-center justify-center overflow-hidden">
			<Marquee pauseOnHover className="w-full [--duration:25s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>

			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-neutral-950 "></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-neutral-950 "></div>
		</div>
	);
}

export default HeaderMarquee;

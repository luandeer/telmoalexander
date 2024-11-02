/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import { TechTag } from './TechTag';
import { GithubIcon, LinkIcon } from 'lucide-react';

export function ProjectCard({
	name,
	description,
	imgSrc,
	code,
	website,
	techs,
}: any) {
	return (
		<article className="p-2.5 md:p-6 flex flex-col lg:flex-row gap-2.5 flex-nowrap  rounded-xl border border-neutral-500/20 shadow-[0_0_6px_0_black] text-white">
			<div className="flex flex-col gap-1.5 md:gap-2 lg:w-1/2 max-lg:order-2">
				<h4 className=" font-medium text-2xl ">{name}</h4>
				<p className="text-xs  leading-tight  text-gray-300">{description}</p>
				<div className="flex flex-col gap-3 ">
					<ul className="flex gap-2 md:gap-3 max-lg:flex-wrap mb-4">
						{techs.map(({ img, tag, alt }: any, index: any) => {
							return <TechTag key={index} img={img} tag={tag} alt={alt} />;
						})}
					</ul>
					<div className="flex gap-2 md:gap-3">
						<Link
							href={website}
							target="_blank"
							className="bg-white rounded-xl px-3 py-1.5 text-gray-700 flex items-center gap-2 text-xs"
						>
							<LinkIcon className="size-4" /> Ver proyecto
						</Link>

						{code && (
							<Link
								href={code}
								target="_blank"
								className="border border-gray-100 rounded-xl px-3 py-1.5 text-gray-300 flex items-center gap-2 text-xs"
							>
								<GithubIcon className="size-4" /> GitHub
							</Link>
						)}
					</div>
				</div>
			</div>
			<div className="relative rounded-xl  overflow-hidden  border group border-neutral-500/30 shadow-[0_0_4px_0_black] cursor-pointer aspect-video self-start lg:max-w-xs ">
				<a href={website} target="_blank">
					<div className="relative h-full w-full bg-slate-950   overflow-hidden ">
						{/* <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
						<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> */}

						<img
							src={imgSrc}
							className=" relative z-20  rounded-xl w-full h-full object-cover hover:scale-105 transform transition-all duration-300"
							alt="preview of a web project"
						/>
					</div>
				</a>
			</div>
		</article>
	);
}

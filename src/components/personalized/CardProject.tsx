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
				<p className="text-sm max-lg:mb-3 leading-tight mb-4">{description}</p>
				<div className="flex flex-col gap-3 mt-auto ">
					<div className="flex gap-2 md:gap-3">
						<Link
							href={website}
							className="bg-white rounded-xl px-4 py-1.5 text-gray-700 flex items-center gap-2 text-sm"
						>
							<LinkIcon /> Website
						</Link>

						<Link
							href={code}
							className="border border-gray-100 rounded-xl px-4 py-1.5 text-gray-300 flex items-center gap-2 text-sm"
						>
							<GithubIcon /> GitHub
						</Link>
					</div>
					<ul className="flex gap-2 md:gap-3 max-lg:flex-wrap">
						{techs.map(({ img, tag, alt }: any, index: any) => {
							return <TechTag key={index} img={img} tag={tag} alt={alt} />;
						})}
					</ul>
				</div>
			</div>
			<div className="relative rounded-xl overflow-hidden  border group border-neutral-500/30 shadow-[0_0_4px_0_black] cursor-pointer  lg:w-1/2 ">
				<a href={website} target="_blank">
					<div className="relative h-full w-full bg-slate-950 ">
						<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
						<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
						{/* <img
						src="/imgs/projectBackground.webp"
						className="absolute w-full h-full z-0 "
						alt="Violet and pink background gradient"
            /> */}
						<img
							src={imgSrc}
							className=" relative z-20 translate-x-[10%] translate-y-[10%] group-hover:translate-x-[1px] group-hover:translate-y-0 transition-all  duration-300 ease-in-out scale-90 group-hover:scale-100"
							alt="preview of a web project"
						/>
					</div>
				</a>
			</div>
		</article>
	);
}

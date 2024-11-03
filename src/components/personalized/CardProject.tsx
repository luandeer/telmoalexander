/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { TechTag } from './TechTag';

export function ProjectCard({
	name,
	description,
	imgSrc,
	website,
	techs,
}: any) {
	return (
		<article className="p-2.5 md:p-6 flex flex-col lg:flex-row gap-2.5 flex-nowrap  rounded-xl border border-neutral-500/20 shadow-[0_0_6px_0_black] text-white ">
			<div className="flex flex-col gap-1.5 md:gap-2 lg:w-1/2 max-lg:order-2">
				<h4 className=" font-medium text-2xl leading-tight text-gray-200">
					{name}
				</h4>
				<p className="text-sm  leading-tight  text-gray-400">{description}</p>
				<div className="flex flex-col gap-3 ">
					<ul className="flex flex-wrap  gap-1.5 items-start ">
						{techs.map(({ img, tag, alt }: any, index: any) => {
							return <TechTag key={index} img={img} tag={tag} alt={alt} />;
						})}
					</ul>
				</div>
			</div>
			<Link
				href={website}
				target="_blank"
				className="relative rounded-xl   overflow-hidden  border group border-neutral-500/30 shadow-[0_0_4px_0_black] cursor-pointer aspect-video self-start lg:max-w-xs "
			>
				<div className="relative h-full w-full bg-slate-950   overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out ">
					{/* <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
						<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div> */}

					<img
						src={imgSrc}
						className=" relative   rounded-xl w-full h-full object-cover "
						alt="preview of a web project"
					/>
					<div className="absolute inset-0 bg-black/60 rounded-xl  py-1.5 text-gray-50   flex items-center justify-center gap-2 text-sm  z-40">
						<ExternalLink className="size-4" />
						Ir a proyecto
						{/* {code && (
							<Link
								href={code}
								target="_blank"
								className="underline underline-offset-4 rounded-xl  py-1.5 text-gray-50 flex items-center gap-2 text-sm"
							>
								<GithubIcon className="size-4" /> GitHub
							</Link>
						)} */}
					</div>
				</div>
			</Link>
		</article>
	);
}

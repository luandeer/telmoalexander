/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useRef } from 'react';

interface TechTagProps {
	img: any;
	tag?: string;
	alt?: string;
}

export function TechTag({ img: Icon }: TechTagProps) {
	const liRef = useRef<HTMLLIElement | null>(null);

	return (
		<li ref={liRef} className=" mt-2">
			<span className="w-full h-full">
				<Icon />
			</span>

			{/* <p className=" text-[11px] lg:text-xs">{tag}</p> */}
		</li>
	);
}

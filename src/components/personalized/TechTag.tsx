/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useRef } from 'react';
import { Badge } from '../ui/badge';

interface TechTagProps {
	img?: any;
	tag?: string;
	alt?: string;
}

export function TechTag({ tag }: TechTagProps) {
	const liRef = useRef<HTMLLIElement | null>(null);

	return (
		<li ref={liRef}>
			<Badge className=" text-gray-200 bg-blue-800 hover:bg-blue-800">
				{tag}
			</Badge>

			{/* <p className=" text-[11px] lg:text-xs">{tag}</p> */}
		</li>
	);
}

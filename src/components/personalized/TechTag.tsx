/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useRef, useState } from 'react';

interface TechTagProps {
	img: any;
	tag: string;
	alt?: string;
}

export function TechTag({ img: Icon, tag }: TechTagProps) {
	const liRef = useRef<HTMLLIElement | null>(null);
	const [width, setWidth] = useState<number | undefined>();
	const [isHover, setIsHover] = useState(false);

	useEffect(() => {
		if (liRef.current) {
			const newWidth = liRef.current.scrollWidth + 5;
			setWidth(newWidth);
		}
	}, [liRef.current?.scrollWidth]);

	return (
		<li
			ref={liRef}
			className=" overflow-hidden transition-all p-2  flex items-center gap-2.5"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			style={{ width: isHover && width ? `${width}px` : '48px' }}
		>
			<span className="w-full h-full">
				<Icon />
			</span>
			{/* <Image
				src={img}
				alt={alt}
				className="rounded-full w-[18px] lg:w-[20px]"
				width={30}
				height={30}
			/> */}
			<p className=" text-[11px] lg:text-xs">{tag}</p>
		</li>
	);
}

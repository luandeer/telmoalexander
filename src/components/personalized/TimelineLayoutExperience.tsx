'use client';

import { TimelineElement } from '@/interfaces/timeline';
import React from 'react';
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDescription,
	TimelineHeader,
	TimelineIcon,
	TimelineItem,
	TimelineTime,
	TimelineTitle,
} from '../ui/timeline';

interface TimelineLayoutProps {
	items: TimelineElement[]; // Replace any[] with the actual type of items.
}
export const TimelineLayoutExperience = ({ items }: TimelineLayoutProps) => {
	return (
		<Timeline>
			<TimelineItem>
				<TimelineConnector className="bg-white" />
				<TimelineHeader>
					<TimelineTime className="text-white">{items[0].date}</TimelineTime>
					<TimelineIcon className="bg-white" />
					<TimelineTitle className="text-white leading-normal">
						{items[0].title}
					</TimelineTitle>
				</TimelineHeader>
				<TimelineContent>
					<TimelineDescription className="mb-6">
						{items[0].description}
					</TimelineDescription>
					<h2 className="text-white text-sm">Stack:</h2>
					<p className="text-gray-300 text-sm">{items[0].stack}</p>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineConnector className="bg-white" />
				<TimelineHeader>
					<TimelineTime className="text-white">{items[1].date}</TimelineTime>
					<TimelineIcon className="bg-white" />
					<TimelineTitle className="text-white leading-normal">
						{items[1].title}
					</TimelineTitle>
				</TimelineHeader>
				<TimelineContent>
					<TimelineDescription className="mb-6">
						{items[1].description}
					</TimelineDescription>
					<h2 className="text-white text-sm">Stack:</h2>
					<p className="text-gray-300 text-sm">{items[1].stack}</p>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineHeader>
					<TimelineTime className="text-white">{items[2].date}</TimelineTime>
					<TimelineIcon className="bg-white" />
					<TimelineTitle className="text-white leading-normal">
						{items[2].title}
					</TimelineTitle>
				</TimelineHeader>
				<TimelineContent>
					<TimelineDescription className="mb-6">
						{items[2].description}
					</TimelineDescription>
					<h2 className="text-white text-sm">Stack:</h2>
					<p className="text-gray-300 text-sm">{items[2].stack}</p>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

'use client';

import { TimelineEducation } from '@/interfaces/timeline';
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
	items: TimelineEducation[]; // Replace any[] with the actual type of items.
}
export const TimelineLayoutEducation = ({ items }: TimelineLayoutProps) => {
	return (
		<Timeline>
			<TimelineItem>
				<TimelineConnector className="bg-white" />
				<TimelineHeader>
					<TimelineTime className="text-white">{items[0].date}</TimelineTime>
					<TimelineIcon className="bg-white" />
					<TimelineTitle className="text-white">{items[0].title}</TimelineTitle>
				</TimelineHeader>
				<TimelineContent>
					<TimelineDescription>{items[0].description}</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineConnector className="bg-white" />
				<TimelineHeader>
					<TimelineTime className="text-white">{items[1].date}</TimelineTime>
					<TimelineIcon className="bg-white" />
					<TimelineTitle className="text-white">{items[1].title}</TimelineTitle>
				</TimelineHeader>
				<TimelineContent>
					<TimelineDescription>{items[1].description}</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineHeader>
					<TimelineTime className="text-white">{items[2].date}</TimelineTime>
					<TimelineIcon className="bg-white" />
					<TimelineTitle className="text-white">{items[2].title}</TimelineTitle>
				</TimelineHeader>
				<TimelineContent>
					<TimelineDescription>{items[2].description}</TimelineDescription>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

import { DownloadCv } from './Download';

export const Header = () => {
	return (
		<div className="flex items-center justify-between  text-white pt-8 ">
			<div className="flex items-center  text-xl leading-none gap-0.5 ">
				Telmo A. Perez R.{' '}
				{/* <div className="w-1.5 h-1.5 rounded-full bg-white self-end" /> */}
			</div>
			<DownloadCv />
		</div>
	);
};

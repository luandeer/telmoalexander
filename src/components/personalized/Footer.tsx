import { GithubIcon, LinkedinIcon } from 'lucide-react';

export function Footer() {
	return (
		<footer className="py-6 md:py-9 bg-gradient-to-t from-neutral-900/70 text-white to-transparent px-2.5 ">
			<div className="container flex items-center justify-between text-sm sm:text-base">
				<div className=" flex w-full flex-col h-full justify-center gap-2 ">
					<ul className="flex gap-4">
						<li>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/telmoalexander/"
							>
								<LinkedinIcon
									className={`size-6 transition-colors duration-300 text-customGray hover:text-purple`}
								/>{' '}
							</a>
						</li>
						<li>
							<a target="_blank" href="https://github.com/luandeer">
								<GithubIcon
									className={`size-6 transition-colors duration-300 text-customGray hover:text-purple`}
								/>{' '}
							</a>
						</li>
					</ul>
					<span className="text-customGray max-sm:text-sm">
						Hecho con ❤️. 2024 Telmo A. Perez R.
					</span>
				</div>
				<p className="text-end ">
					Desarrollado con <strong>Next js,</strong> <strong>tailwind </strong>{' '}
					y desplegado en <strong>Vercel</strong>
				</p>
			</div>
		</footer>
	);
}

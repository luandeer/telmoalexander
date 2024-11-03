import { LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export function SectionContact() {
	return (
		<section id="contact">
			<div className="text-center flex flex-col gap-5 rounded-xl border border-neutral-500/20 shadow-[0_0_6px_0_black] py-10 px-4 sm:px-1.5 text-gray-300 ">
				<h3 className="text-2xl md:text-4xl font-bold !leading-snug">
					¡Construyamos algo increíble juntos!
				</h3>
				<div className="text-sm sm:text-base">
					<p className="text-customGray">
						¡Hablemos!, Estoy a un mensaje de distancia.
					</p>

					<p className="text-customGray">
						Siempre abierto a nuevas oportunidades emocionantes.
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-center gap-2 sm:gap-4 justify-center font-medium">
					<Link
						href="https://mail.google.com/mail/?view=cm&fs=1&to=alexanderperezreginaldo@gmail.com"
						className="flex items-center gap-2 underline"
						target="_blank"
					>
						<MailIcon /> alexanderperezreginaldo@gmail.com
					</Link>

					<Link
						href="https://www.linkedin.com/in/telmoalexander/"
						className="flex items-center gap-2 underline"
						target="_blank"
					>
						<LinkedinIcon /> telmoalexander
					</Link>
				</div>
			</div>
		</section>
	);
}

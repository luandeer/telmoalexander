import { LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

export function SectionContact() {
	const { t } = useTranslation();
	return (
		<section id="contact">
			<div className="text-center flex flex-col gap-5 rounded-xl border border-neutral-500/20 shadow-[0_0_6px_0_black] py-10 px-1.5 text-gray-300 ">
				<h3 className="text-3xl md:text-4xl font-bold">
					{t('¡Construyamos algo increíble juntos!')}
				</h3>
				<div>
					<p className="text-customGray">
						{t('¡Hablemos!, Estoy a un mensaje de distancia.')}{' '}
					</p>

					<p className="text-customGray">
						{t('Siempre abierto a nuevas oportunidades emocionantes.')}
					</p>
				</div>
				<div className="flex gap-2.5 md:gap-4 m-auto font-semibold">
					<Link
						href="mailto:benjamin.federico6@Gmail.com"
						className="flex items-center gap-2"
					>
						<MailIcon /> Mail
					</Link>

					<Link
						href="https://www.linkedin.com/in/federicobenjamin/"
						className="flex items-center gap-2"
					>
						<LinkedinIcon /> Linkedin
					</Link>
				</div>
			</div>
		</section>
	);
}

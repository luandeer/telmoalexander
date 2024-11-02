'use client';
import { Download } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'sonner';

export const DownloadCv = () => {
	return (
		<Link
			href="/cv.pdf"
			download
			className="flex   max-w-fit items-center justify-center gap-1 rounded-xl border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
			target="_blank"
			onClick={() => toast.success('Se descargó exitosamente')}
		>
			<Download size="20" />
			<span className="hidden md:block">Descargar </span>CV
		</Link>
	);
};

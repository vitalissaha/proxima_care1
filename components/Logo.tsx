'use client';

import { useState } from 'react';

interface LogoProps {
	width?: number;
	height?: number;
	className?: string;
	priority?: boolean;
	alt?: string;
}

export default function Logo({ 
	width = 100, 
	height = 100, 
	className = '', 
	priority = false,
	alt = 'Proxima Care - L\'art de prendre soin'
}: LogoProps) {
	const [hasError, setHasError] = useState(false);

	// Si erreur, afficher le placeholder SVG
	if (hasError) {
		return (
			<div className={className} style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<svg 
					width="100%" 
					height="100%" 
					viewBox="0 0 200 200" 
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="xMidYMid meet"
				>
					<circle cx="100" cy="100" r="90" fill="none" stroke="#B56533" strokeWidth="2" />
					<path d="M 70 120 Q 65 110 70 100 Q 75 90 80 100 Q 85 110 80 120" fill="none" stroke="#B56533" strokeWidth="2.5" strokeLinecap="round" />
					<path d="M 130 120 Q 125 110 130 100 Q 135 90 140 100 Q 145 110 140 120" fill="none" stroke="#B56533" strokeWidth="2.5" strokeLinecap="round" />
					<ellipse cx="100" cy="75" rx="8" ry="12" fill="#A3B18A" />
					<path d="M 100 63 L 100 87" stroke="#8A9A7A" strokeWidth="1.5" />
				</svg>
			</div>
		);
	}

	// Essayer de charger l'image avec une balise img standard pour éviter les erreurs Next.js
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src="/log.jpeg"
			alt={alt}
			width={width}
			height={height}
			className={className}
			onError={() => setHasError(true)}
			style={{ objectFit: 'contain' }}
		/>
	);
}


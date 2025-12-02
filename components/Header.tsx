'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
	const [open, setOpen] = useState(false);
	
	// Fermer le menu quand on clique sur un lien
	useEffect(() => {
		if (open) {
			const handleClick = (e: MouseEvent) => {
				const target = e.target as HTMLElement;
				if (target.closest('a[href^="#"]')) {
					setOpen(false);
				}
			};
			document.addEventListener('click', handleClick);
			return () => document.removeEventListener('click', handleClick);
		}
	}, [open]);

	return (
		<header className="sticky top-0 z-50 border-b border-[rgba(31,42,36,0.08)] bg-white/95 backdrop-blur-md">
			<div className="container relative flex items-center justify-between py-3 sm:py-4">
				<a href="#accueil" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity" onClick={() => setOpen(false)}>
					<div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-xl shadow-spa bg-white p-1">
						<Logo width={48} height={48} className="h-full w-full object-contain" priority alt="Proxima Care" />
					</div>
					<div className="hidden sm:grid">
						<strong className="text-sm sm:text-base leading-tight text-ink/90">Proxima Care</strong>
						<span className="text-[10px] sm:text-xs text-ink/60 -mt-0.5 font-serif italic">L'art de prendre soin</span>
					</div>
				</a>
				<nav className="flex items-center gap-2 sm:gap-3">
					<button
						onClick={(e) => {
							e.stopPropagation();
							setOpen(v => !v);
						}}
						className="inline-flex lg:hidden rounded-lg border border-[rgba(31,42,36,0.22)] px-3 py-1.5 text-sm hover:bg-mint transition-colors"
						aria-expanded={open}
						aria-controls="menu"
						aria-label="Menu"
					>
						{open ? 'Fermer' : 'Menu'}
					</button>
					<ul 
						id="menu" 
						className={`${
							open 
								? 'fixed left-4 right-4 top-16 flex flex-col gap-1 rounded-xl border border-[rgba(31,42,36,0.08)] bg-white p-3 shadow-spa z-50' 
								: 'hidden'
						} lg:flex lg:static lg:flex-row lg:items-center lg:gap-2 xl:gap-3 lg:border-0 lg:shadow-none lg:p-0 lg:bg-transparent`}
					>
						<li><a className="block rounded-lg px-3 py-2 text-sm lg:text-base hover:bg-mint transition-colors text-center lg:text-left" href="#accueil" onClick={() => setOpen(false)}>Accueil</a></li>
						<li><a className="block rounded-lg px-3 py-2 text-sm lg:text-base hover:bg-mint transition-colors text-center lg:text-left" href="#services" onClick={() => setOpen(false)}>Services</a></li>
						<li><a className="block rounded-lg px-3 py-2 text-sm lg:text-base hover:bg-mint transition-colors text-center lg:text-left" href="#approche" onClick={() => setOpen(false)}>Approche</a></li>
						<li><a className="block rounded-lg px-3 py-2 text-sm lg:text-base hover:bg-mint transition-colors text-center lg:text-left" href="#valeurs" onClick={() => setOpen(false)}>Valeurs</a></li>
						<li><a className="block rounded-lg px-3 py-2 text-sm lg:text-base hover:bg-mint transition-colors text-center lg:text-left" href="#vision" onClick={() => setOpen(false)}>Vision</a></li>
						<li><a className="block rounded-lg px-3 py-2 text-sm lg:text-base hover:bg-mint transition-colors text-center lg:text-left" href="#avis" onClick={() => setOpen(false)}>Avis</a></li>
						<li><a className="block rounded-lg px-3 py-2 text-sm lg:text-base hover:bg-mint transition-colors text-center lg:text-left" href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
					</ul>
				</nav>
				<a className="btn btn-primary hidden lg:inline-flex text-sm xl:text-base" href={"https://wa.me/237693185235?text=" + encodeURIComponent('Bonjour, je souhaite prendre rendez-vous avec Proxima Care')} target="_blank" rel="noreferrer">Prendre rendez-vous</a>
				{open && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setOpen(false)} aria-hidden="true" />}
			</div>
		</header>
	);
}



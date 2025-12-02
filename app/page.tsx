"use client";

import ProximaCare from '@/components/ProximaCare';
import { useCallback, useRef, useState } from 'react';

export default function HomePage() {
  return <ProximaCare />;
}

function ServiceCard({ title, desc, icon, index }: { title: string; desc: string; icon: React.ReactNode; index: number }) {
	const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
	const rafRef = useRef<number | null>(null);

	const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		if (rafRef.current) {
			cancelAnimationFrame(rafRef.current);
		}

		rafRef.current = requestAnimationFrame(() => {
			const rect = e.currentTarget.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			setMousePosition({ x, y });
		});
	}, []);

	const handleMouseLeave = useCallback(() => {
		if (rafRef.current) {
			cancelAnimationFrame(rafRef.current);
		}
		setMousePosition({ x: 50, y: 50 });
	}, []);

	return (
		<div 
			className="service-card rounded-xl border border-[rgba(31,42,36,0.08)] bg-mint p-4 sm:p-5 shadow-spa h-full transition-all duration-300 ease-out cursor-pointer group relative overflow-hidden"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				'--mouse-x': `${mousePosition.x}px`,
				'--mouse-y': `${mousePosition.y}px`
			} as React.CSSProperties}
		>
			<div className={`service-icon-wrapper service-icon-${index} mb-3 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl border border-[rgba(31,42,36,0.08)] bg-white text-copper flex-shrink-0 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:bg-copper group-hover:text-white group-hover:border-copper group-hover:shadow-lg`}>
				<div className="service-icon transition-transform duration-300 ease-out group-hover:scale-125">
					{icon}
				</div>
			</div>
			<h3 className="service-title mb-2 text-base sm:text-lg font-serif transition-colors duration-300 group-hover:text-copper">{title}</h3>
			<p className="service-desc text-sm sm:text-base text-ink/75 leading-relaxed transition-all duration-300 group-hover:text-ink/90">{desc}</p>
		</div>
	);
}

function ValueCard({ title, icon }: { title: string; icon: React.ReactNode }) {
	return (
		<div className="rounded-xl border border-[rgba(31,42,36,0.08)] bg-mint p-4 sm:p-5 shadow-spa h-full transition-all duration-200 hover:shadow-[0_12px_28px_rgba(31,42,36,0.12)] hover:border-[rgba(163,177,138,0.2)]">
			<div className="mb-3 sm:mb-4 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl border border-[rgba(31,42,36,0.08)] bg-white text-copper mx-auto transition-transform duration-200 hover:scale-105">
				{icon}
        </div>
			<h3 className="text-center font-serif text-sm sm:text-base">{title}</h3>
    </div>
  );
}

function IconWave() {
	return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"><path d="M5 12c2.5-4 6.5-6 12-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M3 17c3-3 7-4 12-4 2 0 3.5.5 6 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function IconCheck() {
	return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"><path d="M5 19l3-7 4 3 7-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IconPlus() {
	return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"><path d="M12 3v18M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function IconTick() {
	return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"><path d="M6 12l3 3 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function IconHeart() {
	return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"><path d="M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}
function IconLock() {
	return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"><path d="M5 7h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5"/><path d="M9 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5"/></svg>;
}
function IconCircle() {
	return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>;
}

import Logo from './Logo';

export default function Footer() {
	return (
		<footer id="contact" className="mt-10 border-t border-[rgba(31,42,36,0.08)] bg-white">
			<div className="container grid gap-6 sm:gap-8 py-8 sm:py-10 sm:grid-cols-2 lg:grid-cols-3">
				<div className="sm:col-span-2 lg:col-span-1">
					<div className="mb-4 flex items-center gap-3">
						<Logo width={60} height={60} className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl shadow-spa object-contain bg-white p-1 flex-shrink-0" alt="Proxima Care" />
						<div className="grid min-w-0">
							<strong className="text-sm sm:text-base text-ink/90">Proxima Care</strong>
							<span className="text-[10px] sm:text-xs text-copper/80 font-serif italic">L'art de prendre soin</span>
						</div>
					</div>
					<p className="text-ink/70 text-xs sm:text-sm leading-relaxed">Centre de soins et de bien-être holistique dédié à la restauration de l'équilibre du corps et de l'esprit.</p>
				</div>
				<div>
					<h4 className="font-semibold text-sm sm:text-base mb-3">Contact</h4>
					<ul className="grid gap-2 text-sm sm:text-base">
						<li><a className="hover:underline break-all" href="mailto:proximacare1er@gmail.com">proximacare1er@gmail.com</a></li>
						<li><a className="hover:underline" href="tel:+237693185235">+237 693185235</a></li>
						<li><span className="text-ink/70">Cameroun</span></li>
					</ul>
					<div className="mt-4">
						<a className="btn btn-primary w-full sm:w-auto text-sm sm:text-base text-center" href={"https://wa.me/237693185235?text=" + encodeURIComponent('Bonjour, je souhaite prendre rendez-vous avec Proxima Care')} target="_blank" rel="noreferrer">Réserver une séance</a>
					</div>
				</div>
				<div>
					<h4 className="font-semibold text-sm sm:text-base mb-3">Navigation</h4>
					<ul className="grid gap-2 text-sm sm:text-base">
						<li><a className="hover:underline" href="#accueil">Accueil</a></li>
						<li><a className="hover:underline" href="#services">Services</a></li>
						<li><a className="hover:underline" href="#approche">Approche</a></li>
						<li><a className="hover:underline" href="#valeurs">Valeurs</a></li>
						<li><a className="hover:underline" href="#vision">Vision</a></li>
						<li><a className="hover:underline" href="#avis">Avis</a></li>
					</ul>
				</div>
			</div>
			<div className="border-t border-[rgba(31,42,36,0.08)]">
				<p className="container py-4 text-center text-xs sm:text-sm text-ink/60">© {new Date().getFullYear()} Proxima Care. Tous droits réservés.</p>
			</div>
		</footer>
	);
}



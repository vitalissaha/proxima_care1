'use client';

import { useEffect, useMemo, useState } from 'react';
import StarRating from './StarRating';
import { addReview, readReviews, type Review } from '@/lib/reviews';

export default function Reviews() {
	const [reviews, setReviews] = useState<Review[]>([]);
	const [name, setName] = useState('');
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');
    

	useEffect(() => {
		setReviews(readReviews());
	}, []);

	const average = useMemo(() => {
		if (!reviews.length) return 0;
		return reviews.reduce((a, r) => a + (Number(r.rating) || 0), 0) / reviews.length;
	}, [reviews]);

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!rating || rating < 1 || rating > 5) {
			alert('Veuillez sélectionner une note entre 1 et 5 étoiles.');
			return;
		}
		if (!comment || comment.trim().length < 5) {
			alert('Veuillez saisir un commentaire (au moins 5 caractères).');
			return;
		}
		const entry: Review = {
			name: name?.trim() || 'Anonyme',
			rating,
			comment: comment.trim(),
			date: new Date().toISOString()
		};
		const next = addReview(entry);
		setReviews(next);
		setName('');
		setRating(0);
		setComment('');
	}

    

	return (
		<div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
			<form onSubmit={onSubmit} className="rounded-xl border border-[rgba(31,42,36,0.08)] bg-white p-4 sm:p-5 shadow-spa order-2 lg:order-1">
				<div className="grid gap-3 sm:gap-4">
					<div className="grid gap-1.5">
						<label className="text-sm font-semibold" htmlFor="name">Nom (ou anonyme)</label>
						<input id="name" className="w-full rounded-lg border border-[rgba(31,42,36,0.08)] px-3 py-2 text-sm sm:text-base outline-none focus:border-sage focus:ring-2 focus:ring-[rgba(163,177,138,0.25)]" value={name} onChange={e => setName(e.target.value)} placeholder="Ex. Aïcha, Anonyme…" />
					</div>
					<div className="grid gap-1.5">
						<label className="text-sm font-semibold">Note</label>
						<StarRating value={rating} onChange={setRating} />
					</div>
					<div className="grid gap-1.5">
						<label className="text-sm font-semibold" htmlFor="comment">Commentaire / témoignage</label>
						<textarea id="comment" rows={4} className="w-full rounded-lg border border-[rgba(31,42,36,0.08)] px-3 py-2 text-sm sm:text-base outline-none focus:border-sage focus:ring-2 focus:ring-[rgba(163,177,138,0.25)] resize-y" value={comment} onChange={e => setComment(e.target.value)} placeholder="Décrivez votre expérience…" />
					</div>
					<div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
						<button type="submit" className="btn btn-primary w-full sm:w-auto text-sm sm:text-base text-center">Publier l'avis</button>
					</div>
					<p className="text-xs text-ink/60 mt-1">Vos avis sont stockés sur votre appareil (localStorage) pour la démonstration.</p>
				</div>
			</form>

			<div className="order-1 lg:order-2">
				<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 py-3 mb-4">
					<strong className="text-base sm:text-lg">{reviews.length ? `${average.toFixed(1)} / 5 ${'★'.repeat(Math.round(average))}` : '—'}</strong>
					<span className="text-sm sm:text-base text-ink/60">{reviews.length ? `(${reviews.length} avis)` : ''}</span>
				</div>
				<ul className="grid gap-3 sm:gap-4">
					{reviews.length === 0 && <li className="rounded-lg border border-[rgba(31,42,36,0.08)] bg-white p-4 text-center text-sm sm:text-base text-ink/70">Aucun avis pour le moment. Partagez le vôtre !</li>}
					{reviews.map((r, i) => (
						<li key={i} className="rounded-xl border border-[rgba(31,42,36,0.08)] bg-white p-4 sm:p-5">
							<div className="mb-2 sm:mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
								<div className="flex flex-col sm:flex-row sm:items-center gap-1">
									<span className="font-semibold text-sm sm:text-base">{r.name || 'Anonyme'}</span>
									<span className="text-xs text-ink/60 hidden sm:inline"> · </span>
									<span className="text-xs text-ink/60">{new Date(r.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
								</div>
								<div className="text-copper text-sm sm:text-base flex-shrink-0" aria-label={`Note ${r.rating} sur 5`}>
									{'★'.repeat(Math.max(1, Math.min(5, Number(r.rating) || 0)))}{'☆'.repeat(5 - Math.max(1, Math.min(5, Number(r.rating) || 0)))}
								</div>
							</div>
							<p className="text-sm sm:text-base text-ink/90 leading-relaxed">{r.comment}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}




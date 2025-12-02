// Utilitaires DOM
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Données & stockage
const STORAGE_KEY = 'proximaReviews';
const demoSeed = [
	{
		name: 'Anonyme',
		rating: 5,
		comment: 'Accueil chaleureux et massage d’une grande qualité. Je me sens rééquilibrée.',
		date: '2025-08-10T10:00:00.000Z'
	},
	{
		name: 'Yann',
		rating: 4,
		comment: 'Approche très professionnelle. Mon dos va beaucoup mieux, merci !',
		date: '2025-09-14T12:30:00.000Z'
	},
	{
		name: 'Aïcha',
		rating: 5,
		comment: 'Un moment de douceur. J’ai adoré l’accompagnement postural personnalisé.',
		date: '2025-10-02T16:15:00.000Z'
	}
];

function readReviews() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [...demoSeed];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [...demoSeed];
		return parsed;
	} catch {
		return [...demoSeed];
	}
}

function writeReviews(list) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function addReview(entry) {
	const list = readReviews();
	list.unshift(entry);
	writeReviews(list);
	return list;
}

// Rendu des avis
function formatDate(iso) {
	try {
		const d = new Date(iso);
		return d.toLocaleDateString('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	} catch {
		return iso;
	}
}

function stars(n) {
	const clamped = Math.max(1, Math.min(5, Number(n) || 0));
	return '★'.repeat(clamped) + '☆'.repeat(5 - clamped);
}

function renderReviews() {
	const list = readReviews();
	const listEl = $('#reviews-list');
	const avgEl = $('#avg-rating');
	const countEl = $('#reviews-count');
	if (!listEl || !avgEl || !countEl) return;

	listEl.innerHTML = '';

	if (list.length === 0) {
		listEl.innerHTML = '<li>Aucun avis pour le moment. Partagez le vôtre !</li>';
		avgEl.textContent = '—';
		countEl.textContent = '';
		return;
	}

	const avg = list.reduce((a, r) => a + (Number(r.rating) || 0), 0) / list.length;
	avgEl.textContent = `${avg.toFixed(1)} / 5 ${'★'.repeat(Math.round(avg))}`;
	countEl.textContent = `(${list.length} avis)`;

	for (const r of list) {
		const li = document.createElement('li');
		li.innerHTML = `
			<div class="review-head">
				<div>
					<span class="review-author">${escapeHtml(r.name || 'Anonyme')}</span>
					<span class="review-date"> · ${formatDate(r.date || new Date().toISOString())}</span>
				</div>
				<div class="review-rating" aria-label="Note ${r.rating} sur 5">${stars(r.rating)}</div>
			</div>
			<p class="review-comment">${escapeHtml(r.comment || '')}</p>
		`;
		listEl.appendChild(li);
	}
}

function escapeHtml(str) {
	return String(str)
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

// Formulaire d'avis
function setupReviewForm() {
	const form = $('#review-form');
	if (!form) return;

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = $('#name')?.value?.trim() || 'Anonyme';
		const rating = Number(($('input[name="rating"]:checked') || {}).value || 0);
		const comment = $('#comment')?.value?.trim() || '';

		if (!rating || rating < 1 || rating > 5) {
			alert('Veuillez sélectionner une note entre 1 et 5 étoiles.');
			return;
		}
		if (!comment || comment.length < 5) {
			alert('Veuillez saisir un commentaire (au moins 5 caractères).');
			return;
		}

		const entry = {
			name,
			rating,
			comment,
			date: new Date().toISOString()
		};
		addReview(entry);
		renderReviews();
		form.reset();
	});

	// Export JSON
	const exportBtn = $('#export-json');
	if (exportBtn) {
		exportBtn.addEventListener('click', () => {
			const data = readReviews();
			const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'proxima-care-avis.json';
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		});
	}

	// Import JSON
	const importInput = $('#import-json');
	if (importInput) {
		importInput.addEventListener('change', async (e) => {
			const file = e.target.files?.[0];
			if (!file) return;
			try {
				const text = await file.text();
				const json = JSON.parse(text);
				if (!Array.isArray(json)) throw new Error('Format JSON invalide');
				// Valider minimalement les entrées
				const cleaned = json
					.map(r => ({
						name: typeof r.name === 'string' ? r.name : 'Anonyme',
						rating: Math.max(1, Math.min(5, Number(r.rating) || 0)),
						comment: typeof r.comment === 'string' ? r.comment : '',
						date: r.date && !Number.isNaN(Date.parse(r.date)) ? r.date : new Date().toISOString()
					}))
					.filter(r => r.comment && r.rating);
				writeReviews(cleaned);
				renderReviews();
				importInput.value = '';
				alert('Import réussi.');
			} catch (err) {
				alert('Échec de l’import. Assurez-vous de sélectionner un fichier JSON valide.');
			}
		});
	}
}

// Navigation responsive et petites interactions
function setupNav() {
	const toggle = $('.nav-toggle');
	const menu = $('#menu');
	const nav = $('.main-nav');
	if (!toggle || !menu || !nav) return;

	toggle.addEventListener('click', () => {
		const expanded = toggle.getAttribute('aria-expanded') === 'true';
		const next = !expanded;
		toggle.setAttribute('aria-expanded', String(next));
		menu.classList.toggle('open', next);
		nav.setAttribute('aria-expanded', String(next));
	});

	// Fermeture du menu au clic d'un lien
	$$('#menu a').forEach(a => {
		a.addEventListener('click', () => {
			toggle.setAttribute('aria-expanded', 'false');
			menu.classList.remove('open');
			nav.setAttribute('aria-expanded', 'false');
		});
	});

	// Défilement doux
	$$('a[href^="#"]').forEach(link => {
		link.addEventListener('click', (e) => {
			const id = link.getAttribute('href');
			if (!id || id === '#') return;
			const target = document.querySelector(id);
			if (!target) return;
			e.preventDefault();
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	});
}

// Init
document.addEventListener('DOMContentLoaded', () => {
	const yearEl = $('#year');
	if (yearEl) yearEl.textContent = String(new Date().getFullYear());
	setupNav();
	setupReviewForm();
	renderReviews();
});







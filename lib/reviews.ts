export type Review = {
	name: string;
	rating: number;
	comment: string;
	date: string; // ISO
};

const STORAGE_KEY = 'proximaReviews';

const demoSeed: Review[] = [
	{ name: 'Anonyme', rating: 5, comment: 'Accueil chaleureux et massage d’une grande qualité. Je me sens rééquilibrée.', date: '2025-08-10T10:00:00.000Z' },
	{ name: 'Yann', rating: 4, comment: 'Approche très professionnelle. Mon dos va beaucoup mieux, merci !', date: '2025-09-14T12:30:00.000Z' },
	{ name: 'Aïcha', rating: 5, comment: 'Un moment de douceur. J’ai adoré l’accompagnement postural personnalisé.', date: '2025-10-02T16:15:00.000Z' }
];

export function readReviews(): Review[] {
	if (typeof window === 'undefined') return demoSeed;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [...demoSeed];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [...demoSeed];
	} catch {
		return [...demoSeed];
	}
}

export function writeReviews(list: Review[]) {
	if (typeof window === 'undefined') return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function addReview(entry: Review): Review[] {
	const list = readReviews();
	list.unshift(entry);
	writeReviews(list);
	return list;
}

export function exportReviews() {
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
}







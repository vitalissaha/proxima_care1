type Props = {
	value: number;
	onChange?: (v: number) => void;
};

export default function StarRating({ value, onChange }: Props) {
	return (
		<div className="inline-flex flex-row-reverse gap-1" role="radiogroup" aria-label="Note de 1 à 5">
			{[1,2,3,4,5].reverse().map(v => (
				<button
					key={v}
					type="button"
					aria-label={`${v} ${v === 1 ? 'étoile' : 'étoiles'}`}
					onClick={() => onChange?.(v)}
					className={`text-2xl transition active:scale-95 ${value >= v ? 'text-copper' : 'text-ink/20'}`}
				>★</button>
			))}
		</div>
	);
}









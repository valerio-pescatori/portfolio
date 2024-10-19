export type CardProps = {
	title: string;
	description: string;
};

export default function Card(props: CardProps) {
	return (
		<div class="bg-surface0 rounded-lg shadow-2xl p-4 border border-surface1 flex flex-col gap-4 hover:scale-105 active:scale-95 transition">
			<h2 class="text-lg">{props.title}</h2>
			<p>{props.description}</p>
		</div>
	);
}

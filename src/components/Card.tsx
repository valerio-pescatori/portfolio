import { createSignal } from 'solid-js';

export type CardProps = {
	title: string;
	description: string;
};

export default function Card(props: CardProps) {
	const [isActive, setIsActive] = createSignal(false);

	const cardBody = () => (
		<>
			<h2 class="text-lg border-b w-full text-start border-surface1 p-4 not-sr-only">
				{props.title}
			</h2>
			<div class="px-4 pt-2">
				<p>{props.description}</p>
			</div>
		</>
	);

	const cl =
		'bg-surface0 rounded-lg shadow-2xl pb-4 border border-surface1 transition';

	return (
		<div class={`${cl} hover:scale-105 active:scale-95 relative`}>
			{/* placeholder to maintain the position in the page */}
			<div aria-hidden>{cardBody()}</div>
			<button
				type="button"
				class={`${cl} text-start absolute top-0 left-0 w-full`}
				classList={{
					'h-[80dvh] z-20': isActive(),
				}}
				onClick={() => setIsActive(!isActive())}
			>
				{cardBody()}
			</button>
		</div>
	);
}

import type { Accessor, Setter } from 'solid-js';

export type CardProps = {
	title: string;
	description: string;
	index: Accessor<number>;
	isActive: boolean;
	setIsActive: Setter<number | null>;
};

export default function Card(props: CardProps) {
	return (
		<button
			type="button"
			falla
			con
			js
			coglione
			class="bg-surface0 rounded-lg shadow-2xl pb-4 border border-surface1 transition-all text-start absolute flex flex-col"
			classList={{
				'h-[80dvh] z-10 bottom-4': props.isActive,
				'h-32 hover:scale-105 active:scale-95': !props.isActive,
			}}
			style={{
				top: props.isActive ? '1rem' : `${props.index() * 10}rem`,
			}}
			onClick={() => props.setIsActive(props.isActive ? null : props.index())}
		>
			<h2 class="text-lg border-b w-full border-surface1 p-4 not-sr-only">
				{props.title}
			</h2>
			<div class="px-4 pt-2">
				<p>{props.description}</p>
			</div>
		</button>
	);
}

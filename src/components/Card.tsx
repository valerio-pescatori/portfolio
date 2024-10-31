import { type Accessor, createSignal } from 'solid-js';
import type { LocalizedString } from 'typesafe-i18n';
import Modal from './Modal';
import TranslateMarkdown from './TranslateMarkdown';

export type CardProps = {
	title: Accessor<LocalizedString>;
	description: Accessor<LocalizedString>;
};

export default function Card(props: CardProps) {
	const [isActive, setIsActive] = createSignal(false);

	const cardBody = () => (
		<TranslateMarkdown
			class="px-4 pt-2 min-h-16"
			message={props.description()}
			as="p"
		/>
	);

	return (
		<>
			<Modal title={props.title} isOpen={isActive} setIsOpen={setIsActive}>
				{cardBody()}
			</Modal>
			<div class="bg-surface0 rounded-lg border border-surface1 transition-transform shadow-2xl hover:scale-105">
				<button
					class={`
					text-start 
					hover:ring-opacity-100 focus:ring-opacity-100 transition-shadow ring-1 ring-opacity-0 ring-mauve
					rounded-lg w-full align-top`}
					type="button"
					onClick={() => setIsActive(true)}
				>
					<h2 class="text-lg border-b w-full border-surface1 p-4 flex justify-between">
						{props.title()}
					</h2>
					<div class="max-h-48 overflow-hidden relative">
						<div class="absolute size-full rounded-b-lg bg-gradient-to-t from-surface0 to-transparent to-60%" />
						{cardBody()}
					</div>
				</button>
			</div>
		</>
	);
}

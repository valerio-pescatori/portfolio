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

	const cardBody = (hasMaxH = false) => (
		<TranslateMarkdown
			class="px-4 pt-2 min-h-12"
			classList={{ 'max-h-48 overflow-hidden': hasMaxH }} // add ellipsis
			message={props.description()}
			as="p"
		/>
	);

	return (
		<div
			class={
				'bg-surface0 rounded-lg border border-surface1 transition-all duration-500 shadow-2xl'
			}
		>
			<button
				class="text-start hover:ring-opacity-100 focus:ring-opacity-100 transition-shadow ring-1 ring-opacity-0 ring-mauve rounded-lg w-full align-top"
				type="button"
				onClick={() => setIsActive(true)}
			>
				<h2 class="text-lg border-b w-full border-surface1 p-4 flex justify-between">
					{props.title()}
				</h2>
				{cardBody(true)}
			</button>
			<Modal title={props.title} isOpen={isActive} setIsOpen={setIsActive}>
				{cardBody()}
			</Modal>
		</div>
	);
}

import { Show, createSignal } from 'solid-js';
import Icon from './Icon/Icon';
import { IconsEnum } from './Icon/types/IconsEnum';

export type CardProps = {
	title: string;
	description: string;
};

export default function Card(props: CardProps) {
	const [isActive, setIsActive] = createSignal(false);
	let modalRef!: HTMLDivElement;
	let buttonRef!: HTMLButtonElement; // TODO: turn into dialog

	const openCard = () => {
		// switch to fixed
		setIsActive(true);
		// adjust top and left to match the current position,
		const rect = buttonRef.getBoundingClientRect();
		modalRef.setAttribute(
			'style',
			`top: ${rect.top}px; bottom: ${rect.bottom}; left: ${rect.left}px; width: ${rect.width}px; height: ${rect.height}px`,
		);
		// request animation frame
		// then set the new top, left, width and height
		requestAnimationFrame(() => {
			modalRef.setAttribute(
				'style',
				'top: 2rem; left: 50%; translate: -50% 0; width: 60vw; height: 90vh',
			);
		});
	};

	const closeCard = () => {
		// resize the modal to match the button
		const rect = buttonRef.getBoundingClientRect();
		modalRef.setAttribute(
			'style',
			`top: ${rect.top}px; bottom: ${rect.bottom}; left: ${rect.left}px; translate: 0; width: ${rect.width}px; height: ${rect.height}px`,
		);
		// setTimeout to wait for the transition to finish
		setTimeout(() => {
			// remove the style and switch to absolute
			modalRef.removeAttribute('style');
			setIsActive(false);
		}, 300);
	};

	const cardBody = () => (
		<>
			<h2 class="text-lg border-b w-full border-surface1 p-4 flex justify-between">
				{props.title}
				<Show when={isActive()}>
					<button type="button" onClick={closeCard}>
						<Icon iconName={IconsEnum.CIRCLE_X} />
					</button>
				</Show>
			</h2>
			<div class="px-4 pt-2 pb-4">
				<p>{props.description}</p>
			</div>
		</>
	);

	const baseStyle =
		'bg-surface0 rounded-lg border border-surface1 transition-all';

	// TODO: ADD BACKDROP, DISABLE BTN CLICK WHILE THE MODAL IS CLOSING, ADD CLICK EVT LISTENER TO CLOSE THE MODAL WHEN CLICKING OUTSIDE
	return (
		<div class={`${baseStyle} shadow-2xl relative`}>
			<button
				aria-hidden={isActive()}
				ref={buttonRef}
				class="text-start"
				type="button"
				onClick={openCard}
			>
				{cardBody()}
			</button>
			<div
				aria-hidden={!isActive()}
				ref={modalRef}
				class={baseStyle}
				classList={{
					'absolute top-0 left-0 size-full pointer-events-none': !isActive(),
					'fixed z-10': isActive(),
				}}
			>
				{cardBody()}
			</div>
		</div>
	);
}

import { type Accessor, type JSX, Show, createSignal } from 'solid-js';
import type { LocalizedString } from 'typesafe-i18n';
import { useI18nContext } from '../i18n/i18n-solid';
import Icon from './Icon/Icon';
import { IconsEnum } from './Icon/types/IconsEnum';
import TranslateMarkdown from './TranslateMarkdown';

export type CardProps = {
	title: Accessor<LocalizedString>;
	description: Accessor<LocalizedString>;
};

export default function Card(props: CardProps) {
	const [isActive, setIsActive] = createSignal(false);
	const [style, setStyle] = createSignal<JSX.CSSProperties>({});
	const { LL } = useI18nContext();
	let modalRef!: HTMLDivElement;
	let buttonRef!: HTMLButtonElement; // TODO: turn into dialog
	let backdropRef!: HTMLDivElement;

	const openCard = () => {
		// add backdrop
		backdropRef.classList.toggle('bg-black/40');
		backdropRef.classList.toggle('bg-black/0');

		// switch to fixed
		setIsActive(true);
		// adjust top and left to match the current position,
		const rect = buttonRef.getBoundingClientRect();
		setStyle({
			top: `${rect.top}px`,
			left: `${rect.left}px`,
			width: `${rect.width}px`,
			height: `${rect.height}px`,
		});

		// then set the new top, left, width and height
		setTimeout(() => {
			setStyle({
				translate: '-50%',
				top: '2rem',
				left: '50%',
				width: '60vw',
				height: '90vh',
			});
		});
	};

	const closeCard = () => {
		// remove backdrop
		backdropRef.classList.toggle('bg-black/40');
		backdropRef.classList.toggle('bg-black/0');

		// resize the modal to match the button
		const rect = buttonRef.getBoundingClientRect();
		setStyle({
			translate: 0,
			top: `${rect.top}px`,
			left: `${rect.left}px`,
			width: `${rect.width}px`,
			height: `${rect.height}px`,
		});

		// setTimeout to wait for the transition to finish
		setTimeout(() => {
			// remove the style and switch to absolute
			setStyle({});
			setIsActive(false);
		}, 500);
	};

	const cardBody = (shouldOverflow = false) => (
		<>
			<h2 class="text-lg border-b w-full border-surface1 p-4 flex justify-between">
				{props.title()}
				<Show when={isActive()}>
					<button
						type="button"
						class="hover:ring-opacity-100 focus:ring-opacity-100 transition-shadow ring-opacity-0 ring-1 ring-mauve rounded-full size-6"
						onClick={closeCard}
					>
						<Icon iconName={IconsEnum.CIRCLE_X} />
					</button>
				</Show>
			</h2>
			<TranslateMarkdown
				class="px-4 pt-2 min-h-12"
				classList={{
					'max-h-28 overflow-hidden': !isActive() || !shouldOverflow,
				}}
				message={props.description()}
				as="p"
			/>
		</>
	);

	const baseStyle =
		'bg-surface0 rounded-lg border border-surface1 transition-all duration-500';

	return (
		<div class={`${baseStyle} shadow-2xl relative`}>
			<button
				aria-hidden={isActive()}
				ref={buttonRef}
				class="text-start hover:ring-opacity-100 focus:ring-opacity-100 transition-shadow ring-1 ring-opacity-0 ring-mauve rounded-lg w-full align-top"
				type="button"
				onClick={openCard}
			>
				{cardBody()}
			</button>

			{/* modal (backdrop) */}
			<div
				aria-hidden={!isActive()}
				ref={backdropRef}
				role="dialog"
				aria-modal
				aria-label={LL().thingsivedone.dialogAriaLabel({
					title: props.title(),
				})}
				class="transition-colors fixed top-0 left-0"
				classList={{
					'size-0 opacity-0 pointer-events-none': !isActive(),
					'z-10 w-screen h-screen ': isActive(),
				}}
			>
				{/* modal (body) */}
				<div
					aria-hidden={!isActive()}
					class={`${baseStyle} opacity-100 overflow-auto`}
					classList={{
						'absolute top-0 left-0 size-full': !isActive(),
						fixed: isActive(),
					}}
					ref={modalRef}
					style={style()}
				>
					{cardBody(true)}
				</div>
			</div>
		</div>
	);
}

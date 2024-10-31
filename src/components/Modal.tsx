import {
	type Accessor,
	type ParentProps,
	type Setter,
	Show,
	children,
} from 'solid-js';
import type { LocalizedString } from 'typesafe-i18n';
import Icon from './Icon/Icon';
import { IconsEnum } from './Icon/types/IconsEnum';

export type ModalProps = ParentProps<{
	isOpen: Accessor<boolean>;
	setIsOpen: Setter<boolean>;
	title: Accessor<LocalizedString>;
}>;

export default function Modal(props: ModalProps) {
	return (
		<Show when={props.isOpen()}>
			<div class="fixed inset-0 bg-black/40 pointer-events-none z-50 transition-colors starting:bg-black/0 duration-700">
				<dialog
					open={props.isOpen()}
					class={`
						fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
						flex flex-col pointer-events-auto 
						w-11/12 md:w-4/6 h-5/6 starting:h-16 
						bg-surface0 rounded-lg border border-overlay2 
						transition-all duration-700
						text-text`}
				>
					{/* title */}
					<h2 class="text-lg border-b w-full border-overlay2 p-4 flex justify-between">
						{props.title()}
						<button
							type="button"
							class="hover:ring-opacity-100 focus:ring-opacity-100 transition-shadow ring-opacity-0 ring-1 ring-mauve rounded-full size-6"
							onClick={() => props.setIsOpen(false)}
						>
							<Icon iconName={IconsEnum.CIRCLE_X} />
						</button>
					</h2>
					{/* body */}
					<div class="p-4 overflow-auto">
						{children(() => props.children)()}
					</div>
				</dialog>
			</div>
		</Show>
	);
}

import { type Accessor, For, Show, createSignal } from 'solid-js';
import { createClickOut } from '~/utils/createClickOut';
import type { WithClass } from '~/utils/withClass';

type DropdownProps<T> = WithClass<{
	label: Accessor<string>;
	items: DropdownItem<T>[];
	onSelectItem: (item: T) => void;
}>;

type DropdownItem<T> = {
	label: string;
	value: T;
};

export default function Dropdown<T>(props: DropdownProps<T>) {
	const [isOpen, setIsOpen] = createSignal(false);
	const [ref, setRef] = createSignal<HTMLDivElement | undefined>();
	createClickOut(ref, () => setIsOpen(false));

	return (
		<div class={`relative ${props.class}`} ref={setRef}>
			<button
				class="px-4 rounded-xl border transition-colors hover:border-mauve"
				classList={{
					'border-mauve': isOpen(),
					'border-transparent': !isOpen(),
				}}
				type="button"
				onClick={() => setIsOpen(!isOpen())}
			>
				{props.label()}
			</button>
			<Show when={isOpen()}>
				<ul class="absolute top-full mt-2 right-0 flex border-mauve border rounded-xl bg-mantle flex-col px-4 py-2">
					<For each={props.items}>
						{(item) => (
							<li>
								<button
									class="w-full text-left"
									type="button"
									onClick={() => {
										props.onSelectItem(item.value);
										setIsOpen(false);
									}}
								>
									{item.label}
								</button>
							</li>
						)}
					</For>
				</ul>
			</Show>
		</div>
	);
}

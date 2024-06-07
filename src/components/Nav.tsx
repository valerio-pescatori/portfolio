import { type FlavorName, flavors } from '@catppuccin/palette';
import { type Accessor, For, type Setter, Show, createSignal } from 'solid-js';
import type { Locales } from '~/i18n/i18n-types';

type NavProps = {
	theme: Accessor<FlavorName>;
	setTheme: Setter<FlavorName>;
	lang: Locales;
};

export default function Nav({ theme, setTheme, lang }: NavProps) {
	const [isOpen, setIsOpen] = createSignal(false);

	const switchTheme = (newTheme: FlavorName) => {
		setIsOpen(false);
		setTheme(newTheme);
		document.cookie = `theme=${newTheme}; Max-Age ${
			1000 * 60 * 60 * 24 * 30 * 12
		}`;
	};

	return (
		<nav class="bg-mantle flex justify-end px-4 py-2">
			<div class="relative">
				<button
					class="px-4 rounded-xl border border-mauve"
					type="button"
					onClick={() => setIsOpen(!isOpen())}
				>
					{theme()}
				</button>
				<Show when={isOpen()}>
					<ul class="absolute top-full mt-2 right-0 flex border-mauve border rounded-xl bg-mantle flex-col px-4 py-2">
						<For each={Object.keys(flavors)}>
							{(name) => (
								<li>
									<button
										class="w-full text-left"
										type="button"
										onClick={() => switchTheme(name as FlavorName)}
									>
										{name}
									</button>
								</li>
							)}
						</For>
					</ul>
				</Show>
			</div>
		</nav>
	);
}

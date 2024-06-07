import { type Accessor, onCleanup, onMount } from 'solid-js';
import { isServer } from 'solid-js/web';

export const createClickOut = <T extends HTMLElement>(
	ref: Accessor<T | undefined>,
	callback: () => void,
) => {
	if (isServer) return;

	const handleClick = (e: MouseEvent) => {
		if (!ref()?.contains(e.target as Node | null)) {
			callback();
		}
	};

	onMount(() => {
		window.addEventListener('click', handleClick);
	});

	onCleanup(() => {
		window.removeEventListener('click', handleClick);
	});
};

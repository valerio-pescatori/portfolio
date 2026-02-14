import { Show, createEffect, createSignal, onCleanup } from 'solid-js';
import { typewriterFast } from './constants/typewriterConfigs';
import type { DrawCharRandomness } from './types/DrawCharRandomness';
import { generateActions } from './utils/generateActions';
import { sleep } from './utils/sleep';

type TypewriterProps = {
	text: string;
	disableAnimation?: boolean;
	onAnimationEnd?: () => void;
	drawCharRandomness?: DrawCharRandomness;
	showCursor?: boolean;
};

export default function Typewriter(props: TypewriterProps) {
	const [content, setContent] = createSignal('');
	const [showCursor, setShowCursor] = createSignal(false);
	const [actions, setActions] = createSignal(
		generateActions(props.text, props.drawCharRandomness ?? typewriterFast),
	);
	props.showCursor ??= true;
	let timeout: NodeJS.Timeout | null = null;

	// blinking cursor
	createEffect(() => {
		if (!props.showCursor || props.disableAnimation) return;
		if (props.text !== content()) {
			setShowCursor(true);
		} else {
			timeout = setInterval(() => {
				setShowCursor(!showCursor());
			}, 350);

			setTimeout(() => {
				timeout && clearTimeout(timeout);
				setShowCursor(false);
			}, 2000);
		}
	});

	// ciclo di scrittura
	createEffect(() => {
		let cancelled = false;

		onCleanup(() => {
			cancelled = true;
			setContent('');
			setActions(generateActions(props.text, props.drawCharRandomness));
		});

		(async () => {
			// forza la dipendenza su props.text
			props.text;

			for (const action of await actions()) {
				if (cancelled) break; // se il cleanup è stato chiamato, interrompi subito

				await sleep(action.time);
				if (cancelled) break;

				if (action.type === 'add') {
					setContent((c) => c + action.char);
				} else {
					setContent((c) => c.slice(0, -1));
				}
			}

			if (!cancelled) {
				props.onAnimationEnd?.();
			}
		})();
	});

	return (
		<>
			<span class="sr-only">{props.text}</span>
			<span
				aria-busy={!props.disableAnimation && content() !== props.text}
				aria-hidden
			>
				{props.disableAnimation ? props.text : content()}
				<Show when={showCursor()}>|</Show>
			</span>
		</>
	);
}

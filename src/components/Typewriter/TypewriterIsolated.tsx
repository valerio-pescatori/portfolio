import { Show, createEffect, createSignal, onCleanup, untrack } from 'solid-js';
import { isServer } from 'solid-js/web';
import { typoMap } from './constants/typoMap';
import type { DrawCharRandomness } from './types/DrawCharRandomness';
import { drawChar } from './utils/drawChar';

type TypewriterProps = {
	text: string;
	disableAnimation?: boolean;
	onAnimationEnd?: () => void;
	drawCharRandomness?: DrawCharRandomness;
	showCursor?: boolean;
};

export default function Typewriter(props: TypewriterProps) {
	const { drawCharRandomness } = props;
	const [content, setContent] = createSignal(props.text[0]);
	const [showCursor, setShowCursor] = createSignal(false);
	props.showCursor ??= true;
	let timeout: NodeJS.Timeout | null = null;

	onCleanup(() => {
		timeout && clearTimeout(timeout);
	});

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

	// typing effect
	createEffect((prevText) => {
		let timeouts: NodeJS.Timeout[] = [];
		if (props.disableAnimation) {
			props.onAnimationEnd?.();
			return;
		}
		if (prevText !== props.text) {
			setContent('');
			timeouts.forEach(clearTimeout);
		}
		if (!isServer) {
			untrack(async () => {
				while (content() !== props.text) {
					const t = await drawChar({
						char: props.text[content().length],
						str: content,
						setStr: setContent,
						typoMap,
						...drawCharRandomness,
					});
					timeouts = timeouts.concat(t);
				}
				props.onAnimationEnd?.();
			});
		}
		return props.text;
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

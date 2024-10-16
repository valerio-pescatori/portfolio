import { createEffect, createSignal, untrack } from 'solid-js';
import { isServer } from 'solid-js/web';
import { typoMap } from './constants/typoMap';
import type { DrawCharRandomness } from './types/DrawCharRandomness';
import { drawChar } from './utils/drawChar';

type TypewriterProps = {
	text: string;
	disableAnimation?: boolean;
	onAnimationEnd?: () => void;
	drawCharRandomness?: DrawCharRandomness;
};

export default function Typewriter(props: TypewriterProps) {
	const { drawCharRandomness } = props;
	const [content, setContent] = createSignal(props.text[0]);

	createEffect((prevText) => {
		let timeouts: NodeJS.Timeout[] = [];
		if (props.disableAnimation) return;
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
			</span>
		</>
	);
}

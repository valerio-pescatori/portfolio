import { createEffect, createSignal, untrack } from 'solid-js';
import { typoMap } from './constants/typoMap';
import { drawChar } from './utils/drawChar';

type TypewriterProps = {
	text: string;
	typoRate?: number;
	maxTimeout?: number;
	onAnimationEnd?: () => void;
};

export default function Typewriter(props: TypewriterProps) {
	const { typoRate = 0.8, maxTimeout = 250 } = props;
	const [content, setContent] = createSignal(props.text[0]);

	createEffect((prevText) => {
		let timeouts: NodeJS.Timeout[] = [];
		if (prevText !== props.text) {
			setContent('');
			timeouts.forEach(clearTimeout);
		}
		untrack(async () => {
			while (content() !== props.text) {
				const t = await drawChar(
					props.text[content().length],
					content,
					setContent,
					typoMap,
					typoRate,
					maxTimeout,
				);
				timeouts = timeouts.concat(t);
			}
			props.onAnimationEnd?.();
		});
		return props.text;
	});

	return (
		<>
			<span class="sr-only">{props.text}</span>
			<span aria-busy={content() !== props.text} aria-hidden>
				{content()}
			</span>
		</>
	);
}

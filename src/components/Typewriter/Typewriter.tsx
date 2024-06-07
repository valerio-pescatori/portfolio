import { createEffect, createSignal } from 'solid-js';
import { typoMap } from './constants/typoMap';
import type { Alphabet } from './types/alphabet';

type TypewriterProps = {
	text: string;
	onAnimationEnd?: () => void;
};

export default function Typewriter(props: TypewriterProps) {
	const [content, setContent] = createSignal(props.text[0]);
	const [containsTypo, setContainsTypo] = createSignal(false);

	createEffect(() => {
		const typoTimeouts: NodeJS.Timeout[] = [];
		setContent(props.text[0]);
		const interval = setInterval(() => {
			if (containsTypo()) return;
			const addTypo = Math.random() > 0.8;
			if (content() === props.text) {
				clearInterval(interval);
				props.onAnimationEnd?.();
			} else if (addTypo) {
				const newChar = props.text[content().length];
				const typoArray = newChar in typoMap && typoMap[newChar as Alphabet];

				if (typoArray) {
					setContainsTypo(true);
					const r = Math.random();
					const randomTypo = Math.floor(r * (typoArray.length - 1));
					setContent(content() + typoArray[randomTypo]);

					const randTime = Math.random() * 250 + 50;
					const removeErrorTimeout = setTimeout(() => {
						setContent(content().slice(0, -1));
					}, randTime);
					typoTimeouts.push(removeErrorTimeout);

					const addCharTimeout = setTimeout(() => {
						setContent(content() + props.text[content().length]);
						setContainsTypo(false);
					}, randTime + 150);
					typoTimeouts.push(addCharTimeout);
				} else {
					setContent(content() + props.text[content().length]);
				}
			} else {
				setContent(content() + props.text[content().length]);
			}
		}, 150);

		return () => {
			clearInterval(interval);
			typoTimeouts.forEach(clearTimeout);
		};
	});

	return (
		<>
			<span class="sr-only">{props.text}</span>
			<span>{content()}</span>
		</>
	);
}

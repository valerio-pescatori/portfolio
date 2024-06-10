import type { Accessor, Setter } from 'solid-js';

import type { TypoMap } from '../types/TypoMap';
import type { MistypableCharacters } from '../types/alphabet';
import { sleep } from './sleep';

/** Adds a character to a string after a random period of time between 0 and `maxTimeout`ms.
 * By default the `maxTimeout` is `250`ms
 * @returns The randomly generate timeout in ms
 */
export const drawChar = async (
	char: string,
	str: Accessor<string>,
	setStr: Setter<string>,
	typoMap: TypoMap,
	typoRate = 0.75,
	maxTimeout = 250,
) => {
	const timeouts: NodeJS.Timeout[] = [];
	const randomTime = Math.random() * maxTimeout;
	const addTypo = Math.random() > typoRate;
	const deleteTypoTime = Number(addTypo && Math.random() * maxTimeout);
	const correctTypoTime = Number(addTypo && Math.random() * maxTimeout);
	timeouts.push(await sleep(randomTime));
	if (addTypo && char in typoMap) {
		const typoArr = typoMap[char as MistypableCharacters];
		const randIdx = Math.floor(Math.random() * (typoArr.length - 1));
		const typo = typoArr[randIdx];
		setStr(str() + typo);
		timeouts.push(await sleep(deleteTypoTime));
		setStr(str().slice(0, -1));
		timeouts.push(await sleep(correctTypoTime));
		setStr(str() + char);
	} else {
		setStr(str() + char);
	}
	return timeouts;
};

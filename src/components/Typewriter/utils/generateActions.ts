import { typoMap } from '../constants/typoMap';
import type { DrawCharRandomness } from '../types/DrawCharRandomness';
import type { MistypableCharacters } from '../types/alphabet';

export type WriteAction =
	| {
			type: 'add';
			char: string;
			time: number;
	  }
	| {
			type: 'delete';
			time: number;
	  };

export const generateActions = async (
	text: string,
	drawCharRandomness?: DrawCharRandomness,
) => {
	'use server';
	const actions: WriteAction[] = [];
	// generate string
	let isComplete = false;
	let currentStr = '';
	const typoRate = drawCharRandomness?.typoRate ?? 0.2;
	const maxTimeout = drawCharRandomness?.maxTimeout ?? 300;
	const deleteTimeoutMultiplier =
		drawCharRandomness?.deleteTimeoutMultiplier ?? 1.2;

	while (!isComplete) {
		/** indice del cursore */
		const index = currentStr.length;
		/** carattere corretto da scrivere */
		const char = text[index];

		// generate an action
		const isError = Math.random() < typoRate;

		// se è error aggiungo 3 azioni -> errore, eliminazione e correzione.
		// altrimenti una sola azione -> scrittura corretta
		const typo = typoMap[char as MistypableCharacters];
		if (isError && typo) {
			const typoChar = typo[Math.floor(Math.random() * typo.length)];
			const typoTime = Math.random() * maxTimeout * deleteTimeoutMultiplier;
			const correctionTime = typoTime * deleteTimeoutMultiplier;

			// first action: error
			actions.push({
				type: 'add',
				char: typoChar,
				time: typoTime,
			});

			// second actions: error cancellation
			actions.push({
				type: 'delete',
				time: correctionTime,
			});
		}
		// third (or first) action: the correct one
		actions.push({
			type: 'add',
			time: Math.random() * maxTimeout,
			char,
		});
		currentStr += char;
		isComplete = currentStr === text;
	}
	return actions;
};

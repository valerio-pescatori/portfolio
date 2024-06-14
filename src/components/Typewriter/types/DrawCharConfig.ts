import type { Accessor, Setter } from 'solid-js';
import type { DrawCharRandomness } from './DrawCharRandomness';
import type { TypoMap } from './TypoMap';

export type DrawCharConfig = DrawCharRandomness & {
	char: string;
	str: Accessor<string>;
	setStr: Setter<string>;
	typoMap: TypoMap;
};

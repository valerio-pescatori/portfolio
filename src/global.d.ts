/// <reference types="@solidjs/start/env" />

import type { FlavorName } from '@catppuccin/palette';
import type { Locales } from './i18n/i18n-types';

declare module '@solidjs/start/server' {
	interface RequestEventLocals {
		lang: Locales;
		theme: FlavorName;
	}
}

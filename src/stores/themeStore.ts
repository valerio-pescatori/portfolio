import type { FlavorName } from '@catppuccin/palette';
import { createSignal } from 'solid-js';

export const DEFAULT_THEME: FlavorName = 'mocha';

export const [theme, setTheme] = createSignal<FlavorName>(DEFAULT_THEME);

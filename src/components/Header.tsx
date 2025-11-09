import { type FlavorName, flavors } from '@catppuccin/palette';
import { useLocation, useNavigate } from '@solidjs/router';
import { Show, createEffect, onCleanup } from 'solid-js';
import { useI18nContext } from '~/i18n/i18n-solid';
import type { Locales } from '~/i18n/i18n-types';
import { locales } from '~/i18n/i18n-util';
import { loadLocaleAsync } from '~/i18n/i18n-util.async';
import { setTheme, theme } from '~/stores/themeStore';
import Dropdown from './Dropdown';
import Icon from './Icon/Icon';
import { IconsEnum } from './Icon/types/IconsEnum';

export default function Header() {
	const { locale, setLocale } = useI18nContext();
	const navigate = useNavigate();
	const location = useLocation();

	const switchLocale = async (newLocale: Locales) => {
		document.cookie = `lang=${newLocale}; Max-Age=${
			1000 * 60 * 60 * 24 * 30 * 12
		}`;
		await loadLocaleAsync(newLocale);
		setLocale(newLocale);
	};

	const switchTheme = (newTheme: FlavorName) => {
		setTheme(newTheme);
		document.cookie = `theme=${newTheme}; Max-Age ${
			1000 * 60 * 60 * 24 * 30 * 12
		}`;
	};

	createEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === 'Backspace') navigate('/');
		}

		addEventListener('keydown', handleKeyDown);

		onCleanup(() => {
			removeEventListener('keydown', handleKeyDown);
		});
	});

	return (
		<header class="bg-mantle flex justify-end px-4 py-2">
			<Show when={location.pathname !== '/'}>
				<a class="mr-auto inline-flex items-center gap-1" href="/">
					<Icon iconName={IconsEnum.CHEVRON_DOWN} class="rotate-90" />
					<span>home</span>
				</a>
			</Show>
			<Dropdown<FlavorName>
				items={Object.keys(flavors).map((f) => ({
					value: f as FlavorName,
					label: f,
				}))}
				label={theme}
				class="mr-4"
				onSelectItem={switchTheme}
			/>
			<Dropdown<Locales>
				label={locale}
				items={locales.map((v) => ({ label: v, value: v }))}
				onSelectItem={switchLocale}
			/>
		</header>
	);
}

import { type FlavorName, flavors } from '@catppuccin/palette';
import { useLocation } from '@solidjs/router';
import { type Accessor, type Setter, Show } from 'solid-js';
import { useI18nContext } from '~/i18n/i18n-solid';
import type { Locales } from '~/i18n/i18n-types';
import { locales } from '~/i18n/i18n-util';
import { loadLocaleAsync } from '~/i18n/i18n-util.async';
import Dropdown from './Dropdown';
import Icon from './Icon/Icon';
import { IconsEnum } from './Icon/types/IconsEnum';

type HeaderProps = {
	theme: Accessor<FlavorName>;
	setTheme: Setter<FlavorName>;
};

export default function Header(props: HeaderProps) {
	const { locale, setLocale } = useI18nContext();
	const location = useLocation();

	const switchLocale = async (newLocale: Locales) => {
		document.cookie = `lang=${newLocale}; Max-Age=${
			1000 * 60 * 60 * 24 * 30 * 12
		}`;
		await loadLocaleAsync(newLocale);
		setLocale(newLocale);
	};

	const switchTheme = (newTheme: FlavorName) => {
		props.setTheme(newTheme);
		document.cookie = `theme=${newTheme}; Max-Age ${
			1000 * 60 * 60 * 24 * 30 * 12
		}`;
	};

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
				label={props.theme}
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

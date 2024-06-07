import { useI18nContext } from '~/i18n/i18n-solid';
import { loadLocaleAsync } from '~/i18n/i18n-util.async';

export default function Home() {
	const { LL, locale, setLocale } = useI18nContext();

	const updateCookie = async () => {
		const newLocale = locale() === 'en' ? 'it' : 'en';
		document.cookie = `lang=${newLocale}; Max-Age=${
			1000 * 60 * 60 * 24 * 30 * 12
		}`;
		await loadLocaleAsync(newLocale);
		setLocale(newLocale);
	};

	return (
		<main class="text-center mx-auto p-4 bg-base">
			<button type="button" onClick={updateCookie}>
				{locale()}
			</button>
			<h1 class="max-6-xs text-6xl font-thin uppercase my-16">
				{LL().hi({ name: 'Valerio' })}
			</h1>
			<h2 class="text-subtext1">{LL().about()}</h2>
		</main>
	);
}

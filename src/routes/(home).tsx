import { useI18nContext } from "~/i18n/i18n-solid";
import { loadLocaleAsync } from "~/i18n/i18n-util.async";

export default function Home() {
	const { LL, locale, setLocale } = useI18nContext();

	return (
		<main class="mocha text-center mx-auto text-text min-h-dvh p-4 bg-base">
			<button
				onClick={async () => {
					const newLocale = locale() === "en" ? "it" : "en";
					document.cookie = `lang=${newLocale}; Max-Age=${
						1000 * 60 * 60 * 24 * 30 * 12
					}`;
					await loadLocaleAsync(newLocale);
					setLocale(newLocale);
				}}
			>
				{locale()}
			</button>
			<h1 class="max-6-xs text-6xl font-thin uppercase my-16">
				{LL().hi({ name: "Valerio" })}
			</h1>
			<h2>{LL().about()}</h2>
		</main>
	);
}

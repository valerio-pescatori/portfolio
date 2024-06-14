import type { FlavorName } from '@catppuccin/palette';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense, createSignal } from 'solid-js';
import { getRequestEvent } from 'solid-js/web';
import './app.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TypesafeI18n from './i18n/i18n-solid';
import type { Locales } from './i18n/i18n-types';
import { loadLocale } from './i18n/i18n-util.sync';
import { getClientCookie } from './utils/cookies/getClientCookie';

export default function App() {
	const req = getRequestEvent();
	const [theme, setTheme] = createSignal<FlavorName>('mocha');

	let lang: Locales;
	if (req) {
		lang = req.locals.lang;
		setTheme(req.locals.theme);
	} else {
		lang = getClientCookie<Locales>('lang') as Locales;
		setTheme(getClientCookie<FlavorName>('theme') as FlavorName);
	}
	loadLocale(lang);

	return (
		<div
			class="text-text h-dvh flex flex-col bg-base"
			classList={{ [theme()]: true }}
		>
			<Router
				root={(props) => (
					<TypesafeI18n locale={lang}>
						<Header theme={theme} setTheme={setTheme} />
						<Suspense>
							<main class="grow w-10/12 lg:w-7/6 xl:w-6/12 mx-auto pt-16">
								{props.children}
							</main>
						</Suspense>
						<Footer />
					</TypesafeI18n>
				)}
			>
				<FileRoutes />
			</Router>
		</div>
	);
}

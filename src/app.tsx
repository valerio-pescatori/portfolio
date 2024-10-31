import type { FlavorName } from '@catppuccin/palette';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense, createEffect } from 'solid-js';
import { getRequestEvent, isServer } from 'solid-js/web';
import './app.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TypesafeI18n from './i18n/i18n-solid';
import type { Locales } from './i18n/i18n-types';
import { loadLocale } from './i18n/i18n-util.sync';
import { setTheme, theme } from './stores/themeStore';
import { getClientCookie } from './utils/cookies/getClientCookie';

export default function App() {
	const req = getRequestEvent();

	let lang: Locales;
	if (req) {
		lang = req.locals.lang;
		setTheme(req.locals.theme);
	} else {
		lang = getClientCookie<Locales>('lang') as Locales;
		setTheme(getClientCookie<FlavorName>('theme') as FlavorName);
	}
	loadLocale(lang);

	createEffect(() => {
		if (isServer) return;
		document.documentElement.className = theme();
	});

	return (
		<div class="text-text min-h-dvh flex flex-col bg-base">
			<Router
				root={(props) => (
					<TypesafeI18n locale={lang}>
						<Header />
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

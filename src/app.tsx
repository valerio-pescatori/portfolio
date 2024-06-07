import type { FlavorName } from '@catppuccin/palette';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense, createSignal } from 'solid-js';
import { getRequestEvent } from 'solid-js/web';
import './app.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import TypesafeI18n from './i18n/i18n-solid';
import type { Locales } from './i18n/i18n-types';
import { loadLocale } from './i18n/i18n-util.sync';
import { getClientCookie } from './utils/getClientCookie';

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
			class="text-text min-h-dvh flex flex-col grow"
			classList={{ [theme()]: true }}
		>
			<Router
				root={(props) => (
					<TypesafeI18n locale={lang}>
						<Nav theme={theme} setTheme={setTheme} />
						<Suspense>{props.children}</Suspense>
						<Footer />
					</TypesafeI18n>
				)}
			>
				<FileRoutes />
			</Router>
		</div>
	);
}

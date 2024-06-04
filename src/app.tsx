import { Router, cache } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import './app.css';
import TypesafeI18n from './i18n/i18n-solid';
import { loadLocale } from './i18n/i18n-util.sync';
import { getUserLanguage } from './utils/getUserLanguage';

export default function App() {
	const lang = getUserLanguage();
	loadLocale(lang);
	return (
		<Router
			root={(props) => (
				<TypesafeI18n locale={lang}>
					<Suspense>{props.children}</Suspense>
				</TypesafeI18n>
			)}
		>
			<FileRoutes />
		</Router>
	);
}

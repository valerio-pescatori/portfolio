// @refresh reload
import { StartServer, createHandler } from '@solidjs/start/server';
import { detectLocale } from 'typesafe-i18n/detectors';
import { locales } from './i18n/i18n-util';
import { DEFAULT_THEME } from './stores/themeStore';
import { handleDefaultCookie } from './utils/handleDefaultCookie';

export default createHandler((event) => {
	const lang = handleDefaultCookie('lang', detectLocale('en', locales), event);
	const theme = handleDefaultCookie('theme', DEFAULT_THEME, event);

	// default theme preference, reduced motion
	// const evt = getRequestEvent();

	// evt?.response.headers.set(
	// 	"Accept-CH",
	// 	"Sec-CH-Prefers-Color-Scheme, Sec-CH-Prefers-Reduced-Motion",
	// );
	// console.log(evt?.request.headers);

	return (
		<StartServer
			document={({ assets, children, scripts }) => (
				<html lang={lang} class={`${theme} overscroll-none`}>
					<head>
						<title>Valerio Pescatori - Frontend Engineer</title>
						{/* Description, keywords, canonical url */}
						<meta
							name="description"
							content="Portfolio di Valerio Pescatori, Frontend Engineer specializzato in React, Angular e UI moderne. Scopri progetti, esperienze e contatti."
						/>

						<meta
							name="keywords"
							content="Valerio Pescatori, Frontend Engineer, React Developer, Angular, UI Developer, Web Developer"
						/>
						<link rel="canonical" href="https://valeriopescatori.dev/" />

						{/* OG */}
						<meta
							property="og:title"
							content="Valerio Pescatori - Frontend Engineer"
						/>
						<meta
							property="og:description"
							content="Frontend Engineer specializzato in React, Next.js e UI moderne. Scopri i miei progetti e la mia esperienza."
						/>
						<meta
							property="og:image"
							content="https://valeriopescatori.dev/og-image.jpg"
						/>
						<meta property="og:url" content="https://valeriopescatori.dev/" />
						<meta property="og:type" content="website" />
						<meta property="og:site_name" content="Valerio Pescatori" />

						{/* Twitter */}
						<meta name="twitter:card" content="summary_large_image" />
						<meta
							name="twitter:title"
							content="Valerio Pescatori - Frontend Engineer"
						/>
						<meta
							name="twitter:description"
							content="Portfolio di Valerio Pescatori, Frontend Engineer specializzato in React e UI moderne."
						/>
						<meta
							name="twitter:image"
							content="https://valeriopescatori.dev/og-image.jpg"
						/>

						{/* Other */}

						<meta charset="utf-8" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						<link rel="icon" href="/favicon.ico" />
						{assets}
					</head>
					<body>
						<h1 class="sr-only">Valerio Pescatori</h1>
						<h2 class="sr-only">
							Frontend Engineer specializzato in React, Angular, Next.js
						</h2>
						<div id="app">{children}</div>
						{scripts}
					</body>
				</html>
			)}
		/>
	);
});

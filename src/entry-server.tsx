// @refresh reload
import type { FlavorName } from '@catppuccin/palette';
import { StartServer, createHandler } from '@solidjs/start/server';
import { detectLocale } from 'typesafe-i18n/detectors';
import { locales } from './i18n/i18n-util';
import { handleDefaultCookie } from './utils/handleDefaultCookie';

const DEFAULT_THEME: FlavorName = 'mocha';

export default createHandler((event) => {
	const lang = handleDefaultCookie('lang', detectLocale('en', locales), event);
	handleDefaultCookie('theme', DEFAULT_THEME, event);

	return (
		<StartServer
			document={({ assets, children, scripts }) => (
				<html lang={lang}>
					<head>
						<meta charset="utf-8" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						<link rel="icon" href="/favicon.ico" />
						{assets}
					</head>
					<body>
						<div id="app">{children}</div>
						{scripts}
					</body>
				</html>
			)}
		/>
	);
});

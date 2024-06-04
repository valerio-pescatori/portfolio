// @refresh reload
import { StartServer, createHandler } from '@solidjs/start/server';
import { parse } from 'accept-language-parser';
import { getCookie } from '../utils/getCookie';
import type { Locales } from './i18n/i18n-types';
import { locales } from './i18n/i18n-util';

export default createHandler((context) => {
	let lang: string;
	const cookie = getCookie('lang');
	if (cookie) {
		lang = cookie;
	} else {
		const languanges = context.request.headers.get('accept-language');
		const locale = ((languanges && parse(languanges)[0]?.code) ||
			'en') as Locales;
		lang = locales.includes(locale) ? locale : 'en';
		context.locals = {
			lang,
		};
	}

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

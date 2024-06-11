import type { PageEvent } from '@solidjs/start/server';
import { appendHeader, getCookie } from 'vinxi/http';

export const handleDefaultCookie = (
	key: string,
	defaultValue: string,
	event: PageEvent,
) => {
	let value = getCookie(event.nativeEvent, key);

	if (!value) {
		value = defaultValue;
		appendHeader(
			event.nativeEvent,
			'Set-Cookie',
			`${key}=${value}; Max-Age=${1000 * 60 * 60 * 24 * 30 * 12}`,
		);
	}
	event.locals = {
		...event.locals,
		[key]: value,
	};

	return value;
};

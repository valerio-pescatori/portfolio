import { getRequestEvent } from 'solid-js/web';

export const getCookie = (key: string) => {
	const RE = new RegExp(`${key}=(\\w+)`);
	let cookies: string | null | undefined;
	if (typeof window === 'undefined') {
		const reqEvt = getRequestEvent();
		cookies = reqEvt?.request.headers.get('Cookie');
	} else {
		cookies = document.cookie;
	}
	const matched = cookies?.match(RE)?.[1];
	return matched;
};

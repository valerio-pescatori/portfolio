import { isServer } from 'solid-js/web';

export const setClientCookie = <T extends string>(
	key: string,
	value: string,
): T | undefined => {
	if (isServer) return;
	document.cookie = `${key} ${value}`;
};

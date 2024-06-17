import { getRequestEvent, isServer } from 'solid-js/web';
import { getCookie as vinxiGetCookie } from 'vinxi/http';
import { getClientCookie } from './getClientCookie';

export const getCookie = (key: string) => {
	if (isServer) {
		const req = getRequestEvent();
		if (!req) return;
		return vinxiGetCookie(req.nativeEvent, key);
	}
	return getClientCookie(key);
};

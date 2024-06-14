import { getRequestEvent, isServer } from 'solid-js/web';
import { setCookie as vinxiSetCookie } from 'vinxi/http';

export const setCookie = (key: string, value: string) => {
	if (isServer) {
		const req = getRequestEvent();
		if (!req) return;
		vinxiSetCookie(req.nativeEvent, key, value);
	}
};

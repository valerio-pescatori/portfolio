import { parse } from "accept-language-parser";
import { getRequestEvent } from "solid-js/web";
import { getCookie } from "./getCookie";

export const getUserLanguage = () => {
	const cookie = getCookie("lang");
	if (cookie) return cookie;
	if (typeof window === "undefined") {
		const reqEvt = getRequestEvent();
		const lang = reqEvt?.locals["lang"] || "en";
		reqEvt?.response.headers.set(
			"Set-Cookie",
			`lang=${lang}; Max-Age=${1000 * 60 * 60 * 24 * 30 * 12}`
		);
		return lang;
	}
	const lang = parse(navigator.language)[0]?.code || "en";
	return lang;
};

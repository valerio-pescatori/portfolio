export const getClientCookie = <T extends string>(
	key: string,
): T | undefined => {
	if (typeof document === 'undefined') return;
	const cookie = document.cookie;
	if (!cookie) return;
	const cookies = cookie.split('; ');
	return cookies.find((c) => c.startsWith(`${key}=`))?.split('=')[1] as
		| T
		| undefined;
};

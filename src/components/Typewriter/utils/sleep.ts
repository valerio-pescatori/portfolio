export const sleep = (ms: number) =>
	new Promise<NodeJS.Timeout>((r) => setTimeout(r, ms));

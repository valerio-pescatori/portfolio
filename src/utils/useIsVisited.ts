import { useLocation } from '@solidjs/router';
import { onCleanup } from 'solid-js';
import { routes, setRoutes } from '~/stores/routeStore';

export const useIsVisited = () => {
	const location = useLocation();
	const matchedRoute = routes[location.pathname] ?? false;

	onCleanup(() => {
		setRoutes(location.pathname, () => true);
	});

	return matchedRoute;
};

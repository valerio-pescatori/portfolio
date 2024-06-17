import { createStore } from 'solid-js/store';

export const [routes, setRoutes] = createStore<Record<string, boolean>>({});

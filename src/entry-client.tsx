// @refresh reload
import { StartClient, mount } from '@solidjs/start/client';

// biome-ignore lint/style/noNonNullAssertion: solid's boilerplate :)
mount(() => <StartClient />, document.getElementById('app')!);

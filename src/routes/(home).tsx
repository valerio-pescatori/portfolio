import { Show, createEffect, createSignal } from 'solid-js';
import Typewriter from '~/components/Typewriter/Typewriter';
import { useI18nContext } from '~/i18n/i18n-solid';
import type { Locales } from '~/i18n/i18n-types';

export default function Home() {
	const { LL, locale } = useI18nContext();
	const [renderSub, setRenderSub] = createSignal(false);

	createEffect<Locales>((prevLocale) => {
		if (prevLocale !== locale()) setRenderSub(false);
		return locale();
	});

	return (
		<main class="text-center p-4 bg-base grow">
			<h1 class="max-6-xs text-6xl font-thin my-16">
				<Typewriter
					text={LL().hi({ name: 'Valerio' })}
					onAnimationEnd={() => setRenderSub(true)}
				/>
			</h1>
			<Show when={renderSub()}>
				<h2 class="text-subtext1">
					<Typewriter text={LL().about()} maxTimeout={100} />
				</h2>
			</Show>
		</main>
	);
}

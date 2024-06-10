import { Show, createEffect, createSignal } from 'solid-js';
import Typewriter from '~/components/Typewriter/Typewriter';
import { useI18nContext } from '~/i18n/i18n-solid';
import type { Locales } from '~/i18n/i18n-types';

export default function Home() {
	const { LL, locale } = useI18nContext();
	const [renderSub, setRenderSub] = createSignal(false);
	const [renderList, setRenderList] = createSignal(false);

	createEffect<Locales>((prevLocale) => {
		if (prevLocale !== locale()) setRenderSub(false);
		return locale();
	});

	return (
		<div class="text-left mx-auto">
			{/* Presentation */}
			<h1 class="text-6xl font-thin my-16">
				<Typewriter
					text={LL().hi({ name: 'Valerio' })}
					onAnimationEnd={() => setRenderSub(true)}
				/>
			</h1>
			<Show when={renderSub()}>
				<h2 class="text-subtext1">
					<Typewriter
						text={LL().about()}
						maxTimeout={25}
						onAnimationEnd={() => setRenderList(true)}
					/>
				</h2>
			</Show>
			{/* Nav Section */}
			<nav>
				<ul class="mt-8 list-decimal list-inside">
					<li>
						<a href="/whoami">{LL().list.whoAmI()}</a>
					</li>
					<li>
						<a href="/contacts">{LL().list.contacts()}</a>
					</li>
					<li>
						<a href="/thingsivedone">{LL().list.thingsIveDone()}</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

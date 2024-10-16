import { Show, createEffect, createSignal } from 'solid-js';
import Typewriter from '~/components/Typewriter/Typewriter';
import { useI18nContext } from '~/i18n/i18n-solid';
import type { Locales } from '~/i18n/i18n-types';
import { useIsVisited } from '~/utils/useIsVisited';

export default function Home() {
	const { LL, locale } = useI18nContext();
	const [renderSub, setRenderSub] = createSignal(false);
	const [renderList, setRenderList] = createSignal(false);
	const isVisited = useIsVisited();

	createEffect<Locales>((prevLocale) => {
		if (prevLocale !== locale()) setRenderSub(false);
		return locale();
	});

	return (
		<div class="text-left mx-auto grid grid-rows-home-grid">
			{/* Presentation */}
			<h1 class="text-4xl md:text-5xl font-thin">
				<Typewriter
					disableAnimation={isVisited}
					text={LL().hi({ name: 'Valerio' })}
					onAnimationEnd={() => setRenderSub(true)}
				/>
			</h1>
			<Show when={renderSub()} fallback={<span aria-busy />}>
				<h2 class="text-subtext1">
					<Typewriter
						disableAnimation={isVisited}
						text={LL().about()}
						onAnimationEnd={() => {
							setRenderList(true);
						}}
						drawCharRandomness={{
							maxTimeout: 25,
							typoRate: 0,
						}}
					/>
				</h2>
			</Show>
			{/* Nav Section */}
			<nav
				aria-busy={!renderList()}
				class="transition-opacity delay-500 mt-4 sm:mt-0"
				classList={{
					'opacity-0 pointer-events-none': !renderList() && !isVisited,
				}}
			>
				<ul class="mt-768 list-decimal list-inside">
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

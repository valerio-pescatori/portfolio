import { For, createSignal } from 'solid-js';
import Card from '../../components/Card';
import Typewriter from '../../components/Typewriter/TypewriterIsolated';
import { typewriterFast } from '../../components/Typewriter/constants/typewriterConfigs';
import { useI18nContext } from '../../i18n/i18n-solid';
import { useIsVisited } from '../../utils/useIsVisited';

export default function ThingsIveDone() {
	const { LL } = useI18nContext();
	const isVisited = useIsVisited();
	const [isClickable, setIsClickable] = createSignal(false);

	const cards = Object.values(LL().thingsivedone.cards);

	return (
		<section>
			<h1 class="text-2xl md:text-4xl font-thin">
				<Typewriter
					disableAnimation={isVisited}
					text={LL().thingsivedone.title()}
					drawCharRandomness={typewriterFast}
					onAnimationEnd={() => setIsClickable(true)}
				/>
			</h1>
			<div
				class="my-16 relative flex flex-col gap-8 transition-opacity delay-300"
				classList={{ 'pointer-events-none opacity-0': !isClickable() }}
			>
				<For each={cards}>
					{(card) => (
						<Card title={card.title()} description={card.description()} />
					)}
				</For>
			</div>
		</section>
	);
}

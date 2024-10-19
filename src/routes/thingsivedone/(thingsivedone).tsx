import { For } from 'solid-js';
import Card from '../../components/Card';
import Typewriter from '../../components/Typewriter/TypewriterIsolated';
import { typewriterFast } from '../../components/Typewriter/constants/typewriterConfigs';
import { useI18nContext } from '../../i18n/i18n-solid';
import { useIsVisited } from '../../utils/useIsVisited';

export default function ThingsIveDone() {
	const { LL } = useI18nContext();
	const isVisited = useIsVisited();

	const cards = Object.values(LL().thingsivedone.cards);

	return (
		<section>
			<h1 class="text-2xl md:text-4xl font-thin">
				<Typewriter
					disableAnimation={isVisited}
					text={LL().thingsivedone.title()}
					drawCharRandomness={typewriterFast}
				/>
			</h1>
			<div class="mt-16 flex flex-col gap-8">
				<For each={cards}>
					{(card) => (
						<Card title={card.title()} description={card.description()} />
					)}
				</For>
			</div>
		</section>
	);
}

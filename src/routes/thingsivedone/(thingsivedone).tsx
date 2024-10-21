import { For, createSignal } from 'solid-js';
import Card from '../../components/Card';
import Typewriter from '../../components/Typewriter/TypewriterIsolated';
import { typewriterFast } from '../../components/Typewriter/constants/typewriterConfigs';
import { useI18nContext } from '../../i18n/i18n-solid';
import { useIsVisited } from '../../utils/useIsVisited';

export default function ThingsIveDone() {
	const { LL } = useI18nContext();
	const isVisited = useIsVisited();
	const [currentActiveCard, setCurrentActiveCard] = createSignal<number | null>(
		null,
	);

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
			<div class="mt-16 relative">
				<For each={cards}>
					{(card, i) => (
						<Card
							title={card.title()}
							index={i}
							description={card.description()}
							isActive={currentActiveCard() === i()}
							setIsActive={setCurrentActiveCard}
						/>
					)}
				</For>
			</div>
		</section>
	);
}

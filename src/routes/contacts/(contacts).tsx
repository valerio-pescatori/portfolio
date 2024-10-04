import { createSignal } from 'solid-js';
import Icon from '../../components/Icon/Icon';
import { IconsEnum } from '../../components/Icon/types/IconsEnum';
import Typewriter from '../../components/Typewriter/Typewriter';
import { useI18nContext } from '../../i18n/i18n-solid';
import { typewriterFast } from '../../utils/typewriterConfigs';
import { useIsVisited } from '../../utils/useIsVisited';

export default function Contacts() {
	const [render, setRender] = createSignal(false);
	const { LL } = useI18nContext();
	const isVisited = useIsVisited();

	return (
		<section class="flex flex-col gap-8">
			<h1 class="text-4xl font-thin">
				<Typewriter
					disableAnimation={isVisited}
					text={LL().contacts.title()}
					drawCharRandomness={typewriterFast}
					onAnimationEnd={() => setRender(true)}
				/>
			</h1>

			<ul
				class="transition-opacity duration-700 delay-100 flex flex-col gap-2"
				classList={{ 'opacity-0': !render() && !isVisited }}
			>
				<li class="flex items-center gap-4">
					<Icon iconName={IconsEnum.GITHUB} /> -
					<a target="blank" href="https://github.com/valerio-pescatori">
						GitHub
					</a>
				</li>
				<li class="flex items-center gap-4">
					<Icon iconName={IconsEnum.LINKEDIN} /> -
					<a
						target="blank"
						href="https://www.linkedin.com/in/valerio-pescatori/"
					>
						LinkedIn
					</a>
				</li>
				<li class="flex items-center gap-4">
					<Icon iconName={IconsEnum.MAIL} /> -
					<a target="blank" href="mailto:pescatorim14@gmail.com">
						pescatorim14@gmail.com
					</a>
				</li>
			</ul>

			<div class="mt-4 flex justify-center items-center">
				<button
					class="flex shadow-lg bg-surface0 rounded-lg pl-2 gap-2 items-center justify-center transition-all hover:scale-105 active:scale-95"
					type="button"
				>
					<div class="px-4">
						<Icon iconName={IconsEnum.FILE} />
					</div>
					<div class="bg-surface1 py-2 rounded-r-lg">
						<Icon iconName={IconsEnum.CHEVRON_DOWN} />
					</div>
				</button>
			</div>
		</section>
	);
}

import { createMemo, createSignal } from 'solid-js';
import Icon from '~/components/Icon/Icon';
import { IconsEnum } from '~/components/Icon/types/IconsEnum';
import Typewriter from '~/components/Typewriter/Typewriter';
import { useI18nContext } from '~/i18n/i18n-solid';
import { useIsVisited } from '~/utils/useIsVisited';

export default function Contacts() {
	const [render, setRender] = createSignal(false);
	const { LL } = useI18nContext();
	const isVisited = useIsVisited();

	const opacityClassList = createMemo(() => ({
		'opacity-0': !render() && !isVisited,
	}));

	return (
		<section class="flex flex-col gap-16">
			<h1 class="text-4xl font-thin">
				<Typewriter
					disableAnimation={isVisited}
					text={LL().contacts.title()}
					onAnimationEnd={() => setRender(true)}
				/>
			</h1>

			<div
				class="transition-opacity delay-300 flex flex-col gap-2"
				classList={opacityClassList()}
			>
				<ul class="flex flex-col gap-2">
					<li class="flex items-center gap-4">
						<Icon iconName={IconsEnum.GITHUB} />
						<a target="blank" href="https://github.com/valerio-pescatori">
							GitHub
						</a>
					</li>
					<li class="flex items-center gap-4">
						<Icon iconName={IconsEnum.LINKEDIN} />
						<a
							target="blank"
							href="https://www.linkedin.com/in/valerio-pescatori/"
						>
							LinkedIn
						</a>
					</li>
					<li class="flex items-center gap-4">
						<Icon iconName={IconsEnum.MAIL} />
						<a target="blank" href="mailto:pescatorim14@gmail.com">
							pescatorim14@gmail.com
						</a>
					</li>
				</ul>
			</div>
			<div class="transition-opacity delay-500" classList={opacityClassList()}>
				<a
					class="inline-flex shadow-lg bg-surface0 rounded-lg px-6 py-2 gap-4 items-center justify-center hover:scale-105 active:scale-95"
					aria-label="Download CV"
					href="Valerio_Pescatori_CV.pdf"
					download="Valerio_Pescatori_CV.pdf"
					type="button"
				>
					<Icon iconName={IconsEnum.DOWNLOAD} />
					Download CV
				</a>
			</div>
		</section>
	);
}

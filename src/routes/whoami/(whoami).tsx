import { createSignal } from 'solid-js';
import TranslateMarkdown from '~/components/TranslateMarkdown';
import Typewriter from '~/components/Typewriter/Typewriter';
import { useI18nContext } from '~/i18n/i18n-solid';
import { useIsVisited } from '~/utils/useIsVisited';
import { typewriterFast } from '../../utils/typewriterConfigs';

export default function Whoami() {
	const [render, setRender] = createSignal(false);
	const { LL } = useI18nContext();
	const isVisited = useIsVisited();

	const classes = (baseClass?: string) => ({
		class: `transition-opacity ${baseClass}`,
		classList: { 'opacity-0': !render() && !isVisited },
	});

	return (
		<div class="flex flex-col gap-4">
			<h1 class="text-4xl font-thin">
				<Typewriter
					disableAnimation={isVisited}
					text={LL().whoami.title()}
					drawCharRandomness={typewriterFast}
					onAnimationEnd={() => {
						setRender(true);
					}}
				/>
			</h1>

			<TranslateMarkdown
				as="p"
				message={LL().whoami.par1()}
				{...classes('delay-100')}
			/>

			<TranslateMarkdown
				as="p"
				message={LL().whoami.par2()}
				{...classes('delay-100')}
			/>

			<p {...classes('delay-500')}>{LL().whoami.par3()}</p>

			<ul {...classes('list-inside list-disc transition-opacity delay-1000')}>
				<li>Typescript</li>
				<li>React 18</li>
				<li>Vite</li>
				<li>Angular 15+</li>
				<li>Tailwind</li>
				<li>Linting + Git hooks</li>
			</ul>
		</div>
	);
}

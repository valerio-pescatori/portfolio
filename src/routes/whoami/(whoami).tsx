import TranslateMarkdown from '~/components/TranslateMarkdown';
import { useI18nContext } from '~/i18n/i18n-solid';

export default function Whoami() {
	const { LL } = useI18nContext();
	return (
		<main class="flex flex-col gap-4">
			<h1 class="text-4xl font-thin">{LL().whoami.title()}</h1>
			<p>
				<TranslateMarkdown message={LL().whoami.par1()} />
			</p>
			<p>{LL().whoami.par2()}</p>
			<ul class="list-inside list-disc">
				<li>Typescript</li>
				<li>React 18</li>
				<li>Vite</li>
				<li>Angular 13+</li>
				<li>Tailwind</li>
				<li>Linting + Git hooks</li>
			</ul>
		</main>
	);
}

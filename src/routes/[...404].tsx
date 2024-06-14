import { useI18nContext } from '~/i18n/i18n-solid';

export default function NotFound() {
	const { LL } = useI18nContext();
	return (
		<div class="flex justify-center items-center flex-col">
			<h1 class="text-6xl font-thin uppercase">{LL()[404].error()}</h1>
			<p class="mt-4">
				{LL()[404].textPrefix()}
				<a class="animate-pulse" href="/">
					{LL()[404].textInfix()}
				</a>
				{LL()[404].testPostfix()}
			</p>
		</div>
	);
}

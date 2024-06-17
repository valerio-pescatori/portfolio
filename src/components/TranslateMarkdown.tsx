import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';
import { Dynamic } from 'solid-js/web';
import type { LocalizedString } from 'typesafe-i18n';

type WrapTranslationProps = {
	message: LocalizedString;
	as?: keyof HTMLElementTagNameMap;
	class?: string;
	classList?: Record<string, boolean>;
};

export default function TranslateMarkdown(props: WrapTranslationProps) {
	const as: keyof HTMLElementTagNameMap = props.as ?? 'span';
	const parsed = marked.parseInline(props.message, {
		async: false,
	}) as string;
	const message = DOMPurify.sanitize(parsed);

	return (
		<Dynamic
			component={as}
			innerHTML={message}
			class={props.class}
			classList={props.classList}
		/>
	);
}

import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';
import type { LocalizedString } from 'typesafe-i18n';

type WrapTranslationProps = {
	message: LocalizedString;
};

export default function TranslateMarkdown(props: WrapTranslationProps) {
	const parsed = marked.parse(props.message, {
		async: false,
	}) as string;
	const message = DOMPurify.sanitize(parsed);

	return <span innerHTML={message} />;
}

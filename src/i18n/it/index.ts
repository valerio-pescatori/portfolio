import type { Translation } from '../i18n-types.js';

const it = {
	hi: 'Ciao, sono {name} :)',
	about: 'Cosa vuoi sapere su di me?',
	list: {
		whoAmI: 'Chi sei?',
		contacts: 'Dove posso contattarti?',
		thingsIveDone: 'Mostrami qualcosa che hai fatto'
	},
	404: {
		error: '404 - Not Found',
		textPrefix: 'Torna a ',
		textInfix: 'casa',
		testPostfix: ' :)'
	},
	c: 'Sono un Frontend Engineer con 2 anni di esperienza e una passione smisurata per la qualità del codice. B. Sc. in Informatica, impegnato ogni giorno nell\'imparare cose nuove',


} satisfies Translation;

export default it;

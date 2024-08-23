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
	whoami:  {
		title: "Mi chiamo Valerio Pescatori e sono un Frontend Engineer",
		par1: "Figlio del web, sono _sempre_ stato appassionato di informatica e programamzione. Ho conseguito una Laurea Triennale in Informatica presso _Sapienza, Università di Roma_.",
		par2: "Ho lavorato per Accenture per due anni: ho partecipato a diversi progetti di grandi dimensioni prendendo decisioni tecniche e architetturali, implementando nuove funzionalità. Tra i tool che ho utilizato di più ci sono:",
	},

} satisfies Translation;

export default it;

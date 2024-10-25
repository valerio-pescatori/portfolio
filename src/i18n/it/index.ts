import type { Translation } from '../i18n-types.js';

const it = {
	hi: 'Ciao, sono {name} :)',
	about: 'Cosa vuoi sapere su di me?',
	list: {
		whoAmI: 'Chi sei?',
		contacts: 'Dove posso contattarti?',
		thingsIveDone: 'Mostrami qualcosa che hai fatto',
	},
	404: {
		error: '404 - Not Found',
		textPrefix: 'Torna a ',
		textInfix: 'casa',
		testPostfix: ' :)',
	},
	whoami: {
		title: 'Mi chiamo Valerio Pescatori e sono un Frontend Engineer',
		par1: 'Figlio del web, sono _sempre_ stato appassionato di informatica e programamzione. Ho conseguito una Laurea Triennale in Informatica presso _Sapienza, Università di Roma_.',
		par2: 'Durante il mio persorso di studi ho imparato molto e ho avuto modo di sviluppare ed un approccio _"scientifico"_ alla risoluzione dei problemi tecnici, alla realizzazione di un\'architettura in ottica __scalabile__, __user-friendly__ ed __efficiente__.',
		par3: 'Ho lavorato per Accenture per due anni: ho partecipato a diversi progetti di grandi dimensioni prendendo decisioni tecniche e architetturali, implementando nuove funzionalità. Tra i tool che ho utilizato di più ci sono:',
	},
	contacts: {
		title: 'Puoi trovarmi qui:',
	},
	thingsivedone: {
		title: 'Questi sono alcuni dei miei progetti più recenti',
		dialogAriaLabel: 'Dettaglio card: {title}',
		cards: [
			{
				title: 'Portfolio personale',
				description: `
				In seguito all'esperienza fatta in ambito professionale ho deciso di ri-sviluppare il mio portfolio, includendo nuove tecnologie per implementare un'architettura robusta, pulita, orientata all'automazione.
				
				Inanzitutto ho voluto testare un nuovo meta-framework: **SolidStart**. Nato da una libreria che ho amato fin subito per il suo approccio innovativo che ha rivoluzionato l'ecosistema JavaScript mondiale attraverso l'utilizzo degli ormai famosi _signals_ e attraverso la rimozione di sovrastrutture spesso non necessarie come il Virtual DOM.

				Per l'aspetto CSS ho utilizzato **TailwindCSS**, sicuramente tra i framework migliori per la gestione dello stile, comodissimo con le sue classi di utility e leggerissimo grazie all'utilizzo di PurgeCSS per spedire solo il CSS necessario al render della pagina.

				Per tenere il codice pulito e ben organizzato ho utilizzato **BiomeJS**, un tool all-in-one scritto in _Rust_ che sostituisce in un colpo solo sia ESLint che Prettier, in quando agisce sia da linter che da formatter. Ho voluto provare Biome per testare con mano la velocità di Rust.

				Come git hook manager ho usato **Lefthook**, tool innovativo scritto in GO, facilissimo da configurare e velocissimo nell'esecuzione delle pipeline, accoppiato a Biome permette di eseguire linting e formatting al commit in pochissimi millisecondi.
				`,
			},
			{
				title: 'Portfolio',
				description: 'test',
			},
			{
				title: 'Portfolio',
				description: 'test',
			},
			{
				title: 'Portfolio',
				description: 'test',
			},
		],
	},
} satisfies Translation;

export default it;

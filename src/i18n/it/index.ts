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
				In seguito all'esperienza fatta in ambito professionale ho deciso di ri-sviluppare il mio portfolio includendo nuove tecnologie per implementare un'architettura robusta, pulita, orientata all'automazione.
				
				Inanzitutto ho voluto testare un nuovo meta-framework: **SolidStart**. Nato da una libreria che ho amato fin subito per il suo approccio innovativo che ha rivoluzionato l'ecosistema JavaScript mondiale attraverso l'utilizzo degli ormai famosi _signals_ e attraverso la rimozione di sovrastrutture spesso non necessarie come il Virtual DOM.

				Per lo stile ho utilizzato **TailwindCSS**. Sicuramente tra i framework migliori per la gestione dello stile, comodissimo con le sue classi di utility e leggerissimo grazie all'utilizzo di PurgeCSS per spedire solo il CSS necessario al render della pagina.

				Per tenere il codice pulito e ben organizzato ho utilizzato **BiomeJS**, un tool all-in-one scritto in *Rust* che sostituisce in un colpo solo sia ESLint che Prettier, in quando agisce sia da linter che da formatter. Ho voluto provare Biome per testare con mano la velocità di Rust.

				Come git hook manager ho usato **Lefthook**: tool innovativo scritto in *Go*, facilissimo da configurare e velocissimo nell'esecuzione delle pipeline, accoppiato a Biome permette di eseguire linting e formatting al commit in pochissimi millisecondi.

				Il progetto è open-source e disponibile *[sul mio GitHub](https://github.com/valerio-pescatori/portfolio)* :).
				`,
			},
			{
				title: 'Impostor Game',
				description: `
				Si tratta di un (apparentemente) semplice gioco mobile/desktop da giocare in compagnia: uno tra i giocatori sarà l'impostore e gli altri dovranno scoprirlo ponendosi domande a vicena.
				
				Per la realizzazione insieme a due amici abbiamo deciso di sperimentare un nuovo framework chiamato **Tauri**, il quale permette di sviluppare applicazioni cross-device (sia mobile che desktop) integrando un qualsiasi framework in grado di generare HTML, CSS e JavaScript.
				
				Nel nostro caso abbiamo optato per **SvelteKit** con **Svelte 5**, per testare le novità introdotte in quest'ultima versione, tra cui ovviamente le runes.
				
				Per quanto riguarda lo stile abbiamo scelto **TailwindCSS 4** (anche se ancora in versione alpha), anche qui per toccare con mano le nuove funzionalità tra cui la config basata interamente su variabili CSS.
				
				Non può mancare anche qui **Lefthook** accompagnato da **Eslint** e **Prettier**.
				
				Questo progetto non è open-source, ma sarà disponibile sugli app store android e iOS appena terminati gli sviluppi.
				`,
			},
			{
				title: 'Galaxy Generator',
				description: `
				Piccolo progetto in **ThreeJs** svolto mentre seguivo il corso *ThreeJs Journey* di Bruno Simon.

				Ho rispolverato parecchi concetti sulla computer grafica tra cui textures, materiali geometrie, shaders, trigonometria e molto altro.

				Si tratta di un generatore di galassie 3D personalizzabile, puoi provarlo *[qui](https://galaxy-generator-blond-nu.vercel.app/)*.

				*(N.B: non è pensato per funzionare su mobile!)*
				
				Il progetto è open-source e disponibile *[sul mio GitHub](https://github.com/valerio-pescatori/galaxy-generator)* :).
				`,
			},
			{
				title: 'Person Re-Id',
				description: `
				Progetto svolto per la tesi di laurea presso la *Sapienza, Università di Roma*.
				
				Si tratta di un'applicazione POC di machine learning in grado di re-identificare persone note attraverso caratteristiche della camminata dell'individuo. 
				
				Utilizza complesse metriche per calcolare diversi aspetti della camminata di ogni individuo, generando una serie di parametri che permettono al modello di machine learning di calcolare la somiglianza tra i parametri in input e quelli su cui il modello è stato allenato.

				Sono stati testati sei diversi modelli di rete neurale per l'apprendimento: *DeepMLP, DeepMLP2, RNN, TCN, GRU e LSTM*.

				I parametri di camminata sono stati estratti tramite una simulazione su **Unity**, i dati sono poi stati salvati e letti in input tramite uno script in **Python** che li dava infine in pasto al modello di rete neurale realizzato con **PyTorch**. I risultati sono stati poi schematizzati e renderizzati tramite **pyplotlib**.
				
				Il progetto è open-source e disponibile *[sul mio GitHub](https://github.com/valerio-pescatori/person_re-id/)* :).
				`,
			},
		],
	},
} satisfies Translation;

export default it;

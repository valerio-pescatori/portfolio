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
		par1: 'Appassionato di informatica e programmazione fin da piccolo, ho conseguito una Laurea Triennale in Informatica presso _Sapienza, Università di Roma_, costruendo solide fondamenta tecniche e metodologiche.',
		par2: 'Il mio percorso di studi mi ha permesso di sviluppare un approccio _"scientifico"_ alla risoluzione dei problemi tecnici e alla progettazione di architetture __scalabili__, __user-friendly__ ed __efficienti__, con particolare attenzione alla qualità del codice e alle best practice.',
		par3: "In Accenture ho maturato due anni di esperienza su progetti enterprise di grande complessità, assumendo responsabilità nella definizione di scelte tecniche e architetturali, nel coordinamento con i team e nell'implementazione di funzionalità critiche. Tra i principali tool utilizzati:",
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
				title: 'Portfolio Next.js multilingua per tatuatore',
				description: `
				Ho realizzato un sito portfolio in Next.js (App Router) con pagine principali e sezioni dedicate (home, portfolio, prenotazione).
				
				Ho integrato l’internazionalizzazione con routing per lingua e file di traduzione (IT/EN) mantenendo layout e contenuti coerenti.
				
				Ho curato componenti UI riusabili (header, testi/link animati, carousel) e la gestione delle immagini del portfolio.
				
				Ho impostato basi SEO tecniche (sitemap/robots) e utilità di supporto (hook, throttle, gestione locale) per performance e manutenibilità.
				
				Il progetto è disponibile *[su GitHub](https://github.com/valerio-pescatori/nat-portfolio)* e online *[su nat-tatss.ink](https://www.nat-tatss.ink/)*.
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

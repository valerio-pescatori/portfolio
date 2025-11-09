# 🌐 valeriopescatori.dev

Sito personale di **Valerio Pescatori**, Frontend Engineer.  
Realizzato con un approccio moderno e _developer-friendly_, utilizzando **SolidStart**, **TypeScript**, e un ecosistema di tool che garantisce qualità, coerenza e automazione del flusso di sviluppo.

## 🚀 Tech Stack

- ⚛️ **[SolidStart](https://start.solidjs.com/)** — framework web full-stack basato su SolidJS
- 🌍 **[typesafe-i18n](https://github.com/ivanhofer/typesafe-i18n)** — localizzazione typesafe
- 🎨 **[Tailwind CSS](https://tailwindcss.com/)** — design system utility-first
- 🧹 **[Biome](https://biomejs.dev/)** — linting, formatting e type-checking unificati
- 🔧 **[Lefthook](https://github.com/evilmartians/lefthook)** — gestione degli hook Git per CI locale
- 📝 **[commitlint](https://commitlint.js.org/)** — validazione dei messaggi di commit secondo convenzioni semantiche
- 🚢 **[release-please](https://github.com/googleapis/release-please)** — gestione automatica di changelog e release

## 🧩 Funzionalità principali

- **Internazionalizzazione typesafe** con supporto multilingua
- **Build ottimizzata** e deploy continuo su **Vercel**
- **Linting e formatting automatici** tramite Biome e Lefthook
- **Changelog e versioning automatico** con release-please
- **Comandi Git protetti** da commitlint e hook pre-commit

## 🧰 Workflow di sviluppo

- Tutti i commit seguono la convenzione **[Conventional Commits](https://www.conventionalcommits.org/)** per garantire chiarezza e automazione nel versionamento.
- Gli hook gestiti da **Lefthook** eseguono controlli automatici su lint, test e formattazione prima di ogni commit o push.
- Le release vengono generate automaticamente da **release-please**, che aggiorna la versione del progetto e crea un changelog coerente.
- Il deploy è completamente automatizzato su **Vercel**, con build ottimizzate tramite **SolidStart**.

## 📦 Deploy

Il progetto è ospitato su **[Vercel](https://vercel.com/)**.  
Ogni merge sul branch `main` attiva una nuova build e il deploy automatico in produzione.

## 🧑‍💻 Autore

**Valerio Pescatori**  
Frontend Engineer

- 🌐 [valeriopescatori.dev](https://valerio-pescatori.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/valerio-pescatori/)
- 🐙 [GitHub](https://github.com/valerio-pescatori)
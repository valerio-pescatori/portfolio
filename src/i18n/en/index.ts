import type { BaseTranslation } from '../i18n-types.js';

const en = {
	hi: "Hi, I'm {name: string} :)",
	about: 'What do you want to know about me?',
	list: {
		whoAmI: 'Who are you?',
		contacts: 'Where can I contact you?',
		thingsIveDone: "Show me something you've done",
	},
	404: {
		error: '404 - Not Found',
		textPrefix: 'Go back ',
		textInfix: 'home',
		testPostfix: ' :)',
	},
	whoami: {
		title: 'My name is Valerio Pescatori and I am a Frontend Engineer',
		par1: "Passionate about computer science and programming from an early age, I earned a Bachelor's Degree in Computer Science from _Sapienza, University of Rome_, building a solid technical and methodological foundation.",
		par2: 'My academic journey enabled me to develop a _"scientific"_ approach to solving technical problems and designing __scalable__, __user-friendly__, and __efficient__ architectures, with particular attention to code quality and best practices.',
		par3: 'At Accenture, I gained two years of experience on large-scale enterprise projects, taking responsibility for technical and architectural decisions, coordinating with teams, and implementing critical features. Among the main tools I used:',
	},
	contacts: {
		title: 'You can find me here:',
	},
	thingsivedone: {
		title: 'Here are some of my recent projects',
		dialogAriaLabel: 'Card detail: {title: string}',
		cards: [
			{
				title: 'Portfolio',
				description: `
				After gaining experience in the professional field, I decided to redevelop my portfolio incorporating new technologies to implement a robust, clean, automation-oriented architecture.

				First and foremost, I wanted to test a new meta-framework: **SolidStart**. It originates from a library I immediately loved for its innovative approach that revolutionized the JavaScript ecosystem through the use of the now-famous signals and by removing often unnecessary superstructures like the Virtual DOM.

				For styling, I used **TailwindCSS**. undoubtedly one of the best frameworks for style management, highly convenient with its utility classes, and incredibly lightweight thanks to PurgeCSS, which only sends the necessary CSS for page rendering.

				To keep the code clean and well-organized, I used **BiomeJS**, an all-in-one tool written in *Rust* that replaces both ESLint and Prettier in one go, as it acts as both a linter and a formatter. I wanted to try Biome firsthand to experience Rust’s speed.

				As git hook manager, I used **Lefthook**: an innovative tool written in *Go*, very easy to configure and extremely fast at executing pipelines. Paired with Biome, it enables linting and formatting at commit in just a few milliseconds.

				The project is open-source and available on my *[GitHub](https://github.com/valerio-pescatori/portfolio)* :).`,
			},
			{
				title: 'Impostor Game',
				description: `
				It’s an (apparently) simple mobile/desktop game to be played with friends: one player will be the impostor, and the others will need to figure it out by asking each other questions in turn.

				To develop it, two friends and I decided to experiment with a new framework called **Tauri**, which allows cross-device application development (both mobile and desktop) by integrating any framework capable of generating HTML, CSS, and JavaScript.

				In our case, we chose **SvelteKit** with **Svelte** 5 to test the new features introduced in this latest version, including, of course, runes.

				For styling, we opted for **TailwindCSS 4** (still in alpha version), once again to experience its new features, including the CSS variable-based configuration.

				Here, too, **Lefthook** is used alongside **ESLint** and **Prettier**.

				This project is not open-source, but it will be available on android and iOS app stores once development is complete.`,
			},
			{
				title: 'Galaxy Generator',
				description: `
				A small project in **ThreeJs** I worked on while following Bruno Simon's *ThreeJs Journey* course.

				I revisited several concepts in computer graphics, including textures, materials, geometries, shaders, trigonometry, and more.

				It’s a customizable 3D galaxy generator; you can try it out *[here](https://github.com/valerio-pescatori/galaxy-generator)*.

				*(Note: it’s not designed to work on mobile!)*
				
				The project is open-source and available on my *[GitHub](https://github.com/valerio-pescatori/galaxy-generator)* :).`,
			},
			{
				title: 'Person Re-Id',
				description: `
				A project developed for my thesis at *Sapienza, University of Rome*.

				It’s a POC machine learning application capable of re-identifying known people through gait characteristics.

				It uses complex metrics to calculate various aspects of each individual’s gait, generating a set of parameters that allow the machine learning model to calculate the similarity between the input parameters and those on which the model has been trained.

				Six different neural network models were tested for learning: *DeepMLP, DeepMLP2, RNN, TCN, GRU, and LSTM*.

				The gait parameters were extracted via a simulation on **Unity**, the data was then saved and read as input by a **Python** script, which subsequently fed them to the neural network model built with **PyTorch**. The results were then charted and visualized using **pyplotlib**.

				The project is open-source and available on my *[GitHub](https://github.com/valerio-pescatori/person_re-id)* :).`,
			},
		],
	},
} satisfies BaseTranslation;

export default en;

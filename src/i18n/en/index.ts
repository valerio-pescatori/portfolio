import type { BaseTranslation } from '../i18n-types.js';

const en = {
	hi: "Hi, I'm {name:string} :)",
	about: 'What do you want to know about me?',
	list: {
		whoAmI: 'Who are you?',
		contacts: 'Where can I contact you?',
    thingsIveDone: "Show me something you've done"  
	},
	404: {
		error: '404 - Not Found',
		textPrefix: 'Go back ',
		textInfix: 'home',
		testPostfix: ' :)' 
	},
	whoami:  {
		title: "I'm Valerio Pescatori and I work as a Frontend Engineer",
		par1: "Child of the web, _always_ been passionate about Computer Science and programming. Earned my Bachelor's Degree in Computer Science from _Sapienza University of Rome_.",
		par2: "During my studies I had the chance to learn a lot and to develop a _\"scientific\"_ approach that I use on a daily basis to solve techincal problems, to build __scalable__, __user-friendly__ and __efficient__ architectures.",
		par3: "I've been working for Accenture for the past 2 years: I worked on various large-scale projects taking technical decisions and implementing new features. Among the tool I've used the most important are:",
	},
	contacts: {
		title: "You can find me here:"
	}
} satisfies BaseTranslation;

export default en;

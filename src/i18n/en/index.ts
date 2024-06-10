import type { BaseTranslation } from '../i18n-types.js';

const en = {
	hi: "Hi, I'm {name:string} :)",
	about: 'What do you want to know about me?',
	list: {
		whoAmI: 'Who are you?',
		contacts: 'Where can I contact you?',
    thingsIveDone: "Show me something you've done"  
	},
	c: "I'm a frontend engineer with 2 years of experience with a passion for code quality. B.Sc. in Computer Science, always trying to learn new things.",
} satisfies BaseTranslation;

export default en;

// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'it'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	'404': {
		/**
		 * 4​0​4​ ​-​ ​N​o​t​ ​F​o​u​n​d
		 */
		error: string
		/**
		 * G​o​ ​b​a​c​k​ 
		 */
		textPrefix: string
		/**
		 * h​o​m​e
		 */
		textInfix: string
		/**
		 *  ​:​)
		 */
		testPostfix: string
	}
	/**
	 * H​i​,​ ​I​'​m​ ​{​n​a​m​e​}​ ​:​)
	 * @param {string} name
	 */
	hi: RequiredParams<'name'>
	/**
	 * W​h​a​t​ ​d​o​ ​y​o​u​ ​w​a​n​t​ ​t​o​ ​k​n​o​w​ ​a​b​o​u​t​ ​m​e​?
	 */
	about: string
	list: {
		/**
		 * W​h​o​ ​a​r​e​ ​y​o​u​?
		 */
		whoAmI: string
		/**
		 * W​h​e​r​e​ ​c​a​n​ ​I​ ​c​o​n​t​a​c​t​ ​y​o​u​?
		 */
		contacts: string
		/**
		 * S​h​o​w​ ​m​e​ ​s​o​m​e​t​h​i​n​g​ ​y​o​u​'​v​e​ ​d​o​n​e
		 */
		thingsIveDone: string
	}
	whoami: {
		/**
		 * I​'​m​ ​V​a​l​e​r​i​o​ ​P​e​s​c​a​t​o​r​i​ ​a​n​d​ ​I​ ​w​o​r​k​ ​a​s​ ​a​ ​F​r​o​n​t​e​n​d​ ​E​n​g​i​n​e​e​r
		 */
		title: string
		/**
		 * C​h​i​l​d​ ​o​f​ ​t​h​e​ ​w​e​b​,​ ​_​a​l​w​a​y​s​_​ ​b​e​e​n​ ​p​a​s​s​i​o​n​a​t​e​ ​a​b​o​u​t​ ​C​o​m​p​u​t​e​r​ ​S​c​i​e​n​c​e​ ​a​n​d​ ​p​r​o​g​r​a​m​m​i​n​g​.​ ​E​a​r​n​e​d​ ​m​y​ ​B​a​c​h​e​l​o​r​'​s​ ​D​e​g​r​e​e​ ​i​n​ ​C​o​m​p​u​t​e​r​ ​S​c​i​e​n​c​e​ ​f​r​o​m​ ​_​S​a​p​i​e​n​z​a​ ​U​n​i​v​e​r​s​i​t​y​ ​o​f​ ​R​o​m​e​_​.
		 */
		par1: string
		/**
		 * I​'​v​e​ ​b​e​e​n​ ​w​o​r​k​i​n​g​ ​f​o​r​ ​A​c​c​e​n​t​u​r​e​ ​f​o​r​ ​t​h​e​ ​p​a​s​t​ ​2​ ​y​e​a​r​s​:​ ​I​ ​w​o​r​k​e​d​ ​o​n​ ​v​a​r​i​o​u​s​ ​l​a​r​g​e​-​s​c​a​l​e​ ​p​r​o​j​e​c​t​s​ ​b​y​ ​t​a​k​i​n​g​ ​t​e​c​h​n​i​c​a​l​ ​d​e​c​i​s​i​o​n​s​ ​a​n​d​ ​i​m​p​l​e​m​e​n​t​i​n​g​ ​n​e​w​ ​f​e​a​t​u​r​e​s​.​ ​A​m​o​n​g​ ​t​h​e​ ​t​o​o​l​ ​I​'​v​e​ ​u​s​e​d​ ​t​h​e​ ​m​o​s​t​ ​i​m​p​o​r​t​a​n​t​ ​a​r​e​:
		 */
		par2: string
	}
	contacts: {
		/**
		 * Y​o​u​ ​c​a​n​ ​f​i​n​d​ ​m​e​ ​h​e​r​e​:
		 */
		title: string
	}
}

export type TranslationFunctions = {
	'404': {
		/**
		 * 404 - Not Found
		 */
		error: () => LocalizedString
		/**
		 * Go back 
		 */
		textPrefix: () => LocalizedString
		/**
		 * home
		 */
		textInfix: () => LocalizedString
		/**
		 *  :)
		 */
		testPostfix: () => LocalizedString
	}
	/**
	 * Hi, I'm {name} :)
	 */
	hi: (arg: { name: string }) => LocalizedString
	/**
	 * What do you want to know about me?
	 */
	about: () => LocalizedString
	list: {
		/**
		 * Who are you?
		 */
		whoAmI: () => LocalizedString
		/**
		 * Where can I contact you?
		 */
		contacts: () => LocalizedString
		/**
		 * Show me something you've done
		 */
		thingsIveDone: () => LocalizedString
	}
	whoami: {
		/**
		 * I'm Valerio Pescatori and I work as a Frontend Engineer
		 */
		title: () => LocalizedString
		/**
		 * Child of the web, _always_ been passionate about Computer Science and programming. Earned my Bachelor's Degree in Computer Science from _Sapienza University of Rome_.
		 */
		par1: () => LocalizedString
		/**
		 * I've been working for Accenture for the past 2 years: I worked on various large-scale projects by taking technical decisions and implementing new features. Among the tool I've used the most important are:
		 */
		par2: () => LocalizedString
	}
	contacts: {
		/**
		 * You can find me here:
		 */
		title: () => LocalizedString
	}
}

export type Formatters = {}

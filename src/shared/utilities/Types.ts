import { bugIcon, design, improvement, question } from '../../assets/icons';

export type IssueStatuses = 'open' | 'inProgress' | 'done' | 'moreInfoNeeded' | 'duplicate' | 'wontFix';
export type Distribution = 'equalSpacing' | 'leading' | 'trailing' | 'center' | 'fill' | 'fillEvenly';
export type Spacing = 'none' | 'extraSmall' | 'small' | 'medium' | 'normal' | 'large' | 'extraLarge';
export type Alignment = 'leading' | 'trailing' | 'center' | 'fill' | 'baseline';
export type Variation = 'positive' | 'negative' | 'strong' | 'subdued';
export type IssueTypes = 'bug' | 'improvement' | 'design' | 'question';
export type Size = 'small' | 'medium' | 'large' | 'extraLarge';
export type Padding = 'none' | 'small' | 'normal' | 'large';
export type Falsy = boolean | undefined | null | 0;
export type Responsive<T> = T | T[];

export const Colors = {
	redText: '#5e0a17',
	redDark: '#ba142e',
	redBase: '#eb4962',
	redLight: '#f0778a',
	redLighter: '#f5a5b1',
	redLightest: '#fad3d9',
	orangeText: '#592106',
	orangeDark: '#b8450d',
	orangeBase: '#f1763a',
	orangeLight: '#f4976a',
	orangeLighter: '#f8b899',
	orangeLightest: '#fbd9c9',
	pinkText: '#6a1552',
	pinkDark: '#bf2694',
	pinkBase: '#e16ac0',
	pinkLight: '#ea94d2',
	pinkLighter: '#f2bfe4',
	pinkLightest: '#fbe9f6',
	purpleText: '#371145',
	purpleDark: '#782696',
	purpleBase: '#af4fd3',
	purpleLight: '#c278dd',
	purpleLighter: '#d4a1e7',
	purpleLightest: '#e7c9f2',
	indigoText: '#220f53',
	indigoDark: '#451eaa',
	indigoBase: '#774ee0',
	indigoLight: '#9879e8',
	indigoLighter: '#baa5ef',
	indigoLightest: '#dbd0f7',
	blueText: '#07153c',
	blueDark: '#123597',
	blueBase: '#295be6',
	blueLight: '#577eeb',
	blueLighter: '#84a1f1',
	blueLightest: '#b2c4f6',
	cyanText: '#032029',
	cyanDark: '#0b6987',
	cyanBase: '#12b2e6',
	cyanLight: '#3bc3f0',
	cyanLighter: '#6bd2f3',
	cyanLightest: '#9ae0f7',
	greenText: '#05170c',
	greenDark: '#196937',
	greenBase: '#2cbc63',
	greenLight: '#47d47d',
	greenLighter: '#70de9a',
	greenLightest: '#9ae7b7',
	yellowText: '#272002',
	yellowDark: '#897006',
	yellowBase: '#eac00b',
	yellowLight: '#f5d133',
	yellowLighter: '#f8dc63',
	yellowLightest: '#fae794',
	greyDark: '#555555',
	greyBase: '#999999',
	greyLight: '#cccccc',
	greyLighter: '#f3f3f3',
	inkBase: '#212b36',
	inkLight: '#454f5b',
	inkLighter: '#637381',
	inkLightest: '#919eab',
	translucentBase: 'rgba(0, 0, 0, 0.161)',
	translucentLight: 'rgba(0, 0, 0, 0.031)',
	blackBase: '#000000',
	whiteBase: '#ffffff',
};

export const IssueStatus = {
	open: { name: 'Open', color: Colors.inkLighter },
	inProgress: { name: 'In Progress', color: Colors.blueLight },
	done: { name: 'Done', color: Colors.greenBase },
	moreInfoNeeded: { name: 'More info needed', color: Colors.orangeDark },
	duplicate: { name: 'Duplicate', color: Colors.orangeBase },
	wontFix: { name: "Won't Fix", color: Colors.orangeLight },
};

export const IssueType = {
	bug: { name: 'Bug', color: Colors.redDark, colorName: 'redDark' as Color, icon: bugIcon },
	improvement: { name: 'Improvement', color: Colors.blueDark, colorName: 'blueDark' as Color, icon: improvement },
	design: { name: 'Design', color: Colors.cyanDark, colorName: 'cyanDark' as Color, icon: design },
	question: { name: 'Question', color: Colors.purpleDark, colorName: 'purpleDark' as Color, icon: question },
};

export type Color =
	| 'white'
	| 'black'
	| 'translucent'
	| 'translucentLight'
	| 'inkLightest'
	| 'inkLighter'
	| 'inkLight'
	| 'ink'
	| 'greyLighter'
	| 'greyLight'
	| 'grey'
	| 'greyDark'
	| 'blueLightest'
	| 'blueLighter'
	| 'blueLight'
	| 'blue'
	| 'blueDark'
	| 'indigoLightest'
	| 'indigoLighter'
	| 'indigoLight'
	| 'indigo'
	| 'indigoDark'
	| 'cyanLightest'
	| 'cyanLighter'
	| 'cyanLight'
	| 'cyan'
	| 'cyanDark'
	| 'greenLightest'
	| 'greenLighter'
	| 'greenLight'
	| 'green'
	| 'greenDark'
	| 'yellowLightest'
	| 'yellowLighter'
	| 'yellowLight'
	| 'yellow'
	| 'yellowDark'
	| 'orangeLightest'
	| 'orangeLighter'
	| 'orangeLight'
	| 'orange'
	| 'orangeDark'
	| 'redLightest'
	| 'redLighter'
	| 'redLight'
	| 'red'
	| 'redDark'
	| 'purpleLightest'
	| 'purpleLighter'
	| 'purpleLight'
	| 'purple'
	| 'purpleDark'
	| 'pinkLightest'
	| 'pinkLighter'
	| 'pinkLight'
	| 'pink'
	| 'pinkDark';

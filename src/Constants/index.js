import {
	c,
	python,
	java,
	cpp,
	rlogo,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	git,
	typescript,
	selflogo,
	furnacare,
	army,
	pirate,
	inventoryapp,
	servpro,
	travlr,
	angular,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'works',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

export const services = [
	{ title: 'C', icon: c },
	{ title: 'C++', icon: cpp },
	{ title: 'Python', icon: python },
	{ title: 'Java', icon: java },
	{ title: 'R', icon: rlogo },
];

export const technologies = [
	{ name: 'HTML 5', icon: html },
	{ name: 'CSS 3', icon: css },
	{ name: 'JavaScript', icon: javascript },
	{ name: 'TypeScript', icon: typescript },
	{ name: 'React JS', icon: reactjs },
	{ name: 'Tailwind CSS', icon: tailwind },
	{ name: 'Node JS', icon: nodejs },
	{ name: 'git', icon: git },
	{ name: 'Angular', icon: angular },
];

export const experiences = [
	{
		title: 'Freelance Tech Worker',
		company_name: 'Self',
		icon: selflogo,
		iconBg: '#161329',
		date: '2023 - Present',
		points: [
			'Designed predictive models using current and emerging trends within the AI & ML fields for fantasy sports optimization.',
			'Also performed various IT integrations such as SharePoint and Salesforce, web-app development, and more!',
		],
	},
	{
		title: 'Warehouse Manager | Software Developer',
		company_name: 'Furnacare Inc.',
		icon: furnacare,
		iconBg: '#161329',
		date: '2024 - Present',
		points: [
			'Handled incoming and outgoing orders, facilitating transactions and developing a functional web application that serves as an inventory management system to track incoming and outgoing orders, inventory stock, and notifications.',
		],
	},
	{
		title: 'Rest Tech/Crew Chief/Production Manager',
		company_name: 'ServPro',
		icon: servpro,
		iconBg: '#161329',
		date: '2021 - 2023',
		points: [
			'Performed restoration and mitigation on both commercial and residential homes. Eventually promoted to a crew chief with the responsibility of managing technicians within my crew. Once again promoted to be in charge of all crews as the Production Manager. Managed multi-million dollar losses and communicated with executive leadership with various major companies.',
		],
	},
	{
		title: 'US Army Airborne-Infantryman',
		company_name: 'US Army | 82nd Airborne Division',
		icon: army,
		iconBg: '#161329',
		date: '2017 - 2020',
		points: [
			'Led leadership exercises and military battle drills in close quarters combat. Achieved Weapons Squad Leader recognition.',
			'Enhanced emergency preparedness, commanding oversight of tactical plans, equipment, and weapons.',
			'Optimized operational efficiencies, developing organization systems for records and reports.',
			'Prepared operation plans supporting security of resources and installations',
		],
	},
];

export const projects = [
	{
		name: 'Fullstack Inventory Web App',
		description:
			'Web-Application that features an inventory tracking system as well as messaging functionality between users.',
		tags: [
			{ name: 'React', color: 'blue-text-gradient' },
			{ name: 'Django', color: 'green-text-gradient' },
			{ name: 'bootstrap 5.3.0', color: 'pink-text-gradient' },
		],
		image: inventoryapp,
		source_code_link:
			'https://github.com/boggs-brandon21/MyDjangoReact-InventoryApp',
		video_link: 'https://youtu.be/m-LmjuMMCQs',
	},
	{
		name: 'Fullstack Travel/Vacation Web App',
		description:
			'Web-Application that features a selection of vacations available to users and created an administration page for admins to be able to update/add trips to their vacation options.',
		tags: [
			{ name: 'Angular', color: 'blue-text-gradient' },
			{ name: 'JavaScript', color: 'green-text-gradient' },
			{ name: 'Express', color: 'blue-text-gradient' },
			{ name: 'Node', color: 'green-text-gradient' },
			{ name: 'bootstrap 5.3.0', color: 'pink-text-gradient' },
		],
		image: travlr,
		source_code_link: 'https://github.com/boggs-brandon21/cs465-fullstack',
		video_link: '',
	},
	{
		name: 'Pirate Treasure Game',
		description:
			'ML model that utilizes reinforcement learning to train the model to reach the treasure before the pirate.',
		tags: [
			{ name: 'Machine Learning', color: 'blue-text-gradient' },
			{ name: 'Jupyter Notebook', color: 'green-text-gradient' },
			{ name: 'Reinforcement Learning', color: 'pink-text-gradient' },
		],
		image: pirate,
		source_code_link:
			'https://github.com/boggs-brandon21/CS370-RL-IntelligentAgent-Pirate/tree/main',
		video_link: '',
	},
];

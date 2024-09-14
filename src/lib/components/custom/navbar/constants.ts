export type NavLink = {
	title: string;
	href: string;
	isRoot?: boolean;
};

export const NavLinks: NavLink[] = [
	{
		title: 'Home',
		href: '/',
		isRoot: true
	},
	{
		title: 'Info',
		href: '/info'
	}
];

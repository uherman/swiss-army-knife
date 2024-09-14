export type NavLink = {
	title: string;
	href: string;
	isRoot?: boolean;
};

export const NavLinks: NavLink[] = [
	{
		title: 'Fake Deploy',
		href: '/fake-deploy'
	}
];

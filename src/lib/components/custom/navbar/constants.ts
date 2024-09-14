import { tools } from '@/utils/constants';

export type NavLink = {
	title: string;
	href: string;
	isRoot?: boolean;
};

export const ToolNavLinks: NavLink[] = tools.map(({ title, href }) => ({ title, href }));

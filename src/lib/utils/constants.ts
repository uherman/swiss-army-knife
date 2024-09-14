import { Rocket } from 'lucide-svelte';
import type { ComponentType } from 'svelte';

export type Tool = {
	title: string;
	description: string;
	href: string;
	color: string;
	icon: ComponentType;
};

export const tools: Tool[] = [
	{
		title: 'Fake Deploy',
		description: 'Simulate a fake deployment.',
		href: '/tools/fake-deploy',
		color: 'bg-indigo-500',
		icon: Rocket
	}
];

import { QrCode, Rocket } from 'lucide-svelte';
import type { ComponentType } from 'svelte';

export type Tool = {
	title: string;
	description: string;
	href: string;
	icon: ComponentType;
};

export const tools: Tool[] = [
	{
		title: 'Fake Deploy',
		description: 'Simulate a fake deployment.',
		href: '/tools/fake-deploy',
		icon: Rocket
	},
	{
		title: 'QRCode Generator',
		description: 'Generate QR codes.',
		href: '/tools/qr-code-generator',
		icon: QrCode
	}
];

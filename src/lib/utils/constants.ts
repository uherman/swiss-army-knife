import { QrCode, Rocket, ScanQrCode, Newspaper } from 'lucide-svelte';
import type { ComponentType } from 'svelte';

export type Page = {
	title: string;
	description: string;
	href: string;
	icon: ComponentType;
};

export const tools: Page[] = [
	{
		title: 'QR Code Generator',
		description: 'Generate QR codes.',
		href: '/tools/qr-code-generator',
		icon: QrCode
	},
	{
		title: 'Disposable QR Code',
		description: 'Generate disposable QR codes.',
		href: '/tools/disposable/generate',
		icon: ScanQrCode
	},
	{
		title: 'Fake Deploy',
		description: 'Simulate a fake deployment.',
		href: '/tools/fake-deploy',
		icon: Rocket
	}
];

export const showCasePages: Page[] = [
	{
		title: 'Feed',
		description: 'A feed of posts.',
		href: '/showcase/feed',
		icon: Newspaper
	}
];

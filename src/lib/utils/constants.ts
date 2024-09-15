import { QrCode, Rocket, ScanQrCode } from 'lucide-svelte';
import type { ComponentType } from 'svelte';

export type Tool = {
	title: string;
	description: string;
	href: string;
	icon: ComponentType;
};

export const tools: Tool[] = [
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

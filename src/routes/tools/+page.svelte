<script lang="ts">
	import CardSection from '@/components/custom/card-section/card-section.svelte';
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import { Rocket } from 'lucide-svelte';

	const cards = [
		{
			title: 'Fake Deploy',
			description: 'Simulate a fake deployment.',
			href: '/fake-deploy',
			color: 'bg-indigo-500',
			icon: Rocket
		}
	];
</script>

<MainContent>
	<CardSection {cards} />
</MainContent>

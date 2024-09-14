<script lang="ts">
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import { Rocket, PocketKnife } from 'lucide-svelte';
	import CardSection from '@/components/custom/card-section/card-section.svelte';
	import GithubLink from '@/components/custom/github-link/github-link.svelte';

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
	<GithubLink />

	<CardSection {cards} />
</MainContent>

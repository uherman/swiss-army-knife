<script lang="ts">
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import CardSection from '@/components/custom/card-section/card-section.svelte';
	import GithubLink from '@/components/custom/github-link/github-link.svelte';
	import { tools } from '@/utils/constants';
</script>

<MainContent>
	<GithubLink />
	<CardSection cards={tools} />
</MainContent>

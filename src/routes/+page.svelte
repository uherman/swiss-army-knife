<script lang="ts">
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import CardSection from '@/components/custom/card-section/card-section.svelte';
	import GithubLink from '@/components/custom/github-link/github-link.svelte';
	import { tools } from '@/utils/constants';
	import { Separator } from '$lib/components/ui/separator';
</script>

<MainContent>
	<div class="flex w-full items-center justify-start">
		<div class="mx-2 rounded-lg p-4 md:mx-4 md:p-8">
			<h1 class="mb-6 text-4xl font-bold">Swiss Army Knife</h1>
			<p>
				This website is a collection of tools and utilities that I've built to help me with my
				day-to-day tasks. Feel free to explore and use them as you see fit.
			</p>
		</div>
	</div>
	<CardSection cards={tools} />

	<Separator class="mx-auto my-10 w-4/5" />
	<footer class="mb-2">
		<GithubLink />
	</footer>
</MainContent>

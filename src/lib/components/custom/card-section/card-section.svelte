<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '@/components/ui/button';
	import { cn } from '@/utils';
	import type { Page } from '@/utils/constants';

	type Card = Page;

	let className: string = '';
	export { className as class };
	export let cards: Card[] = [];
</script>

<section
	class={cn(
		'md:bg-muted/50 mt-10 grid w-full justify-center gap-4 rounded-lg p-4 md:w-auto md:grid-cols-2 md:border lg:grid-cols-3 xl:grid-cols-4 dark:md:border-none',
		className
	)}
>
	{#each cards as card}
		<Card.Root class="bg-muted w-[300px]">
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">{card.title}</Card.Title>
				<svelte:component this={card.icon} class=" text-muted-foregroundh-4 w-4" />
			</Card.Header>
			<Card.Content class="flex flex-row items-center justify-between">
				<p class="text-muted-foreground text-xs">{card.description}</p>
			</Card.Content>
			<Card.Footer class="flex flex-row justify-end">
				<Button href={card.href} variant="default" class="w-full">View</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
</section>

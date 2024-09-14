<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { CalendarDays, PocketKnife } from 'lucide-svelte';
	import GithubIcon from './github-icon.svelte';
	import { cn } from '@/utils';
	import { Button } from '@/components/ui/button';

	let className = '';
	export { className as class };
	export let variant: 'text' | 'icon' = 'text';
	export let iconVariant: 'solid' | 'outline' = 'solid';
	export let showHoverCard = true;
	export let rounded = true;
	export let buttonVariant:
		| 'default'
		| 'secondary'
		| 'ghost'
		| 'outline'
		| 'link'
		| 'destructive'
		| undefined = 'ghost';
</script>

<HoverCard.Root>
	<HoverCard.Trigger
		href="https://github.com/uherman/swiss-army-knife"
		target="_blank"
		rel="noreferrer noopener"
		class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
	>
		{#if variant === 'icon'}
			<Button variant={buttonVariant} size="icon" class={`${rounded && 'rounded-full'}`}>
				<GithubIcon class={cn('h-10 w-10', className)} variant={iconVariant} />
			</Button>
		{:else}
			<span class={cn(className)}>@swiss-army-knife</span>
		{/if}
	</HoverCard.Trigger>
	{#if showHoverCard}
		<HoverCard.Content class="w-80">
			<div class="flex justify-between space-x-4">
				<Avatar.Root>
					<Avatar.Fallback>
						<PocketKnife />
					</Avatar.Fallback>
				</Avatar.Root>
				<div class="space-y-1">
					<h4 class="text-sm font-semibold">@swiss-army-knife</h4>
					<p class="text-sm">All the tools you need in one place.</p>
					<div class="flex items-center pt-2">
						<CalendarDays class="mr-2 h-4 w-4 opacity-70" />
						<span class="text-muted-foreground text-xs"> Created September 2024 </span>
					</div>
				</div>
			</div>
		</HoverCard.Content>
	{/if}
</HoverCard.Root>

<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	export let open: boolean;
	export let title: string;
	export let description: string;
	export let href: string;
	export let icon: ComponentType;
</script>

<a
	{href}
	on:click={() => (open = false)}
	class="group flex select-none items-center gap-4 text-start hover:text-current"
>
	<span class="bg-muted text-muted-foreground rounded-lg p-2 group-hover:text-current">
		<svelte:component this={icon} class="h-6 w-6" />
	</span>

	<div class="grid">
		<span class="flex flex-row items-center">
			<p class="text-sm font-medium leading-none">{title}</p>
			<ChevronRight
				class="h-3 w-3 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
			/>
		</span>

		<p class="text-muted-foreground text-xs group-hover:text-current">{description}</p>
	</div>
</a>

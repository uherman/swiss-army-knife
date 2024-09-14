<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { toggleMode, mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Switch } from '$lib/components/ui/switch';

	let checked: boolean = $mode === 'dark';

	export let variant: 'button' | 'switch' = 'button';
</script>

{#if variant === 'button'}
	<Button on:click={toggleMode} variant="outline" size="icon" class="rounded-full">
		<Sun
			class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
		/>
		<Moon
			class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		/>
		<span class="sr-only">Toggle theme</span>
	</Button>
{:else if variant === 'switch'}
	<Switch bind:checked onCheckedChange={toggleMode} />
{/if}

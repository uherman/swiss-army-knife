<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { cn } from '@/utils';
	import { LoaderCircle, Trash2 } from 'lucide-svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import * as Popover from '$lib/components/ui/popover';

	type $$Props = HTMLAttributes<HTMLButtonElement> & {
		class?: string;
		loading?: boolean;
		variant?: 'default' | 'secondary' | 'link' | 'destructive' | 'outline' | 'ghost' | undefined;
		type?: 'button' | 'submit' | 'reset' | null | undefined;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let loading: boolean = false;
	export let variant: $$Props['variant'] = 'secondary';
	export let type: $$Props['type'] = 'button';

	const revertToStep1 = () => {
		const timeout = setTimeout(() => {
			step = 1;
			clearTimeout(timeout);
		}, 10);
	};

	let step: 1 | 2 = 1;
	let isHovered = false;
</script>

<Popover.Root onOutsideClick={revertToStep1}>
	<Popover.Trigger>
		{#if step === 1}
			<Button
				type="button"
				on:click={() => (step = 2)}
				{variant}
				size="icon"
				disabled={loading}
				{...$$restProps}
				class={className}
			>
				{#if loading}
					<LoaderCircle class="h-5 w-5 animate-spin" />
				{:else}
					<Trash2 class="h-5 w-5" />
				{/if}
			</Button>
		{:else}
			<Button
				on:mouseenter={() => (isHovered = true)}
				on:mouseleave={() => (isHovered = false)}
				{type}
				on:click
				{variant}
				size="icon"
				disabled={loading}
				{...$$restProps}
				class={cn(className, 'text-red-500 shadow-inner')}
			>
				{#if loading}
					<LoaderCircle class="h-5 w-5 animate-spin" />
				{:else}
					<Trash2 class="h-5 w-5" />
				{/if}
			</Button>
		{/if}
	</Popover.Trigger>
	<Popover.Content side="top" sideOffset={10}
		>Are you sure you want to delete this post?</Popover.Content
	>
</Popover.Root>

<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import { ChevronDown, ChevronRight, Cherry, Database, Wrench } from 'lucide-svelte';
	import NavbarDropdownItem from './navbar-dropdown-item.svelte';
	import type { Page } from '@/utils/constants';
	import { dropdownOpen } from './store';

	export let pages: Page[];
	export let title = 'Tools';
	export let offset: number = 300;
	let open = false;
	let hidden = false;

	dropdownOpen.subscribe((value) => {
		if (value && value !== title) {
			hidden = true;
		}
	});

	$: {
		if (open) {
			hidden = false;
			dropdownOpen.set(title);
		}
	}
</script>

<HoverCard.Root openDelay={0} closeDelay={300} bind:open>
	<HoverCard.Trigger class="group flex flex-row items-end">
		<span class={`text-muted-foreground ${open && 'text-primary'} me-0.5`}>{title}</span>
		<ChevronDown
			class={`text-muted-foreground spin-down ${open && 'spin-up text-primary'} w-4t h-4`}
		/>
	</HoverCard.Trigger>
	<HoverCard.Content
		sideOffset={15}
		alignOffset={offset}
		class={`flex w-fit flex-row overflow-hidden rounded-lg p-0 ${hidden && 'hidden'}`}
	>
		<div class="flex flex-col gap-6 px-4 py-8">
			{#each pages as tool}
				<NavbarDropdownItem {...tool} bind:open />
			{/each}
		</div>
		<!-- TODO: make components from this -->
		<div class="bg-muted flex flex-col gap-4 px-4 pb-8 pt-6">
			<a
				href="/cherry"
				on:click={() => (open = false)}
				class="text-muted-foreground group flex flex-row items-center hover:text-current"
			>
				<p class="text-sm">CHERRY</p>
				<ChevronRight class="h-3 w-3 transition group-hover:translate-x-1" />
			</a>
			<a
				class="text-muted-foreground group flex flex-row items-center gap-4 transition hover:text-current"
				href="/cherry"
				on:click={() => (open = false)}
			>
				<div
					class="bg-background flex w-[150px] justify-center rounded-md border px-4 py-3 font-mono text-sm"
				>
					<Cherry class="group-hover:text-primary transition" />
				</div>
				<p class="max-w-[280px] text-xs">
					<b>Like cherries?</b> <br /> Then you shouldcheck out the cherry ecosystem and how it can help
					you build your apps
				</p>
			</a>
			<a
				class="text-muted-foreground flex flex-row items-center gap-4 transition hover:text-current"
				href="/cherry"
				on:click={() => (open = false)}
			>
				<div
					class="bg-background flex w-[150px] justify-center rounded-md border px-4 py-3 font-mono text-sm"
				>
					<Database />
				</div>
				<p class="max-w-[280px] text-xs">
					Cherry makes database integrations a breeze with its built-in support for your favorite
					databases
				</p>
			</a>
			<a
				class="text-muted-foreground flex flex-row items-center gap-4 transition hover:text-current"
				href="/cherry"
				on:click={() => (open = false)}
			>
				<div
					class="bg-background flex w-[150px] justify-center rounded-md border px-4 py-3 font-mono text-sm"
				>
					<Wrench />
				</div>
				<p class="max-w-[280px] text-xs">
					Customize your cherry experience with the tools you love and the integrations you need
				</p>
			</a>
		</div>
	</HoverCard.Content>
</HoverCard.Root>

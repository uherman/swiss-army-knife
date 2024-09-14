<script lang="ts">
	import { Menu, PocketKnife, ChevronDown } from 'lucide-svelte';
	import * as Sheet from '@/components/ui/sheet';
	import { Button } from '@/components/ui/button';
	import NavbarLink from './navbar-link.svelte';
	import { ToolNavLinks } from './constants';
	import DarkModeToggle from './dark-mode-toggle.svelte';
	import { onNavigate } from '$app/navigation';
	import { backIn, backOut } from 'svelte/easing';
	import GithubLink from '../github-link/github-link.svelte';
	import * as Collapsible from '$lib/components/ui/collapsible/index.js';
	import NavbarDropdown from './navbar-dropdown/navbar-dropdown.svelte';
	import { mode } from 'mode-watcher';

	onNavigate(() => {
		open = false;
	});

	let open = false;
</script>

<header
	class="bg-background dark:bg-muted/80 sticky top-0 flex h-16 items-center gap-4 px-4 md:my-4 md:rounded-lg md:px-6 md:shadow-md"
>
	<nav
		class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
	>
		<a href="##" class="flex items-center gap-2 text-lg font-semibold md:text-base">
			<PocketKnife class="h-6 w-6" />

			<span class="sr-only">Swiss army knife</span>
		</a>
		<NavbarLink navLink={{ title: 'Home', href: '/', isRoot: true }} />
		<NavbarLink navLink={{ title: 'About', href: '/about' }} />
		<NavbarDropdown />
	</nav>
	<Sheet.Root closeOnEscape closeOnOutsideClick bind:open>
		<Sheet.Trigger asChild let:builder>
			<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
				<Menu class="h-5 w-5" />
				<span class="sr-only">Toggle navigation menu</span>
			</Button>
		</Sheet.Trigger>
		<Sheet.Content
			showCloseButton={false}
			side="left"
			inTransitionConfig={{
				x: '-100%',
				duration: 300,
				opacity: 1,
				easing: backOut
			}}
			outTransitionConfig={{
				x: '-100%',
				duration: 200,
				opacity: 1,
				easing: backIn
			}}
			class="flex h-full flex-col items-start justify-between"
		>
			<nav class="grid w-full gap-6 text-lg font-medium">
				<a href="##" class="flex items-center gap-2 text-lg font-semibold">
					<PocketKnife class="h-6 w-6" />
					<span class="sr-only">Swiss army knife</span>
				</a>
				<NavbarLink navLink={{ title: 'Home', href: '/', isRoot: true }} variant="sheet" />
				<NavbarLink navLink={{ title: 'About', href: '/about' }} variant="sheet" />

				<Collapsible.Root>
					<Collapsible.Trigger asChild let:builder>
						<NavbarLink
							builders={[builder]}
							navLink={{ title: 'Tools', href: '/tools' }}
							disabled
							icon={ChevronDown}
						/>
					</Collapsible.Trigger>
					<Collapsible.Content class="bg-muted mt-3 flex w-full flex-col gap-3 rounded-lg p-4">
						{#each ToolNavLinks as navLink}
							<NavbarLink {navLink} variant="sheet" class="w-full text-sm" />
						{/each}
						<hr class="my-1 h-px border-0 bg-gray-200 dark:bg-gray-700" />

						<NavbarLink
							navLink={{ title: 'Show All', href: '/tools' }}
							class="text-muted-foreground w-full text-sm"
						/>
					</Collapsible.Content>
				</Collapsible.Root>
			</nav>
			<Sheet.Footer class="w-full">
				<div
					class="dark:bg-muted/80 bg-muted flex w-full flex-row items-center justify-start gap-4 rounded-lg p-3"
				>
					<GithubLink
						variant="icon"
						iconVariant="outline"
						class="h-6 w-6"
						showHoverCard={false}
						rounded={false}
						buttonVariant={$mode === 'dark' ? 'secondary' : 'outline'}
					/>
					<DarkModeToggle buttonVariant={$mode === 'dark' ? 'secondary' : 'outline'} />
				</div>
			</Sheet.Footer>
		</Sheet.Content>
	</Sheet.Root>
	<div class="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
		<DarkModeToggle buttonVariant="ghost" />
		<GithubLink
			variant="icon"
			iconVariant="outline"
			class="h-6 w-6"
			showHoverCard={false}
			rounded={false}
			buttonVariant="ghost"
		/>
	</div>
</header>

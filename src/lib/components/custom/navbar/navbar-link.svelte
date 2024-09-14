<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '@/utils';
	import type { NavLink } from './constants';
	import { builderActions, getAttrs, type Builder } from 'bits-ui';
	import type { ComponentType } from 'svelte';

	const classes = {
		default: {
			inactive: 'text-muted-foreground hover:text-foreground transition-colors text-nowrap',
			active: 'text-foreground hover:text-foreground transition-colors text-nowrap'
		},
		sheet: {
			inactive: 'text-muted-foreground hover:text-foreground text-nowrap',
			active: 'hover:text-foreground text-nowrap'
		}
	};

	let className = '';
	export { className as class };
	export let navLink: NavLink;
	export let variant: 'default' | 'sheet' = 'default';
	export let builders: Builder[] = [];
	export let disabled = false;
	export let icon: ComponentType | null = null;

	const isActive = (pathname: string) =>
		navLink.isRoot ? pathname === '/' : pathname.startsWith(navLink.href);

	$: _class = isActive($page.url.pathname) ? classes[variant].active : classes[variant].inactive;
</script>

{#if disabled}
	<div
		use:builderActions={{ builders }}
		{...getAttrs(builders)}
		class="text-muted-foreground hover:text-foreground flex cursor-pointer select-none flex-row items-center"
	>
		<span class={cn(_class, className)}>
			{navLink.title}
		</span>
		{#if icon}
			<svelte:component this={icon} class="ml-0.5 h-5 w-5" />
		{/if}
	</div>
{:else}
	<div
		use:builderActions={{ builders }}
		{...getAttrs(builders)}
		class="hover:text-foreground flex cursor-pointer select-none flex-row items-center"
	>
		<a
			use:builderActions={{ builders }}
			{...getAttrs(builders)}
			href={navLink.href}
			class={cn(_class, className)}
		>
			{navLink.title}
		</a>
		{#if icon}
			<svelte:component this={icon} class="ml-0.5 h-5 w-5" />
		{/if}
	</div>
{/if}

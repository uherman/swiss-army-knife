<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import { builderActions, getAttrs, type Builder } from 'bits-ui';

	type $$Props = HTMLAttributes<HTMLElement> & {
		class?: string;
		builders?: Builder[];
	};

	let className: $$Props['class'] = undefined;
	export let builders: Builder[] = [];
	export { className as class };
</script>

<article
	use:builderActions={{ builders }}
	{...getAttrs(builders)}
	class={cn('mt-10 flex flex-col items-center justify-center', className)}
	{...$$restProps}
>
	<slot />
</article>

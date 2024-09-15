<script lang="ts">
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import type { PageData } from './$types';
	import Button from '@/components/ui/button/button.svelte';

	export let data: PageData;
</script>

<MainContent>
	{#if data.error}
		<p class="text-red-500">{data.error}</p>
		<Button href="/" variant="outline" class="mt-4">Back</Button>
	{:else}
		<div class="mb-3 w-full">
			<h1 class="text-2xl font-bold">Content</h1>
			<span class="flex flex-row justify-between">
				<p class="text-xs text-gray-500">
					The data has been consumed and the qr code will no longer work.
				</p>
				<small class="text-gray-500"><b>Id:</b> <code>{data.id}</code></small>
			</span>
		</div>
		<div class="bg-muted min-h-72 w-full rounded-lg p-4">
			<p class="text-lg">{data.disposable?.data}</p>
		</div>
	{/if}
</MainContent>

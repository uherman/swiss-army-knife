<script lang="ts">
	import { Button } from '@/components/ui/button';
	import QRCode from '@castlenine/svelte-qrcode';
	import { blur } from 'svelte/transition';

	export let value: string;
	export let format: 'png' | 'jpeg' | 'webp' | 'svg' = 'png';
	export let size: number = 256;

	let downloadUrl = '';
	let show = false;

	const handleDownloadUrlGenerated = (url = '') => {
		downloadUrl = url;
	};

	const reRender = () => {
		show = false;
		const timeout = setTimeout(() => ((show = true), clearTimeout(timeout)), 0);
	};

	$: value.length && reRender();
	$: format && reRender();
	$: size && reRender();
</script>

{#if show}
	<div class="mt-8 flex flex-col items-center justify-center">
		<div class="hidden">
			<QRCode
				{size}
				bind:data={value}
				downloadUrlFileFormat={format}
				dispatchDownloadUrl
				on:downloadUrlGenerated={(event) => handleDownloadUrlGenerated(event.detail.url)}
				isJoin
			/>
		</div>

		<!-- This has to be separated for blur to work -->
		{#if downloadUrl}
			<div in:blur={{ duration: 300 }}>
				<img src={downloadUrl} height="256" width="256" alt="QR Code" />
			</div>
		{/if}

		{#if downloadUrl}
			<Button class="mt-10 w-full" href={downloadUrl} download={`qr-code.${format}`}
				>Download</Button
			>
		{/if}
	</div>
{/if}

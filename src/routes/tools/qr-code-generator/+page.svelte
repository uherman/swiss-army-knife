<script lang="ts">
	import GithubLink from '@/components/custom/github-link/github-link.svelte';
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import { Separator } from '@/components/ui/separator';
</script>

<MainContent>
	<div class="flex w-full items-center justify-start">
		<div class="mx-2 rounded-lg p-4 md:mx-4 md:p-8">
			<h1 class="mb-6 text-4xl font-bold">QR Code Generator</h1>
			<p>
				Generate QR codes for your URLs, text, and more. You can customize the size, color, and
				background of the QR code.
			</p>
		</div>
	</div>

	<Separator class="mx-auto my-10 w-4/5" />
	<footer class="mb-2">
		<GithubLink />
	</footer>
</MainContent>

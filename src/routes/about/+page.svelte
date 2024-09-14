<script lang="ts">
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import Button from '@/components/ui/button/button.svelte';
</script>

<MainContent>
	<div class=" flex items-center justify-center">
		<div class="mx-2 rounded-lg p-4 md:mx-4 md:p-8">
			<h1 class="mb-6 text-4xl font-bold">About</h1>
			<p class="mb-6 max-w-2xl text-lg">
				This website is a collection of tools and utilities that I've built to help me with my
				day-to-day tasks. Feel free to explore and use them as you see fit.
			</p>

			<h2 class="mb-4 text-2xl font-semibold">Contribute & Collaborate</h2>
			<p class="mb-6 max-w-2xl text-lg">
				Have an idea for a new tool? Found a bug? I encourage you to contribute to the project!
				Open-source collaboration is at the heart of this platform. You can submit issues, suggest
				improvements, and contribute code on <a
					href="https://github.com/uherman/swiss-army-knife"
					class="text-primary hover:underline"
					target="_blank">GitHub</a
				>.
			</p>

			<div class="mt-8">
				<Button
					variant="link"
					class="text-muted-foreground px-0 hover:text-current"
					href="https://github.com/uherman/swiss-army-knife/issues/new/choose"
					target="_blank"
				>
					Create issue on GitHub
				</Button>
			</div>
		</div>
	</div>
</MainContent>

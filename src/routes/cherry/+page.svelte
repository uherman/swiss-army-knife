<script lang="ts">
	import GithubLink from '@/components/custom/github-link/github-link.svelte';
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import { Separator } from '@/components/ui/separator';
	import { Cherry } from 'lucide-svelte';
</script>

<MainContent>
	<div class="flex w-full items-center justify-center">
		<span class="text-primary animate-pulse transition duration-500 hover:animate-spin">
			<Cherry style="height:200px; width:200px;" />
		</span>
	</div>

	<Separator class="mx-auto my-10 w-4/5"></Separator>
	<footer class="mb-2">
		<GithubLink></GithubLink>
	</footer>
</MainContent>

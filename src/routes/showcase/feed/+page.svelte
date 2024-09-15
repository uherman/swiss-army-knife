<script lang="ts">
	import Input from '@/components/ui/input/input.svelte';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import type { ActionData, PageData } from './$types';
	import Button from '@/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { toast } from 'svelte-sonner';
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import { LoaderCircle } from 'lucide-svelte';
	import DeleteButton from '@/components/custom/buttons/delete-button.svelte';

	export let data: PageData;
	export let form: ActionData;

	let posting = false;
	let deleting: string;

	const delayAction = (cb: () => void, delay: number = 100) => {
		const timeout = setTimeout(() => {
			cb();
			clearTimeout(timeout);
		}, delay);
	};

	$: ({ posts } = data);
	$: if (form && typeof window !== 'undefined') {
		if (form.success) {
			form.message && delayAction(() => toast.success(form.message));
		} else {
			form.message && delayAction(() => toast.error(form.message));
		}
		posting = false;
		deleting = '';
	}
</script>

<MainContent>
	<div class="mb-10 me-10 flex w-full justify-end md:me-0">
		<Dialog.Root>
			<Dialog.Trigger>
				<Button variant="default">Create Post</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Create a new post</Dialog.Title>
				</Dialog.Header>
				<form
					on:submit={() => (posting = true)}
					method="POST"
					action="?/createPost"
					class="flex flex-col items-end justify-center gap-4"
				>
					<Input type="text" name="title" placeholder="Title" required />
					<Textarea name="content" placeholder="Write something..." />

					<Button type="submit" disabled={posting}>
						{#if posting}
							<LoaderCircle class="h-5 w-5 animate-spin" />
						{:else}
							Submit
						{/if}
					</Button>
				</form>
			</Dialog.Content>
		</Dialog.Root>
	</div>

	{#if posts.length === 0}
		<p class="text-muted-foreground">No posts found</p>
	{/if}

	<div class="w-full px-4 md:w-3/5">
		<ul class="flex flex-col gap-6">
			{#each posts as post}
				<li>
					<Card.Root>
						<Card.Header>
							<div class="flex flex-row justify-between">
								<Card.Title>{post.title}</Card.Title>
								<form method="POST" action="?/deletePost" on:submit={() => (deleting = post.id)}>
									<input type="hidden" name="id" value={post.id} />
									<DeleteButton type="submit" loading={deleting === post.id} />
								</form>
							</div>
							<Card.Description>
								<div>
									<p class="text-muted-foreground">Id: {post.id}</p>
								</div>
							</Card.Description>
						</Card.Header>
						<Card.Content>
							<div class="bg-muted rounded-lg p-4">
								<p>{post.content}</p>
							</div>
						</Card.Content>
						<Card.Footer>
							<p class="text-muted-foreground">Created at: {post.date}</p>
						</Card.Footer>
					</Card.Root>
				</li>
			{/each}
		</ul>
	</div>
</MainContent>

<script lang="ts">
	import GithubLink from '@/components/custom/github-link/github-link.svelte';
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import { Separator } from '@/components/ui/separator';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import QrCode from '@/components/custom/qr-code/qr-code.svelte';
	import { Label } from '@/components/ui/label';
	import type { ActionData } from './$types';
	import { Undo2, Info } from 'lucide-svelte';
	import Switch from '@/components/ui/switch/switch.svelte';
	import * as Popover from '$lib/components/ui/popover';

	const URL = import.meta.env.VITE_API_URL;

	export let form: ActionData;

	type FormData = {
		value: string;
	};

	enum State {
		Idle,
		Generate
	}

	let state: State = State.Idle;
	let value: string = '';
	let formData: FormData = { value };

	const generate = () => {
		if (!form?.success) return;

		state = State.Generate;
		formData = { value: `${URL}/tools/disposable/${form.id}` };
	};

	$: form?.success && generate();
</script>

<MainContent>
	{#if state === State.Idle}
		<section class="px-4">
			<div class=" mb-10 flex flex-col">
				<h1 class="text-2xl font-bold">Disposable QR Code</h1>
				<p class="text-gray-500">
					Generate a disposable QR code that will be destroyed once scanned.
				</p>
			</div>
			<form
				method="POST"
				class="bg-muted dark:bg-background flex w-full max-w-[500px] flex-col items-center justify-end space-x-2 rounded-lg px-5 py-4 dark:border"
			>
				<div class="flex w-full flex-col gap-4">
					<div class="flex flex-row items-center gap-2">
						<span class="w-full">
							<Label for="data">Data</Label>
							<Input
								type="text"
								id="data"
								name="data"
								placeholder="https://github.com"
								class="text-[16px]"
								bind:value
								required
							/>
						</span>

						<span class="flex w-fit flex-col items-start justify-center">
							<span class="flex flex-row items-center gap-2">
								<Label for="redirect">Redirect</Label>
								<Popover.Root>
									<Popover.Trigger>
										<Info class="text-muted-foreground h-5 w-5 hover:text-current" />
									</Popover.Trigger>
									<Popover.Content>
										<p class="text-sm text-gray-500">
											If enabled, the QR code will redirect to the provided URL when scanned instead
											of displaying the data.
										</p>
									</Popover.Content>
								</Popover.Root>
							</span>

							<Switch name="redirect" id="redirect" class="mt-2" />
						</span>
					</div>

					<Button type="submit" class="w-full">Generate</Button>
				</div>
			</form>
		</section>
	{/if}

	<div class="min-h-[380px] w-full">
		{#if state === State.Generate}
			<Button variant="outline" size="icon" class="ms-2" on:click={() => (state = State.Idle)}>
				<Undo2 class="h-4 w-4" />
			</Button>

			<div class="mx-auto flex w-96 flex-col items-center justify-start">
				<h1 class="mb-3 text-center text-2xl font-bold">Disposable QR Code</h1>
				<p class="text-center text-sm text-gray-500">
					Scan the QR code to open the link. Once it has been scanned, it will be destroyed and no
					longer accessible.
				</p>
			</div>
			<div class="flex w-full flex-row justify-center">
				<QrCode {...formData} />
			</div>
		{/if}
	</div>

	<Separator class="mx-auto my-10 w-4/5" />
	<footer class="mb-2">
		<GithubLink />
	</footer>
</MainContent>

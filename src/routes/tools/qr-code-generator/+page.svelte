<script lang="ts">
	import GithubLink from '@/components/custom/github-link/github-link.svelte';
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import { Separator } from '@/components/ui/separator';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import QrCode from '@/components/custom/qr-code/qr-code.svelte';
	import * as Select from '$lib/components/ui/select/index.js';
	import type { Selected } from 'bits-ui';
	import { Label } from '@/components/ui/label';

	type FileFormat = 'png' | 'jpeg' | 'webp' | 'svg';
	type FormData = {
		value: string;
		format: FileFormat;
		size: number;
	};

	enum State {
		Idle,
		Generate
	}

	let state: State = State.Idle;
	let value: string = '';
	let format: FileFormat = 'png';
	let size: number = 256;
	let formData: FormData = { value, format, size };

	const generate = () => {
		state = State.Generate;
		formData = { value, format, size };
	};

	const handleSelectedChange = (v: Selected<string> | undefined) =>
		(format = v?.value as FileFormat);
</script>

<MainContent>
	<form
		on:submit={generate}
		class="flex w-full max-w-sm flex-col items-center justify-end space-x-2 px-5"
	>
		<div class="flex w-full flex-col gap-4">
			<Label for="data">Data</Label>
			<Input
				type="text"
				id="data"
				placeholder="https://github.com"
				class="text-[16px]"
				bind:value
				required
			/>
			<div class="flex flex-row items-end justify-start gap-2">
				<span class="w-28">
					<Label for="size">Size</Label>
					<Input
						type="number"
						id="size"
						name="size"
						class="text-[16px]"
						bind:value={size}
						required
					/>
				</span>

				<span class="w-28">
					<Label for="format">Format</Label>
					<Select.Root
						onSelectedChange={handleSelectedChange}
						selected={{ value: 'png', label: 'png' }}
					>
						<Select.Trigger id="format" name="format">
							<Select.Value class="w-full text-[16px]" />
						</Select.Trigger>
						<Select.Content>
							{#each ['png', 'jpeg', 'webp', 'svg'] as format}
								<Select.Item value={format} label={format}>{format}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</span>
				<span class="flex w-28 flex-row items-center justify-end">
					<Button type="submit">Generate</Button>
				</span>
			</div>
		</div>
	</form>

	<div class="min-h-[380px]">
		{#if state === State.Generate}
			<QrCode {...formData} />
		{/if}
	</div>

	<Separator class="mx-auto my-10 w-4/5" />
	<footer class="mb-2">
		<GithubLink />
	</footer>
</MainContent>

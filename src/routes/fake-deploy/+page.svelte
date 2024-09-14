<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { toast } from 'svelte-sonner';
	import ListSpinner from '@/components/custom/list/list-spinner.svelte';
	import ListCheckmark from '@/components/custom/list/list-checkmark.svelte';

	enum DeploymentState {
		Idle,
		Pending,
		Building,
		Deploying,
		Optimizing,
		Success,
		Error
	}

	let states: DeploymentState[] = [];
	let state = DeploymentState.Idle;
	let framework: string | unknown;
	let projectName: string;

	const frameworks = [
		{
			value: 'sveltekit',
			label: 'SvelteKit'
		},
		{
			value: 'next',
			label: 'Next.js'
		},
		{
			value: 'astro',
			label: 'Astro'
		},
		{
			value: 'nuxt',
			label: 'Nuxt.js'
		}
	];

	const clearStates = () => (states = []);

	const completeState = (s: DeploymentState) => {
		states = [...states, s];

		s === DeploymentState.Success && clearStates();
		s === DeploymentState.Error && clearStates();
	};

	const setState = (s: DeploymentState) => {
		completeState(state);
		state = s;
	};

	const deploy = async () => {
		setState(DeploymentState.Pending);

		await new Promise((resolve) => setTimeout(resolve, 200));
		setState(DeploymentState.Building);

		await new Promise((resolve) => setTimeout(resolve, 2000));
		setState(DeploymentState.Deploying);

		await new Promise((resolve) => setTimeout(resolve, 2000));
		setState(DeploymentState.Optimizing);

		await new Promise((resolve) => setTimeout(resolve, 2000));

		const random = Math.random();
		if (random > 0.5) {
			setState(DeploymentState.Success);
		} else {
			setState(DeploymentState.Error);
		}
	};

	const handleClick = async () => {
		await deploy();
	};

	$: {
		if (state === DeploymentState.Success) {
			toast.success('Project deployed successfully!');
		} else if (state === DeploymentState.Error) {
			toast.error('Failed to deploy project!');
		}
	}

	$: deploying =
		state === DeploymentState.Pending ||
		state === DeploymentState.Building ||
		state === DeploymentState.Deploying ||
		state === DeploymentState.Optimizing ||
		state === DeploymentState.Success ||
		state === DeploymentState.Error;
</script>

<article class="mt-10 flex flex-row justify-center">
	{#if deploying}
		<div class="flex w-full flex-col items-center justify-center">
			<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
				Deploying your project:
			</h2>
			<ul class="max-w-md list-inside space-y-2 text-gray-500 dark:text-gray-400">
				{#if states.includes(DeploymentState.Pending)}
					<li class="flex items-center">
						{#if states.includes(DeploymentState.Building)}
							<ListCheckmark />
						{:else}
							<ListSpinner />
						{/if}
						Building your project
					</li>
				{/if}
				{#if states.includes(DeploymentState.Building)}
					<li class="flex items-center">
						{#if states.includes(DeploymentState.Deploying)}
							<ListCheckmark />
						{:else}
							<ListSpinner />
						{/if}
						Deploying...
					</li>
				{/if}
				{#if states.includes(DeploymentState.Deploying)}
					<li class="flex items-center">
						<div role="status">
							{#if states.includes(DeploymentState.Optimizing)}
								<ListCheckmark />
							{:else}
								<ListSpinner />
							{/if}
							<span class="sr-only">Loading...</span>
						</div>
						Optimizing...
					</li>
				{/if}
			</ul>
			{#if state === DeploymentState.Success}
				<div class="mt-8 flex w-full flex-col items-center justify-center">
					<pre
						class="flex flex-col gap-2 rounded-lg bg-black p-6 px-10 text-white dark:bg-white dark:text-black">
                        <code>Project: {projectName}</code>
                        <code>Framework: {framework}</code>
                        <Button
							variant="secondary"
							color="green"
							on:click={() => setState(DeploymentState.Idle)}
							class="mt-4">Go to deployment</Button
						>
						
                    </pre>
				</div>
			{/if}

			{#if state === DeploymentState.Error}
				<div class="mt-8 flex w-full flex-col items-center justify-center">
					<pre class="flex flex-col gap-2 rounded-lg bg-black p-6 px-10 text-red-500 dark:bg-white">
                        <code>{projectName} failed to deploy: </code>
                        <code class="">'{framework}' is not supported</code>
                        <Button
							variant="secondary"
							color="green"
							on:click={() => setState(DeploymentState.Idle)}
							class="mt-4">Rollback</Button
						>
                    </pre>
				</div>
			{/if}
		</div>
	{:else}
		<Card.Root class="w-[350px]">
			<Card.Header>
				<Card.Title>Create project</Card.Title>
				<Card.Description>Deploy your new project in one-click.</Card.Description>
			</Card.Header>
			<Card.Content>
				<form>
					<div class="grid w-full items-center gap-4">
						<div class="flex flex-col space-y-1.5">
							<Label for="name">Name</Label>
							<Input id="name" placeholder="Name of your project" bind:value={projectName} />
						</div>
						<div class="flex flex-col space-y-1.5">
							<Label for="framework">Framework</Label>
							<Select.Root onSelectedChange={(v) => (framework = v?.label)}>
								<Select.Trigger id="framework" name="framework">
									<Select.Value placeholder="Select" />
								</Select.Trigger>
								<Select.Content>
									{#each frameworks as framework}
										<Select.Item value={framework.value} label={framework.label}
											>{framework.label}</Select.Item
										>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>
					</div>
				</form>
			</Card.Content>
			<Card.Footer class="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button on:click={handleClick}>Deploy</Button>
			</Card.Footer>
		</Card.Root>
	{/if}
</article>

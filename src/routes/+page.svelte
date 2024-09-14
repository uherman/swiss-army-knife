<script lang="ts">
	import CalendarDays from 'lucide-svelte/icons/calendar-days';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import { Rocket, PocketKnife } from 'lucide-svelte';
	import CardSection from '@/components/custom/card-section/card-section.svelte';

	const cards = [
		{
			title: 'Fake Deploy',
			description: 'Simulate a fake deployment.',
			href: '/fake-deploy',
			color: 'bg-indigo-500',
			icon: Rocket
		}
	];
</script>

<MainContent>
	<HoverCard.Root>
		<HoverCard.Trigger
			href="https://github.com/uherman/swiss-army-knife"
			target="_blank"
			rel="noreferrer noopener"
			class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
		>
			@swiss-army-knife
		</HoverCard.Trigger>
		<HoverCard.Content class="w-80">
			<div class="flex justify-between space-x-4">
				<Avatar.Root>
					<Avatar.Fallback>
						<PocketKnife class="h-6 w-6" />
					</Avatar.Fallback>
				</Avatar.Root>
				<div class="space-y-1">
					<h4 class="text-sm font-semibold">@swiss-army-knife</h4>
					<p class="text-sm">All the tools you need in one place.</p>
					<div class="flex items-center pt-2">
						<CalendarDays class="mr-2 h-4 w-4 opacity-70" />
						<span class="text-muted-foreground text-xs"> Created September 2024 </span>
					</div>
				</div>
			</div>
		</HoverCard.Content>
	</HoverCard.Root>

	<CardSection {cards} />
</MainContent>

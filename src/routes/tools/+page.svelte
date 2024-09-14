<script lang="ts">
	import CardSection from '@/components/custom/card-section/card-section.svelte';
	import MainContent from '@/components/custom/layout/main-content.svelte';
	import { tools } from '@/utils/constants';
</script>

<MainContent>
	<CardSection cards={tools} />
</MainContent>

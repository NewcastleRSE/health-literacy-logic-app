<script>
	import ProblemCard from '$lib/components/ProblemCard.svelte';
	let { cardItems } = $props();
</script>

<div
	class="divide-y divide-gray-200 overflow-hidden rounded-lg sm:grid sm:grid-cols-2 sm:divide-y-0 dark:divide-white/10 dark:bg-gray-900 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/20 gap-2"
>
	{#each cardItems as card}
		<ProblemCard problem={card} />
	{/each}
	
</div>


<script>
    import ProblemCard from '$lib/components/ProblemCard.svelte';
    let {cardItems} = $props();
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each cardItems as card}
        <ProblemCard problem={card} />
    {/each}
</div>
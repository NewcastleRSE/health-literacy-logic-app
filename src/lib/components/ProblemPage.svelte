<script>
    import { sectionDictionary } from '$lib/utils/sectionDictionary';

    import ProblemSection from '$lib/components/ProblemSection.svelte';

    let {problem} = $props();
</script>

{#each Object.entries(problem) as [key, section] }
    {#if sectionDictionary[key]}
        <ProblemSection keyInfo={sectionDictionary[key]} section={section} key={key} />
    {/if}
{/each}
<p>{JSON.stringify(problem)}</p>

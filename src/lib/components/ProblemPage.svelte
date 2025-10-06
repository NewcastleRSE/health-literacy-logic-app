<script>
    import { sectionDictionary } from '$lib/utils/sectionDictionary';

    import ProblemSection from '$lib/components/ProblemSection.svelte';

    let {problem} = $props();
</script>

<h2 class="text-2xl font-bold mb-4">{problem['long-title']}</h2>
<span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">{problem['level']}</span>

{#each problem.sections as section}
    <ProblemSection section={section}/>
{/each}
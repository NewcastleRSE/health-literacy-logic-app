<script>
	import SubsectionChoiceButtons from './SubsectionChoiceButtons.svelte';

	let { section } = $props();
</script>


{#if section['content-type'] === 'list'}
    <h3 class="text-lg font-semibold mb-2">{section["long-title"]}</h3>
	<ul class="list-disc list-inside space-y-1">
		{#each section.content as item}
			<li class="mb-1">{item}</li>
		{/each}
	</ul>
{:else if section['content-type'] === 'section-choice'}
    <h3 class="text-lg font-semibold mb-2">{section["long-title"]}</h3>
	<SubsectionChoiceButtons choices={section.content} key={section['short-title']} />
{:else if section['content-type'] === 'project-list'}
    <h3 class="text-lg font-semibold mb-2">{section["long-title"]}</h3>
    {#each section.content as project}
        <h4 class="text-md font-semibold mb-1">{project["long-title"]}</h4>
        <p class="text-sm text-gray-600">{project["project-email"]}</p>
    {/each}
{/if}

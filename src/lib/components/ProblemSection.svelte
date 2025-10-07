<script>
	import SubsectionChoiceButtons from './SubsectionChoiceButtons.svelte';

	let { section } = $props();
</script>

<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-900 dark:text-gray-100">{section["long-title"]}</dt>
        <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">{#if section['content-type'] === 'list'}
	<ul class="list-disc list-inside space-y-1">
		{#each section.content as item}
			<li class="mb-1">{item}</li>
		{/each}
	</ul>
{:else if section['content-type'] === 'section-choice'}
	<SubsectionChoiceButtons choices={section.content} key={section['short-title']} />
{:else if section['content-type'] === 'project-list'}
    {#each section.content as project}
        <h4 class="text-md font-semibold mb-1">{project["long-title"]}</h4>
        <p class="text-sm text-gray-600">{project["project-email"]}</p>
    {/each}
{/if}</dd>
</div>

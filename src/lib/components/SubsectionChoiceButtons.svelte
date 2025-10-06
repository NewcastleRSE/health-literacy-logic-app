<script>
	import { onMount } from 'svelte';
	import ProblemSection from './ProblemSection.svelte';

	import { sectionDictionary } from '$lib/utils/sectionDictionary';

	let { choices, key } = $props();
	let selectedSubsection = $state(undefined);
	let selectedObject = $derived.by(() => {
		if (!selectedSubsection) {
			return null;
		} else {
			return choices.find((s) => s['choice-option'] === selectedSubsection);
		}
	});

	onMount(() => {
		selectedSubsection = choices[0]['choice-option'];
	});
</script>

{#if choices}
	<fieldset aria-label="Choose a subsection">
		<div class="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
			{#each choices as choice}
				<label
					aria-label={choice['choice-option']}
					class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-600 has-[:disabled]:border-gray-400 has-[:disabled]:bg-gray-200 has-[:disabled]:opacity-25 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-indigo-600 dark:border-white/10 dark:bg-gray-800/50 dark:has-[:checked]:border-indigo-500 dark:has-[:checked]:bg-indigo-500 dark:has-[:disabled]:border-white/10 dark:has-[:disabled]:bg-gray-800 dark:has-[:focus-visible]:outline-indigo-500"
				>
					<input
						type="radio"
						name={key}
						value={choice['choice-option']}
						class="absolute inset-0 appearance-none focus:outline focus:outline-0 disabled:cursor-not-allowed"
						bind:group={selectedSubsection}
					/>
					<span
						class="text-sm font-light text-gray-900 uppercase group-has-[:checked]:text-white dark:text-white"
						>{choice['choice-option']}</span
					>
				</label>
			{/each}
		</div>
	</fieldset>

	{#if selectedObject}
		<p class="my-3 text-lg">{selectedObject['choice-subtitle']}</p>
		{#if selectedObject['content-type'] === 'subsection'}
			{#each selectedObject['content'] as subsection}
				<ProblemSection section={subsection} />
			{/each}
		{:else if selectedObject['content-type'] === 'section-choice'}
			<ProblemSection section={selectedObject} />
		{/if}
	{/if}
{/if}

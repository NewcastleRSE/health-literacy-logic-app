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

	const activeStyling = " has-checked:bg-blue-600";

	const buttonStyling = [
		// first button
		"group relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 focus:z-10 dark:bg-white/10 dark:text-white dark:inset-ring-gray-700 dark:hover:bg-white/20" + activeStyling,
		// middle buttons
		"group relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 focus:z-10 dark:bg-white/10 dark:text-white dark:inset-ring-gray-700 dark:hover:bg-white/20" + activeStyling,
		// last button
		"group relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 focus:z-10 dark:bg-white/10 dark:text-white dark:inset-ring-gray-700 dark:hover:bg-white/20" + activeStyling
	]

	onMount(() => {
		selectedSubsection = choices[0]['choice-option'];
	});
</script>

{#if choices}
	<fieldset aria-label="Choose a subsection" class="sm:col-span-2">
		<div class="isolate inline-flex rounded-md shadow-xs dark:shadow-none">
			{#each choices as choice, i}
				<label
					aria-label={choice['choice-option']}
					class="{i === 0 ? buttonStyling[0] : i === choices.length - 1 ? buttonStyling[2] : buttonStyling[1]}"
				>
					<input
						type="radio"
						name={key}
						value={choice['choice-option']}
						class="absolute inset-0 appearance-none focus:outline focus:outline-0 disabled:cursor-not-allowed cursor-pointer"
						bind:group={selectedSubsection}
					/>
					<span
						class="text-sm font-light text-gray-900 group-has-[:checked]:text-white dark:text-white"
						>{choice['choice-option']}</span
					>
				</label>
			{/each}
		</div>
	</fieldset>

	{#if selectedObject}
		<dt
			class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:col-start-2 sm:mt-0 dark:text-gray-300"
		>
			{selectedObject['choice-subtitle']}
		</dt>
		{#if selectedObject['content-type'] === 'subsection'}
			<div class="border-t border-gray-100 dark:border-white/5 col-span-3">
				<dl class="divide-y divide-gray-100 dark:divide-white/5">
					{#each selectedObject['content'] as subsection}
						<ProblemSection section={subsection} />
					{/each}
				</dl>
			</div>
		{:else if selectedObject['content-type'] === 'section-choice'}
		<div class="border-t border-gray-100 dark:border-white/5 col-span-3">
				<dl class="divide-y divide-gray-100 dark:divide-white/5">
			<ProblemSection section={selectedObject} />
				</dl>
			</div>
		{/if}
	{/if}
{/if}

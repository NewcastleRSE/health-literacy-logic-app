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
	<fieldset aria-label="Choose a subsection" class="sm:col-span-2">
		<div class="mt-2 grid grid-cols-3 justify-center gap-3">
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

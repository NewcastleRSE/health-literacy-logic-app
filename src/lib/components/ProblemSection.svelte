<script>
	import { sectionDictionary } from '$lib/utils/sectionDictionary';
	import { base } from '$app/paths';
	import SubsectionChoiceButtons from './SubsectionChoiceButtons.svelte';

	let { section } = $props();
	let sectionIcon = $derived(sectionDictionary[section['short-title']]?.icon);
</script>

<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
	{#if section['content-type'] === 'list'}
		<div class="flex flex-row space-between gap-4 items-center h-fit">
			<span
				class="inline-flex rounded-lg p-3 dark:bg-gray-100/50 min-w-fit"
			>
			<img src="{base}/assets/icons/{sectionIcon}" alt="icon" width="32" height="32" /></span>
			<dt class="text-sm font-medium text-gray-900 dark:text-gray-100">{section['long-title']}</dt>
		</div>
		<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300 self-center">
			<ul class="list-inside list-disc space-y-1">
				{#each section.content as item}
					<li class="mb-1">{item}</li>
				{/each}
			</ul>
		</dd>
	{:else if section['content-type'] === 'section-choice'}
		<div class="flex flex-row space-between gap-4 items-center h-fit">

			<span
				class="inline-flex rounded-lg p-3 dark:bg-gray-100/50 min-w-fit"
			>
			<img src="{base}/assets/icons/{sectionIcon}" alt="icon" width="32" height="32" /></span>

		<dt class="self-center text-sm font-medium text-gray-900 dark:text-gray-100">
			{section['long-title']}
		</dt>
		</div>
		<SubsectionChoiceButtons choices={section.content} key={section['short-title']} />
	{:else if section['content-type'] === 'project-list'}
		<div class="flex flex-row space-between gap-4 items-center h-fit">
	<span
				class="inline-flex rounded-lg p-3 dark:bg-gray-100/50 min-w-fit"
			>
			<img src="{base}/assets/icons/{sectionIcon}" alt="icon" width="32" height="32" /></span>
		<dt class="col-span-3 text-sm font-medium text-gray-900 dark:text-gray-100">
			{section['long-title']}
		</dt>
		</div>
		<dd
			class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:col-start-2 sm:mt-0 dark:text-gray-300 self-center"
		>
			{#each section.content as project}
				<div class="border-t border-gray-100 dark:border-white/5">
					<dl class="divide-y divide-gray-100 dark:divide-white/5">
						<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt class="text-sm font-medium text-gray-900 dark:text-gray-100">Project name</dt>
							<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
								{project['long-title']}
							</dd>
							<dt class="text-sm font-medium text-gray-900 dark:text-gray-100">Email</dt>
							<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-gray-300">
								{project['project-email']}
							</dd>
						</div>
					</dl>
				</div>
			{/each}
		</dd>
	{/if}
</div>

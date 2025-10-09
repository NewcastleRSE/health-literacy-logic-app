<script>
	import { sectionDictionary } from '$lib/utils/sectionDictionary';
	import {base} from '$app/paths';

	import ProblemSection from '$lib/components/ProblemSection.svelte';

	let { problem } = $props();
</script>

<div
	class="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800/50 dark:shadow-none dark:inset-ring dark:inset-ring-white/10"
>
	<div class="px-4 py-6 sm:px-6">
		<div class="flex items-center justify-between">
			<div>
		<p class="mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-gray-300">
			{problem['short-title']}
		</p>
		<h3 class="text-base/7 font-semibold text-gray-900 dark:text-white">{problem['long-title']}</h3>
		<span class="mb-2 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800"
			>{problem['level']}</span
		>
		</div>
		{#if problem.icon}
			<div>
				<span
					class="inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400"
				>
					<img src="{base}/assets/icons/{problem.icon}" alt="icon" width="64" height="64" />
				</span>
			</div>
		{/if}
		</div>
	</div>
	<div class="border-t border-gray-100 dark:border-white/5">
		<dl class="divide-y divide-gray-100 dark:divide-white/5">
			{#each problem.sections as section}
				<ProblemSection {section} />
			{/each}
		</dl>
	</div>
</div>

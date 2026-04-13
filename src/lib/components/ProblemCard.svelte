<script>
	import { levelsDictionary } from '$lib/utils/levelsDictionary';
	let { problem } = $props();
</script>

<div
	class="group relative rounded-br-lg rounded-bl-lg border-gray-200 bg-white p-6 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 sm:rounded-bl-none sm:odd:not-nth-last-2:border-b sm:even:border-l sm:even:not-last:border-b dark:border-white/10 dark:bg-gray-800/50 dark:focus-within:outline-indigo-500 shadow-sm hover:shadow-lg transition-shadow duration-200"
>
	{#if problem.icon}
		<div>
			<!-- <span
				class="inline-flex rounded-lg p-3 {levelsDictionary[problem.level]["background"]} {levelsDictionary[problem.level]["text"]}"
			> -->
			<span
				class="inline-flex rounded-lg p-3 bg-indigo-50 dark:bg-indigo-500/50"
			>
				<img src="assets/icons/{problem.icon}" alt="icon" width="24" height="24" />
			</span>
		</div>
	{/if}
	<div class="mt-8">
		<p class="mt-2 text-sm font-light text-gray-500 dark:text-gray-400 mb-2">
		<a href="problems/{problem.id}" class="focus:outline-hidden">
			<!-- Extend touch target to entire panel -->
			<span aria-hidden="true" class="absolute inset-0"></span>
			{problem['short-title']}
		</a>
		</p>
		<h3 class="text-lg font-semibold text-gray-700 dark:text-white">
			{problem['long-title']}
		</h3>
	</div>
	<span
		aria-hidden="true"
		class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 dark:text-gray-500 dark:group-hover:text-gray-200"
	>
		<svg viewBox="0 0 24 24" fill="currentColor" class="size-6">
			<path
				d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
			/>
		</svg>
	</span>
</div>

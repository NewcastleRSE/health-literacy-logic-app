<script>
    let { problem } = $props();

</script>


<div
		class="group relative rounded-br-lg rounded-bl-lg border-gray-200 bg-white p-6 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 sm:rounded-bl-none sm:odd:not-nth-last-2:border-b sm:even:border-l sm:even:not-last:border-b dark:border-white/10 dark:bg-gray-800/50 dark:focus-within:outline-indigo-500"
	>
		<div>
			<span
				class="inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400"
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					data-slot="icon"
					aria-hidden="true"
					class="size-6"
				>
					<path
						d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</span>
		</div>
		<div class="mt-8">
			<h3 class="text-base font-semibold text-gray-900 dark:text-white">
				<a href="problems/{problem.id}" class="focus:outline-hidden">
					<!-- Extend touch target to entire panel -->
					<span aria-hidden="true" class="absolute inset-0"></span>
					{problem['short-title']}
				</a>
			</h3>
			<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
				{problem['long-title']}
			</p>
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



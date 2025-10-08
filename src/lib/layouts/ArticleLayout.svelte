<script>
	let { children, title, eyebrow, lead } = $props();

    console.log(title);
</script>

<div class="bg-white px-6 py-32 lg:px-8 dark:bg-gray-900">
	<div class="mx-auto max-w-3xl text-base/7 text-gray-700 dark:text-gray-300">
        {#if eyebrow}
		<p class="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{eyebrow}</p>
        {/if}
		<h1
			class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white"
		>
			{title}
		</h1>
        {#if lead}
		<p class="mt-6 text-xl/8">
			{lead}
		</p>
        {/if}
		<div class="mt-10 max-w-2xl text-gray-600 dark:text-gray-400 flex flex-col gap-6">
			{@render children?.()}
		</div>
	</div>
</div>

<div id="article-body" class="mx-auto flex max-w-4xl flex-col gap-3 leading-relaxed"></div>

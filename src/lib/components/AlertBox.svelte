<script>
	let { alert } = $props();

	import { base } from '$app/paths';
	import MarkdownContent from '$lib/components/MarkdownContent.svelte';

	let colours = {
		note: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900',
		warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900',
		danger: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900',
		tip: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900'
	};
</script>

{#if alert}
	<div
		class="flex items-center gap-4 rounded-lg p-4 text-sm font-medium {colours[
			alert['alert-type']
		]} my-4 w-full"
		role="alert"
	>
		<img src="{base}/assets/icons/{alert['alert-type']}.svg" alt="icon" width="64" height="64" />
		<div class="flex flex-col gap-2">
			<p class="mb-2 text-lg font-bold">{alert['alert-title']}</p>
			<p><MarkdownContent markdown={alert['alert-content']} /></p>
		</div>
	</div>
{/if}

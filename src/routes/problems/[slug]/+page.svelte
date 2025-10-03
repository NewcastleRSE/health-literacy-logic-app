<script>
	import ProblemPage from '$lib/components/ProblemPage.svelte';

	let { data } = $props();
	let problem = $state(null);
	if (!data || data.status === 404) {
		throw new Error('Data not found or 404');
	} else {
		problem = data.problem;
	}
</script>


{#if problem}
	<ProblemPage {problem} />
{:else}
    <p>Loading...</p>
{/if}

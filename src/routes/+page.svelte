<script>
    
    import CardCollection from '$lib/components/CardCollection.svelte';
    let {data} = $props();
    let problemsKeys = $derived(Object.keys(data.problems));
    let problems = $derived(Object.values(data.problems));
</script>

<h1>Problems</h1>

<CardCollection cardItems={problems} />


<script>
    let {data} = $props();
    let problemsKeys = $derived(Object.keys(data.problems));
</script>

<h1>Problems</h1>
{#each problemsKeys as key}
    <div>
        <h2>{data.problems[key]['long-title']}</h2>
    </div>
{/each}

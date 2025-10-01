<script>

    let {data} = $props();
    let problem = $state(null);
    if (!data || data.status === 404) {
        throw new Error('Data not found or 404');
    } else {
        problem = data.problem;
    }
</script>

{#if problem}
    <h1>{problem['short-title']}</h1>
    <h2>{problem['long-title']}</h2>
    <h3>Level: {problem.level}</h3>
    <h4>People involved:</h4>
    <ul>
        {#each problem['people-involved'] as person}
            <li>{person}</li>
        {/each}
    </ul>
    <p>{JSON.stringify(problem)}</p>
{/if}
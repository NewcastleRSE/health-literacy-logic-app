<script>
    import SubsectionChoiceButtons from "./SubsectionChoiceButtons.svelte";

    let {keyInfo, section, key} = $props();
</script>

{#if !keyInfo.ignore}
    {#if keyInfo.display === 'pre-title'}
        <h2 class={keyInfo.classString}>{section}</h2>
    {:else if keyInfo.display === 'title'}
        <h1 class={keyInfo.classString}>{section}</h1>
    {:else if keyInfo.display === 'chip'}
        <div class={keyInfo.classString}>{section}</div>
    {:else if keyInfo.display === 'section'}
        <h3 class={keyInfo.headerClassString}>{keyInfo.sectionTitle}</h3>
        {#if keyInfo.displayType === 'list'}
            <ul class={keyInfo.contentClassString}>
                {#each section as item}
                    <li class="mb-1">{item}</li>
                {/each}
            </ul>
        {/if}
    {:else if keyInfo.display === 'subsection'}
        <h3 class={keyInfo.headerClassString}>{keyInfo.sectionTitle}</h3>
        <SubsectionChoiceButtons {keyInfo} {section} {key} />
    {:else}
        <div class="mb-4">
            <h3 class="text-lg font-semibold mb-2">{keyInfo.title}</h3>
            <p class="text-gray-700">{section}</p>
        </div>
    {/if}
{/if}
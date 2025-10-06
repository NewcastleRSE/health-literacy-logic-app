<script>
    import SubsectionChoiceButtons from "./SubsectionChoiceButtons.svelte";

    let {keyInfo, section} = $props();
    
</script>

{#if keyInfo.display === 'subsection'}
    <h3 class={keyInfo.headerClassString}>{section["long-title"]}</h3>
    <SubsectionChoiceButtons section={section.content} key={section["short-title"]}/>
{:else}
    <div class="mb-4">
        <h3 class="text-lg font-semibold mb-2">{keyInfo.title}</h3>
        <p class="text-gray-700">{section}</p>
    </div>
{/if}

<ps>{JSON.stringify(section)}</ps>
